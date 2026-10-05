/* Parcours complet dans un vrai navigateur, en vue téléphone (390 × 844) :
   questionnaire, questions conditionnelles, notes, pistes, PDF, page HTML, lien de partage, catalogue, retour, remise à zéro.
   Prérequis, dans ce dossier ou un dossier parent : npm i playwright pdfmake@0.2.23
   Facultatif, pour des captures avec les vraies polices : npm i @fontsource/atkinson-hyperlegible @fontsource/caveat @fontsource/familjen-grotesk
   Usage : node dev/test_navigateur.js   (captures et fichiers téléchargés dans OUT, par défaut un dossier temporaire) */
const fs = require("fs"), path = require("path"), os = require("os"), http = require("http");
const find = m => { for (const p of [process.cwd(), __dirname, path.join(__dirname, "..")]) { try { return require.resolve(m, { paths: [p] }); } catch (e) {} } return null; };
const PW = find("playwright");
if (!PW) { console.log("Playwright introuvable : npm i playwright pdfmake@0.2.23"); process.exit(2); }
const { chromium } = require(PW);
const PDFMIN = find("pdfmake/build/pdfmake.min.js");
const PDFDIR = PDFMIN && path.dirname(PDFMIN);
const FONTS = find("@fontsource/caveat/package.json") ? path.dirname(path.dirname(find("@fontsource/caveat/package.json"))) : null;
const ROOT = path.join(__dirname, "..");
const OUT = process.env.OUT || path.join(os.tmpdir(), "boussole-maths-physique-captures");
fs.mkdirSync(OUT, { recursive: true });
let BASE = "";

let fails = 0;
const ok = (cond, msg) => { console.log((cond ? "  ok  " : "  KO  ") + msg); if (!cond) fails++; };

/* Petit serveur local pour la page (le lien de partage n'existe qu'en http) */
function serve() {
  const server = http.createServer((req, res) => {
    const u = decodeURIComponent(new URL(req.url, "http://x").pathname);
    const f = path.join(ROOT, u === "/" ? "index.html" : u);
    if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "Content-Type": f.endsWith(".html") ? "text/html; charset=utf-8" : "application/octet-stream" });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise(r => server.listen(0, "127.0.0.1", () => r(server)));
}
async function route(ctx) {
  // pdfmake servi depuis la copie locale (le CDN n'est pas toujours joignable pendant les tests)
  await ctx.route("https://cdn.jsdelivr.net/npm/pdfmake@0.2.23/build/*", r => {
    if (!PDFDIR) return r.abort();
    const f = path.join(PDFDIR, path.basename(new URL(r.request().url()).pathname));
    r.fulfill({ status: 200, contentType: "application/javascript", body: fs.readFileSync(f) });
  });
  // Polices du site depuis des copies locales (@fontsource) si elles sont installées, sinon polices de secours
  const faces = [["Atkinson Hyperlegible", "atkinson-hyperlegible", [[400, "normal"], [700, "normal"], [400, "italic"]]],
    ["Caveat", "caveat", [[500, "normal"], [600, "normal"]]], ["Familjen Grotesk", "familjen-grotesk", [[500, "normal"], [600, "normal"], [700, "normal"]]]];
  const css = !FONTS ? "" : faces.flatMap(([fam, pkg, ws]) => ws.map(([w, st]) => `@font-face{font-family:"${fam}";font-style:${st};font-weight:${w};font-display:swap;src:url(https://fonts.gstatic.com/fs/${pkg}/${pkg}-latin-${w}-${st}.woff2) format("woff2");}`)).join("\n");
  await ctx.route(/fonts\.googleapis\.com/, r => r.fulfill({ status: 200, contentType: "text/css", body: css }));
  await ctx.route(/fonts\.gstatic\.com/, r => {
    const m = new URL(r.request().url()).pathname.match(/\/fs\/([^/]+)\/(.+)$/);
    if (!FONTS || !m) return r.abort();
    r.fulfill({ status: 200, contentType: "font/woff2", body: fs.readFileSync(path.join(FONTS, m[1], "files", m[2])) });
  });
}
async function newCtx(browser) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, locale: "fr-FR", acceptDownloads: true });
  await ctx.grantPermissions(["clipboard-read", "clipboard-write"], { origin: BASE.replace(/\/$/, "") });
  await route(ctx);
  return ctx;
}
function watch(page, tag) {
  const errs = [];
  page.on("pageerror", e => errs.push(tag + " pageerror: " + e.message));
  page.on("console", m => { if (m.type() === "error" && !/Failed to load resource/.test(m.text())) errs.push(tag + " console: " + m.text()); });
  return errs;
}
const click = (page, q, v) => page.click(`#block [data-q="${q}"][data-v="${v}"]`);
async function noOverflow(page, label) {
  const w = await page.evaluate(() => document.documentElement.scrollWidth);
  ok(w <= 390, `${label} : pas de défilement horizontal (largeur ${w})`);
}

(async () => {
  const server = await serve();
  BASE = `http://127.0.0.1:${server.address().port}/`;
  console.log("Captures : " + OUT + (FONTS ? "" : " (polices de secours)") + (PDFDIR ? "" : " — pdfmake absent : PDF non testé"));
  const browser = await chromium.launch();
  const ctx = await newCtx(browser);
  const page = await ctx.newPage();
  const errs = watch(page, "main");
  await page.goto(BASE);
  await page.waitForSelector("#block .q");
  await page.screenshot({ path: path.join(OUT, "01-accueil.png"), fullPage: false });
  await noOverflow(page, "Accueil");

  // Pistes avant 8 réponses
  await page.click("#tab-btn-r");
  ok(/Pas encore assez de réponses/.test(await page.textContent("#results")), "Pistes avant 8 réponses : message d'attente");
  await page.click("#tab-btn-q");

  // ----- Bloc 1
  ok(!(await page.$('#block [data-qwrap="deja_quoi"]')), "« Lesquelles ? » cachée au départ");
  await page.fill('[data-text="prenom"]', "Camille");
  await click(page, "maths_opt", "expertes");
  await click(page, "spe1", "si");
  await click(page, "moy", "3");
  await click(page, "niv_maths", "3");
  await click(page, "niv_pc", "2");
  await click(page, "deja", "idees");
  ok(!!(await page.$('#block [data-qwrap="deja_quoi"]')), "« Lesquelles ? » apparaît après « J'ai déjà quelques idées »");
  await page.fill('[data-text="deja_quoi"]', "ESTACA ou une école généraliste");
  await click(page, "inge", "principal");
  // Bascule aller-retour : la question disparaît puis revient avec son texte
  await click(page, "deja", "peu");
  ok(!(await page.$('#block [data-qwrap="deja_quoi"]')), "« Lesquelles ? » disparaît si on change d'avis");
  await click(page, "deja", "idees");
  ok((await page.inputValue('[data-text="deja_quoi"]')) === "ESTACA ou une école généraliste", "Le texte de « Lesquelles ? » est conservé");
  await page.screenshot({ path: path.join(OUT, "02-bloc1.png"), fullPage: true });
  await noOverflow(page, "Bloc 1");
  await page.click("#next");

  // ----- Bloc 2
  ok(!!(await page.$('#block [data-qwrap="m_expertes"]')), "Question maths expertes affichée (option cochée)");
  const b2 = { m_raison: "2", m_calcul: "3", m_expertes: "2", m_meca: "3", m_ondes: "2", m_chim: "1", m_tp: "2", m_info: "2", m_techno: "3", m_vivant: "1", m_fr: "1", m_lang: "2", m_arts: "1", m_sport: "2" };
  for (const [q, v] of Object.entries(b2)) await click(page, q, v);
  await page.click('#block [data-note-open="n_cours"]');
  await page.fill('[data-note="n_cours"]', "Le chapitre sur la mécanique des fluides");
  await page.screenshot({ path: path.join(OUT, "03-bloc2.png"), fullPage: true });
  await noOverflow(page, "Bloc 2");
  await page.click("#next");

  // ----- Bloc 3
  const b3 = { s_enc: "-1", s_conc: "1", s_gen: "?", s_team: "2", s_eff: "-1", s_terr: "1" };
  for (const [q, v] of Object.entries(b3)) await click(page, q, v);
  await page.screenshot({ path: path.join(OUT, "04-bloc3.png"), fullPage: true });
  await noOverflow(page, "Bloc 3");
  await page.click("#next");

  // ----- Bloc 4
  for (const v of ["aero", "auto", "energie", "robot", "transport"]) await click(page, "interets", v);
  for (const v of ["vente", "chimie"]) await click(page, "eviter", v);
  await page.click('#block [data-note-open="n_interets"]');
  await page.fill('[data-note="n_interets"]', "Les vidéos sur les moteurs d'avion");
  await page.screenshot({ path: path.join(OUT, "05-bloc4.png"), fullPage: true });
  await noOverflow(page, "Bloc 4");
  await page.click("#next");

  // ----- Bloc 5
  const b5 = { e_duree: "b5", e_prepa: "peut", e_engage: "rassure", e_fac: "bof", e_alt: "peut", e_mob: "france", e_budget: "?", e_conc: "ok", e_cesure: "non" };
  for (const [q, v] of Object.entries(b5)) await click(page, q, v);
  await page.screenshot({ path: path.join(OUT, "06-bloc5.png"), fullPage: true });
  await noOverflow(page, "Bloc 5");
  await page.click("#next");

  // ----- Bloc 6
  await click(page, "f_scene", "concevoir");
  await click(page, "f_scene", "equipe");
  await click(page, "f_scene", "labo");
  ok(/2 maximum/.test(await page.textContent("#lim-f_scene")), "Limite de 2 choix respectée avec message");
  for (const v of ["techno", "argent", "apprendre"]) await click(page, "f_val", v);
  await page.fill('[data-text="f_metier"]', "ingénieur dans l'aéronautique");
  await page.fill('[data-text="f_flow"]', "Les jeux de course");
  await page.fill('[data-text="f_non"]', "Commercial, je n'aime pas vendre");
  await page.screenshot({ path: path.join(OUT, "07-bloc6.png"), fullPage: true });
  await noOverflow(page, "Bloc 6");
  ok((await page.textContent("#next")).includes("Voir les pistes"), "Dernier bloc : bouton « Voir les pistes »");
  await page.click("#next");

  // ----- Pistes
  await page.waitForSelector("#results .piste");
  const res = await page.evaluate(() => ({
    h2: document.querySelector("#results .block-head h2").textContent,
    lead: Array.from(document.querySelectorAll("#results .piste.lead h3")).map(e => e.textContent),
    also: document.querySelectorAll("#results .piste:not(.lead)").length,
    ideas: (document.querySelector("#results .ideas") || {}).innerText || "",
    notes: Array.from(document.querySelectorAll("#results .notes-list li")).map(e => e.innerText),
    tension: (document.querySelector("#results .tension") || {}).innerText || "",
    portrait: document.querySelector("#results .portrait").textContent,
    count: document.querySelector("#count-r").textContent
  }));
  console.log("  Titre :", res.h2);
  console.log("  Top 5 :", res.lead.join(" | "));
  console.log("  Portrait :", res.portrait);
  console.log("  Tiraille :", res.tension.replace(/\n/g, " / "));
  console.log("  Idées :\n    " + res.ideas.replace(/\n+/g, "\n    "));
  ok(res.h2 === "Les pistes de Camille", "Titre personnalisé");
  ok(res.lead.length === 5, "5 pistes en tête");
  ok(res.also >= 5, "Pistes « À creuser aussi » présentes");
  ok(/ESTACA/.test(res.ideas), "Panneau idées : ESTACA citée");
  ok(/aéronautique/i.test(res.ideas), "Panneau idées : domaine aéronautique reconnu (via le métier)");
  ok(res.notes.length === 2, "Les 2 notes apparaissent dans les pistes");
  ok(res.count === "prêt", "Compteur de l'onglet Pistes : prêt");
  ok(/ESTACA ou IPSA sont privées/.test(res.tension), "« Ce qui tiraille » : budget à voir avec les parents");
  ok(/métier d'ingénieur/.test(res.ideas), "Panneau idées : « ingénieur » lu comme un métier");
  ok(!res.lead.some(n => /Marine marchande/.test(n)), "Marine marchande hors du top 5 sans signal pour la vie en mer");
  await page.screenshot({ path: path.join(OUT, "08-pistes-haut.png"), fullPage: false });
  await page.screenshot({ path: path.join(OUT, "09-pistes-complet.png"), fullPage: true });
  await noOverflow(page, "Pistes");
  // Détails d'une piste
  await page.click("#results .piste.lead details.more summary");
  ok(/Admission|Après/.test(await page.textContent("#results .piste.lead details.more")), "Détails d'une piste dépliables");

  if (PDFDIR) {
    // ----- PDF
    const [dlPdf] = await Promise.all([page.waitForEvent("download", { timeout: 30000 }), page.click('#results [data-action="pdf"] >> nth=0')]);
    const pdfPath = path.join(OUT, dlPdf.suggestedFilename());
    await dlPdf.saveAs(pdfPath);
    const pdfBuf = fs.readFileSync(pdfPath);
    ok(pdfBuf.slice(0, 4).toString() === "%PDF" && pdfBuf.length > 20000, `PDF téléchargé (${dlPdf.suggestedFilename()}, ${Math.round(pdfBuf.length / 1024)} Ko)`);
    await page.waitForFunction(() => /PDF téléchargé/.test(document.querySelector("#results .dl-status").textContent));
    ok(true, "Message « PDF téléchargé. » affiché");
  }

  // ----- HTML
  const [dlHtml] = await Promise.all([page.waitForEvent("download"), page.click('#results [data-action="html"] >> nth=0')]);
  const htmlPath = path.join(OUT, dlHtml.suggestedFilename());
  await dlHtml.saveAs(htmlPath);
  const html = fs.readFileSync(htmlPath, "utf8");
  ok(/Les pistes de <span class="fluo">Camille<\/span>/.test(html) && /boussole-data/.test(html) && /Toutes les réponses/.test(html), `Page HTML téléchargée (${Math.round(html.length / 1024)} Ko)`);
  ok(html.includes("ESTACA ou une école généraliste") && html.includes("mécanique des fluides"), "La page HTML contient l'idée de départ et les notes");
  const rp = await ctx.newPage();
  const rerrs = watch(rp, "rapport");
  await rp.goto("file://" + htmlPath);
  await rp.screenshot({ path: path.join(OUT, "10-rapport-html.png"), fullPage: true });
  await noOverflow(rp, "Rapport HTML");
  await rp.close();

  // ----- Lien de partage
  await page.click('#results [data-action="link"] >> nth=0');
  await page.waitForFunction(() => /Lien (copié|partagé)|Copie le lien/.test(document.querySelector("#results .dl-status").textContent), null, { timeout: 5000 });
  const status = await page.textContent("#results .dl-status");
  let link = "";
  if (/copié/.test(status)) link = await page.evaluate(() => navigator.clipboard.readText());
  else link = await page.inputValue("#share-url");
  ok(/#r1\.[A-Za-z0-9_-]+$/.test(link), `Lien de partage produit (${link.length} caractères) : « ${status} »`);
  const lead1 = res.lead;

  // Ouverture du lien sur un « autre appareil » (contexte vierge)
  const ctx2 = await newCtx(browser);
  const p2 = await ctx2.newPage();
  const errs2 = watch(p2, "lien");
  await p2.goto(link);
  await p2.waitForSelector("#results .piste.lead");
  const lead2 = await p2.$$eval("#results .piste.lead h3", els => els.map(e => e.textContent));
  ok(JSON.stringify(lead1) === JSON.stringify(lead2), "Lien ouvert ailleurs : mêmes 5 pistes");
  ok(/ouvertes depuis un lien/.test(await p2.textContent("#banner")), "Bandeau « ouvertes depuis un lien »");
  ok((await p2.evaluate(() => location.hash)) === "", "Le fragment est retiré de l'adresse");
  const notes2 = await p2.$$eval("#results .notes-list li", els => els.length);
  ok(notes2 === 2, "Les notes voyagent dans le lien");
  const ideas2 = await p2.textContent("#results .ideas");
  ok(/ESTACA/.test(ideas2), "L'idée de départ voyage dans le lien");
  await p2.screenshot({ path: path.join(OUT, "11-lien-ouvert.png"), fullPage: false });
  // Vérifier la réponse conditionnelle : en revenant au bloc 1, « Lesquelles ? » est visible avec son texte
  await p2.click("#tab-btn-q");
  await p2.click('[data-step="0"]');
  ok((await p2.inputValue('[data-text="deja_quoi"]')) === "ESTACA ou une école généraliste", "Lien : « Lesquelles ? » retrouvée avec son texte");

  // Lien ouvert sur un appareil qui a déjà d'autres réponses : on demande avant de remplacer
  const ctx3 = await newCtx(browser);
  const p3 = await ctx3.newPage();
  const errs3 = watch(p3, "conflit");
  await p3.goto(BASE);
  await p3.waitForSelector("#block .q");
  await p3.fill('[data-text="prenom"]', "Autre");
  await p3.goto(link);
  await p3.waitForSelector("#banner:not([hidden])");
  const ban3 = await p3.textContent("#banner");
  ok(/remplace les réponses déjà enregistrées/.test(ban3), "Lien sur un appareil déjà utilisé : demande avant de remplacer");
  await p3.click('#banner [data-banner="1"]');
  ok((await p3.inputValue('[data-text="prenom"]')) === "Autre", "« Garder les miennes » garde les réponses");
  // Lien abîmé
  await p3.goto(BASE + "#r1.abc$$");
  await p3.goto(BASE + "#r1.AAAAAAAAAA");
  await p3.waitForSelector("#banner:not([hidden])");
  ok(/incomplet/.test(await p3.textContent("#banner")), "Lien coupé : message « incomplet »");

  // ----- Catalogue
  await page.click("#tab-btn-c");
  await page.waitForSelector("#catalog .card");
  const nCards = await page.$$eval("#catalog .card", e => e.length);
  ok(nCards === 80, `Catalogue : ${nCards} fiches`);
  ok((await page.textContent("#count-c")) === "80", "Compteur du catalogue : 80");
  const inMine = await page.$$eval("#catalog .card .in", e => e.length);
  ok(inMine >= 10, `Catalogue : ${inMine} fiches marquées « Dans tes pistes »`);
  await page.fill("#cat-search", "estaca");
  const nEst = await page.$$eval("#catalog .card h3", e => e.map(x => x.textContent));
  ok(nEst.length >= 1, "Recherche « estaca » : " + nEst.join(" | "));
  await page.fill("#cat-search", "insa");
  const nInsa = await page.$$eval("#catalog .card h3", e => e.map(x => x.textContent));
  ok(nInsa.length >= 1, "Recherche « insa » : " + nInsa.join(" | "));
  await page.fill("#cat-search", "zzzz");
  ok(/Rien ne correspond/.test(await page.textContent("#catalog")), "Recherche sans résultat : message");
  await page.fill("#cat-search", "");
  await page.click('#cat-filters [data-fam="side"]');
  const nSide = await page.$$eval("#catalog .card", e => e.length);
  ok(nSide > 5 && nSide < 80, `Filtre « Moins connues » : ${nSide} fiches`);
  await page.click('#cat-filters [data-fam="autre"]');
  ok(/Plus compliqué avec maths \+ physique-chimie/.test(await page.textContent("#catalog")), "Encadré « Plus compliqué » dans Autres voies");
  await page.click('#cat-filters [data-fam="all"]');
  await page.screenshot({ path: path.join(OUT, "12-catalogue.png"), fullPage: false });
  await noOverflow(page, "Catalogue");

  // ----- Retour sur l'appareil : bandeau de reprise
  await page.reload();
  await page.waitForSelector("#banner:not([hidden])");
  ok(/dernière visite sont encore là/.test(await page.textContent("#banner")), "Retour : bandeau « tes réponses sont encore là »");
  await page.screenshot({ path: path.join(OUT, "13-retour.png"), fullPage: false });
  await page.click('#banner [data-banner="0"]');

  // ----- Remise à zéro depuis l'onglet Questions
  await page.click("#tab-btn-q");
  await page.click("#reset-btn");
  ok(!(await page.isHidden("#reset-confirm")), "Confirmation d'effacement affichée");
  await page.click("#reset-yes");
  const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("boussole-maths-physique-v1")));
  ok(stored && Object.keys(stored.A).length === 0, "Réponses effacées dans l'appareil");
  ok((await page.inputValue('[data-text="prenom"]')) === "", "Formulaire vide après effacement");
  await page.reload();
  await page.waitForSelector("#block .q");
  ok(await page.isHidden("#banner"), "Après effacement : pas de bandeau de reprise");

  // ----- Remise à zéro depuis les pistes (passe par le bandeau)
  const p4 = await ctx2.newPage();
  await p4.goto(BASE + "#pistes");
  await p4.waitForSelector("#results .piste");
  await p4.click('#results [data-action="reset"]');
  ok(/Tout effacer sur cet appareil/.test(await p4.textContent("#banner")), "Recommencer à zéro depuis les pistes : confirmation dans le bandeau");
  await p4.click('#banner [data-banner="0"]');
  ok(!(await p4.isHidden("#tab-q")), "Après effacement : retour aux questions");

  const all = errs.concat(rerrs, errs2, errs3).filter(e => !/favicon/.test(e));
  ok(all.length === 0, "Aucune erreur JavaScript" + (all.length ? " :\n    " + all.join("\n    ") : ""));
  await browser.close();
  server.close();
  console.log(fails ? `\n${fails} échec(s)` : "\nParcours complet : tout est bon.");
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
