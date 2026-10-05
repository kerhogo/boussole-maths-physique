// Contrôle du catalogue, lu directement dans index.html (seule source) :
// clés, axes, centres d'intérêt, options conseillées, liens, longueurs, couverture des intérêts, alias partagés.
// Usage : node dev/check_cat.js
const fs = require("fs"), path = require("path");
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const src = html.match(/<script>([\s\S]*)<\/script>/)[1];
const { F, DIMS, BLOCKS, CONSEIL, P_DEF } = new Function(src + "; return { F, DIMS, BLOCKS, CONSEIL, P_DEF };")();

const AX = Object.keys(DIMS);
const KW = BLOCKS.flatMap(b => b.qs).find(q => q.id === "interets").options.map(o => o.v);
const PK = Object.keys(P_DEF).concat("niv concours compet minor prive prepa fac".split(" "));
const KEYS = "id nom duree sel selNote cout alt side core vie conseil inge alias desc apres mpc w kw p src fam".split(" ");
const LINK_OK = f => f.src && typeof f.src.u === "string" && /^https:\/\//.test(f.src.u) && typeof f.src.l === "string" && f.src.l;
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
    if (Object.keys(f.w).length > 6) pb.push("w > 6 axes");
    if (f.kw.length < 1 || f.kw.length > 4) pb.push("kw " + f.kw.length);
  }
  f.kw.forEach(k => { if (!KW.includes(k)) pb.push("kw " + k); });
  (f.core || []).forEach(k => { if (!KW.includes(k)) pb.push("core " + k); });
  if (f.vie && (typeof f.vie.t !== "string" || !Array.isArray(f.vie.sig) || !f.vie.sig.length)) pb.push("vie");
  (f.conseil || []).forEach(k => { if (!(k in CONSEIL)) pb.push("conseil " + k); });
  Object.keys(f.p).forEach(k => { if (!PK.includes(k)) pb.push("p." + k); });
  if (!Array.isArray(f.alias) || !f.alias.length) pb.push("alias");
  if (!LINK_OK(f)) pb.push("src manquant ou invalide");
  for (const k of ["nom", "duree", "desc", "apres", "mpc", "selNote", "cout"]) if (f[k] && /[!"]/.test(f[k])) pb.push("! ou \" dans " + k);
  if (pb.length) { console.log(f.id.padEnd(16), pb.join(" | ")); bad += pb.length; }
}
console.log(F.length + " fiches, " + bad + " problème(s)");
const fams = {}; F.forEach(f => fams[f.fam] = (fams[f.fam] || 0) + 1); console.log("Familles :", JSON.stringify(fams));
console.log("\nCouverture des intérêts (kw) :");
let thin = 0;
KW.forEach(k => { const n = F.filter(f => f.kw.includes(k)).map(f => f.id); if (n.length < 2) thin++; console.log((n.length < 2 ? "!! " : "   ") + k.padEnd(14) + n.length + "  " + n.join(", ")); });
const al = {}; F.forEach(f => (f.alias || []).forEach(a => { const n = a.toLowerCase(); (al[n] = al[n] || []).push(f.id); }));
const dup = Object.entries(al).filter(([a, l]) => l.length > 1); if (dup.length) console.log("\nAlias partagés (voulu quand un nom couvre plusieurs fiches) :", dup.map(([a, l]) => a + " → " + l.join("/")).join(" ; "));
process.exit(bad || thin ? 1 : 0);
