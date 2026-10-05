// Contrôle du catalogue : syntaxe, clés, axes, centres d'intérêt, longueurs, couverture des intérêts.
const fs = require("fs"), path = require("path");
const FAC_COST = "F", PREPA_COST = "P", BUT_COST = "B", BTS_COST = "Gratuit en lycée public", ING_PUB_COST = "I";
const F = []; function add(fam, l) { l.forEach(x => F.push(Object.assign({ fam }, x))); }
// Usage : node check_cat.js            → tout le catalogue
//         node check_cat.js cat_xxx.js → seulement ce(s) fichier(s), sans la couverture des intérêts
const dir = path.join(__dirname, "..", "cat");
const only = process.argv.slice(2).map(f => path.basename(f));
for (const f of fs.readdirSync(dir).filter(f => /^cat_.*\.js$/.test(f) && (!only.length || only.includes(f))).sort()) eval(fs.readFileSync(path.join(dir, f), "utf8"));
const AX = ["MATH", "PHYS", "MECA", "ENER", "NUM", "CHIM", "VIE", "BAT", "CREA", "ECO", "HUM"];
const KW = "aero auto transport energie environnement robot electronique dev ia recherche chimie sante biomed construction design sonimage entreprise finance enseigner defense pilote sport international industrie agro societe".split(" ");
const PK = "enc conc intense maths phys chim code ecrit oral vente bureau terrain indus ouvert gen integ sortie niv concours prive prepa fac".split(" ");
const KEYS = "id nom duree sel selNote cout alt side core conseil inge alias desc apres mpc w kw p src fam".split(" ");
const LINK_OK = f => f.src && typeof f.src.u === "string" && /^https:\/\//.test(f.src.u) && typeof f.src.l === "string" && f.src.l;
const CONSEIL = ["expertes", "svt", "nsi", "si"];
let bad = 0; const ids = new Set();
for (const f of F) {
  const pb = [];
  Object.keys(f).forEach(k => { if (!KEYS.includes(k)) pb.push("clé " + k); });
  if (ids.has(f.id)) pb.push("id en double"); ids.add(f.id);
  for (const k of ["nom", "duree", "cout", "desc", "apres", "mpc"]) if (typeof f[k] !== "string" || !f[k]) pb.push("manque " + k);
  if (![1, 2, 3].includes(f.sel)) pb.push("sel");
  if (typeof f.alt !== "number") pb.push("alt");
  if (![0, .5, 1].includes(f.inge)) pb.push("inge " + f.inge);
  if (f.desc && (f.desc.length < 100 || f.desc.length > 380)) pb.push("desc " + f.desc.length);
  if (f.id !== "cesure") {
    Object.keys(f.w).forEach(k => { if (!AX.includes(k)) pb.push("axe " + k); });
    const wv = Object.values(f.w); if (wv.length > 6) pb.push("w > 6 axes");
    if (f.kw.length < 1 || f.kw.length > 4) pb.push("kw " + f.kw.length);
  }
  f.kw.forEach(k => { if (!KW.includes(k)) pb.push("kw " + k); });
  (f.core || []).forEach(k => { if (!KW.includes(k)) pb.push("core " + k); });
  (f.conseil || []).forEach(k => { if (!CONSEIL.includes(k)) pb.push("conseil " + k); });
  Object.keys(f.p).forEach(k => { if (!PK.includes(k)) pb.push("p." + k); });
  if (!Array.isArray(f.alias) || !f.alias.length) pb.push("alias");
  if (!LINK_OK(f)) pb.push("src manquant ou invalide");
  for (const k of ["nom", "duree", "desc", "apres", "mpc", "selNote", "cout"]) if (f[k] && /[!"]/.test(f[k])) pb.push("! ou \" dans " + k);
  if (pb.length) { console.log(f.id.padEnd(16), pb.join(" | ")); bad += pb.length; }
}
console.log("\n" + F.length + " fiches, " + bad + " problèmes");
const fams = {}; F.forEach(f => fams[f.fam] = (fams[f.fam] || 0) + 1); console.log("familles :", JSON.stringify(fams));
if (only.length) process.exit(0);
console.log("\nCouverture des intérêts (kw) :");
KW.forEach(k => { const n = F.filter(f => f.kw.includes(k)).map(f => f.id); console.log((n.length < 2 ? "!! " : "   ") + k.padEnd(14) + n.length + "  " + n.join(", ")); });
const al = {}; F.forEach(f => (f.alias || []).forEach(a => { const n = a.toLowerCase(); (al[n] = al[n] || []).push(f.id); }));
const dup = Object.entries(al).filter(([a, l]) => l.length > 1); if (dup.length) console.log("\nAlias partagés :", dup.map(([a, l]) => a + " → " + l.join("/")).join(" ; "));
