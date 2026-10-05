// Tests du moteur sans navigateur : profils fictifs, invariants, lien de partage, idées de départ.
// Usage : node dev/test_profils.js [--detail]
const fs = require("fs"), path = require("path");
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const src = html.match(/<script>([\s\S]*)<\/script>/)[1];
const api = new Function(src + `
; return { F, BLOCKS, DIMS, NOTES, ORDER, computeProfile, computeResults, tensionsList, talkList, portrait, ideaLines, matchIdeas,
  encodeAnswers, decodeAnswers, qById, visible, setA: x => { A = x; }, getA: () => A };`)();
const { F, BLOCKS, DIMS, NOTES, ORDER } = api;
const DETAIL = process.argv.includes("--detail");
let fails = 0;
const check = (ok, msg) => { if (!ok) { fails++; console.log("  ÉCHEC : " + msg); } };
const short = f => f.nom.replace(/ \(.*\)$/, "");

/* ---------- Invariants du catalogue ---------- */
console.log("== Invariants");
const ids = new Set(); F.forEach(f => { check(!ids.has(f.id), "id en double " + f.id); ids.add(f.id); });
const INT = BLOCKS.flatMap(b => b.qs).find(q => q.id === "interets").options.map(o => o.v);
F.forEach(f => {
  check(f.src && /^https:\/\//.test(f.src.u), "lien manquant " + f.id);
  f.kw.concat(f.core || []).forEach(k => check(INT.includes(k), `clé d'intérêt inconnue ${k} (${f.id})`));
  Object.keys(f.w).forEach(d => check(d in DIMS, `axe inconnu ${d} (${f.id})`));
});
INT.forEach(k => { const n = F.filter(f => f.kw.includes(k)).length; check(n >= 2, `l'intérêt ${k} ne mène qu'à ${n} fiche(s)`); });
const qids = BLOCKS.flatMap(b => b.qs.map(q => q.id));
qids.forEach(id => check(ORDER.includes(id), "question absente de l'ordre du lien : " + id));
ORDER.forEach(id => check(id === "notes" || qids.includes(id), "id inconnu dans l'ordre du lien : " + id));
check(new Set(NOTES.map(n => n.id)).size === NOTES.length, "notes : id en double");
console.log(`  ${F.length} fiches, ${qids.length} questions, ${NOTES.length} relances avec notes`);

/* ---------- Profils fictifs ---------- */
const base = { maths_opt: "spe", moy: "2", niv_maths: "2", niv_pc: "2" };
const PROFILS = {
  "1. Aéro-auto, maths expertes, école d'ingé en idée principale, budget à voir": {
    prenom: "Test", maths_opt: "expertes", spe1: "autre", moy: "3", niv_maths: "3", niv_pc: "3", deja: "idees", deja_quoi: "une école d'ingé type ESTACA ou une généraliste", inge: "principal",
    m_raison: "2", m_calcul: "3", m_expertes: "2", m_meca: "3", m_ondes: "2", m_chim: "1", m_tp: "2", m_info: "2", m_techno: "3", m_vivant: "0", m_fr: "1", m_lang: "2", m_arts: "1", m_sport: "2",
    s_enc: "-1", s_conc: "1", s_gen: "1", s_team: "2", s_eff: "-1", s_terr: "0", interets: ["aero", "auto", "robot", "industrie"], eviter: ["ecrit", "vente"],
    e_duree: "b5", e_prepa: "peut", e_engage: "pourquoi", e_fac: "bof", e_alt: "peut", e_mob: "france", e_budget: "?", e_conc: "ok", e_cesure: "non",
    f_scene: ["concevoir", "equipe"], f_val: ["techno", "argent", "apprendre"], f_metier: "ingénieur dans l'aéronautique",
    notes: { n_interets: "les fusées et les voitures de course", n_etudes: "je ne sais pas si la prépa vaut le coup" } },
  "2. Mêmes goûts, public uniquement et sans concours": null,
  "3. Théoricien : raisonnement, recherche, prépa motivante": {
    maths_opt: "expertes", moy: "4", niv_maths: "4", niv_pc: "4", inge: "piste", m_raison: "3", m_calcul: "2", m_expertes: "3", m_meca: "2", m_ondes: "3", m_chim: "1", m_tp: "1", m_info: "1",
    s_conc: "-2", s_gen: "-1", s_enc: "-1", interets: ["recherche", "energie"], e_duree: "long", e_prepa: "envie", e_fac: "ok", e_engage: "temps", f_scene: ["labo"], f_val: ["apprendre", "sens"] },
  "4. Concret : études courtes, alternance": {
    moy: "1", niv_maths: "1", niv_pc: "2", inge: "non", m_techno: "3", m_tp: "3", m_meca: "2", m_raison: "0", m_calcul: "1", s_conc: "2", s_terr: "2", s_eff: "2",
    interets: ["industrie", "energie", "robot"], eviter: ["long", "stress", "maths"], e_duree: "court", e_alt: "oui", e_prepa: "non", e_fac: "non", e_budget: "non", f_scene: ["usine", "chantier"] },
  "5. Pas sûr de l'ingénierie, attiré par la santé et la technologie médicale": {
    spe1: "autre", inge: "?", interets: ["sante", "biomed"], m_vivant: "1", m_ondes: "3", m_chim: "2", m_meca: "1", s_terr: "1", e_duree: "b5", f_scene: ["soigner"], f_val: ["sens"] },
  "6. Créatif : design, son, architecture": {
    inge: "non", interets: ["design", "sonimage", "construction"], m_arts: "3", m_raison: "1", m_meca: "1", m_ondes: "2", e_duree: "b5", f_scene: ["creer"], f_val: ["creativite"], s_conc: "1" },
  "7. Beaucoup de « ? »": {
    maths_opt: "?", spe1: "?", moy: "?", niv_maths: "?", niv_pc: "?", inge: "?", m_raison: "?", m_calcul: "?", m_meca: "?", m_ondes: "?", m_chim: "?", m_tp: "?", m_info: "?",
    s_enc: "?", s_conc: "?", s_gen: "?", e_duree: "?", e_prepa: "?", e_fac: "?", e_alt: "?", e_budget: "?", e_engage: "?" },
  "8. Numérique et IA": {
    spe1: "nsi", inge: "piste", interets: ["dev", "ia"], m_info: "3", m_calcul: "3", m_raison: "2", f_scene: ["logiciel"], e_prepa: "peut", e_alt: "peut", e_budget: "oui", e_duree: "b5", s_team: "1" }
};
PROFILS["2. Mêmes goûts, public uniquement et sans concours"] = Object.assign({}, PROFILS[Object.keys(PROFILS)[0]], { e_budget: "non", e_conc: "non", eviter: ["ecrit", "vente", "concours"], deja: "peu" });

for (const [name, P0] of Object.entries(PROFILS)) {
  const A = Object.assign({}, base, P0);
  api.setA(A);
  const R = api.computeResults(A);
  console.log("\n== " + name);
  console.log("  Axes : " + R.topDims.slice(0, 3).map(d => DIMS[d] + " " + R.P.raw[d].toFixed(1)).join(" · "));
  console.log("  Top 5 : " + R.lead.map(r => short(r.f)).join(" | "));
  console.log("  À creuser : " + R.also.map(r => short(r.f)).join(" | "));
  if (R.side.length) console.log("  À côté : " + R.side.map(r => short(r.f)).join(" | "));
  if (R.open.length) console.log("  Portes ouvertes : " + R.open.map(r => short(r.f)).join(" | "));
  const T = api.tensionsList(R, A); if (T.length) console.log("  Ce qui tiraille : " + T.slice(0, 2).map(t => t.k).join(", ") + (T.length > 2 ? " (+" + (T.length - 2) + ")" : ""));
  if (R.ideas) api.ideaLines(R).forEach(l => console.log("  Idée : " + l.head + (DETAIL ? " / " + l.detail : "")));
  if (DETAIL) { console.log("  Portrait : " + api.portrait(R, A).join(" ")); api.talkList(R).forEach(t => console.log("  ? " + t)); R.lead.forEach(r => console.log("  · " + short(r.f) + " | + " + r.why.join(" ; ") + (r.care.length ? " | ! " + r.care.join(" ; ") : ""))); }
  // vérifications générales
  check(R.lead.length === 5, "top 5 incomplet");
  check(R.lead.every(r => !r.miss), "une voie thématique sans signal est dans le top 5");
  const fam = {}; R.lead.forEach(r => fam[r.f.fam] = (fam[r.f.fam] || 0) + 1); check(Object.values(fam).every(n => n <= 2), "plus de 2 pistes du même type dans le top 5");
  if (A.e_budget !== "oui") check(R.lead.concat(R.also).filter(r => r.f.p.prive).length <= 3, "plus de 3 écoles payantes dans les 12 premières");
  if (A.e_budget === "non") check(R.lead.every(r => !r.f.p.prive), "école payante dans le top 5 alors que budget = non");
  // aller-retour du lien de partage
  const back = api.decodeAnswers(api.encodeAnswers(A));
  const clean = o => JSON.stringify(Object.keys(o).filter(k => o[k] !== undefined && o[k] !== "" && !(Array.isArray(o[k]) && !o[k].length)).sort().reduce((x, k) => (x[k] = o[k], x), {}));
  check(clean(back) === clean(A), "le lien de partage ne redonne pas les mêmes réponses");
}

/* ---------- Attentes ciblées ---------- */
console.log("\n== Attentes ciblées");
const run = A => { api.setA(A); return api.computeResults(Object.assign({}, base, A)); };
const inTop = (R, id, n) => R.scored.slice(0, n).some(r => r.f.id === id);
let R = run(PROFILS[Object.keys(PROFILS)[0]]);
check(inTop(R, "ing_aero", 8), "profil 1 : les écoles aéro-auto devraient être dans les 8 premières");
check(R.lead.concat(R.also).some(r => ["insa", "ut", "polytech", "ing_gen", "prepa_inp"].includes(r.f.id)), "profil 1 : une école généraliste devrait apparaître dans les 12 premières");
check(api.tensionsList(R, Object.assign({}, base, PROFILS[Object.keys(PROFILS)[0]])).some(t => t.k === "budgetq"), "profil 1 : budget à voir avec les parents, la tension sur le coût des écoles privées devrait sortir");
// Marine marchande : le seul intérêt « transports » ne suffit pas à la mettre en tête (des mois en mer)
const P1t = Object.assign({}, PROFILS[Object.keys(PROFILS)[0]], { interets: ["aero", "auto", "robot", "transport"] });
R = run(P1t);
check(!R.lead.some(r => r.f.id === "marine_marchande"), "profil 1 + transports : la marine marchande ne devrait pas être dans le top 5 sans signal pour la vie en mer");
check(R.scored.find(r => r.f.id === "marine_marchande").care.some(c => /en mer/.test(c)), "profil 1 + transports : la vie en mer devrait apparaître dans les points d'attention");
R = run(Object.assign({}, P1t, { f_scene: ["concevoir", "commandes"] }));
check(R.lead.concat(R.also).some(r => r.f.id === "marine_marchande"), "profil 1 + transports + « aux commandes » : la marine marchande devrait être dans les 12 premières");
R = run(PROFILS["2. Mêmes goûts, public uniquement et sans concours"]);
check(!R.lead.some(r => r.f.p.prive), "profil 2 : pas d'école privée dans le top 5");
check(api.tensionsList(R, Object.assign({}, base, PROFILS["2. Mêmes goûts, public uniquement et sans concours"])).some(t => t.k === "aerobudget"), "profil 2 : la tension aéro + budget devrait sortir");
R = run(PROFILS["3. Théoricien : raisonnement, recherche, prépa motivante"]);
check(R.lead.some(r => r.f.fam === "prepa") || R.lead.some(r => ["dl_sciences", "lic_phys", "cupge", "bachelor_sci"].includes(r.f.id)), "profil 3 : prépa ou cursus théorique attendu dans le top 5");
R = run(PROFILS["4. Concret : études courtes, alternance"]);
check(R.lead.filter(r => ["bts", "but"].includes(r.f.fam)).length >= 3, "profil 4 : BTS ou BUT attendus dans le top 5");
check(!R.lead.some(r => r.f.p.prepa), "profil 4 : pas de prépa dans le top 5");
R = run(PROFILS["5. Pas sûr de l'ingénierie, attiré par la santé et la technologie médicale"]);
check(R.lead.some(r => ["manip_radio", "audio", "sante_1a", "bts_opticien", "kine"].includes(r.f.id)), "profil 5 : une voie de santé attendue dans le top 5");
R = run(PROFILS["6. Créatif : design, son, architecture"]);
check(R.lead.some(r => ["archi", "design_indus", "dnmade", "son_image", "but_mmi", "bts_mav"].includes(r.f.id)), "profil 6 : une voie créative attendue dans le top 5");
R = run(PROFILS["8. Numérique et IA"]);
check(R.lead.some(r => ["mp2i", "but_info", "lic_info", "ing_num", "but_sd", "info_hors_inge"].includes(r.f.id)), "profil 8 : une voie numérique attendue dans le top 5");

/* ---------- Idées de départ ---------- */
console.log("\n== Idées de départ");
const kinds = t => api.matchIdeas(t).map(m => m.kind === "fiche" ? "fiche:" + m.ids.join("/") : m.kind === "kw" ? "kw:" + m.kw : m.kind === "type" ? "type:" + m.t : m.kind);
const IDEAS = {
  "ESTACA": ["fiche:ing_aero"],
  "estaca ou une généraliste": ["fiche:ing_aero", "type:gen"],
  "une école d'ingé dans l'aéro": ["type:inge", "kw:aero"],
  "prépa puis Supaéro": ["type:prepa", "postprepa"],
  "mon but est de devenir pilote": ["fiche:pilote"],
  "BUT GMP": ["fiche:but_gmp"],
  "médecine ou kiné": ["fiche:sante_1a", "fiche:kine"],
  "travailler dans une centrale nucléaire": ["kw:energie"],
  "construire des ponts": ["kw:construction"],
  "INSA ou UTC": ["fiche:insa", "fiche:ut"],
  "ingénieur du son": ["fiche:son_image"],
  "le ciel et l'espace": ["kw:aero"]
};
const lab = t => api.matchIdeas(t).map(m => m.label).join(" | ");
check(/métier d'ingénieur/.test(lab("ingénieur dans l'aéronautique")), "« ingénieur dans l'aéronautique » devrait se lire comme un métier : " + lab("ingénieur dans l'aéronautique"));
check(/écoles d'ingénieurs/.test(lab("une école d'ingé")), "« une école d'ingé » devrait se lire comme des écoles : " + lab("une école d'ingé"));
for (const [t, exp] of Object.entries(IDEAS)) {
  const got = kinds(t);
  const ok = exp.every(e => got.includes(e)) && !(t.includes("mon but") && got.includes("type:but")) && !(t.includes("ciel") && got.some(g => g.includes("bts_sn")));
  check(ok, `« ${t} » → ${got.join(", ") || "rien"} (attendu : ${exp.join(", ")})`);
  if (DETAIL || !ok) console.log(`  « ${t} » → ${got.join(", ") || "rien"}`);
}

/* ---------- Robustesse ---------- */
console.log("\n== Robustesse");
for (const A of [{}, { prenom: "X" }, { interets: ["aero"] }, Object.fromEntries(qids.map(id => [id, "?"]))]) {
  try { api.setA(A); const R = api.computeResults(A); api.talkList(R); api.portrait(R, A); api.tensionsList(R, A); api.ideaLines(R); api.decodeAnswers(api.encodeAnswers(A)); }
  catch (e) { check(false, "plantage avec " + JSON.stringify(A).slice(0, 60) + " : " + e.message); }
}
console.log(fails ? `\n${fails} échec(s)` : "\nTout est bon.");
process.exit(fails ? 1 : 0);
