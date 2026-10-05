# Vérification du catalogue « Boussole Maths-Physique »

## Contexte
Questionnaire d'orientation post-bac (page web) pour un élève de **terminale générale, spécialités maths + physique-chimie**, avec ou sans l'option **maths expertes**. Nous sommes le 5 octobre 2026 : les infos doivent valoir pour la **rentrée 2027** (Parcoursup 2027). Le catalogue liste des **types de formations** (pas des établissements précis), avec quelques exemples d'écoles entre parenthèses. Un vrai lycéen va s'en servir : **une erreur factuelle compte**.

Les fiches sont des brouillons écrits de mémoire. Ta mission : **vérifier et corriger les faits, et ajouter un lien officiel vérifié à chaque fiche**, dans les fichiers qui te sont confiés et uniquement ceux-là (d'autres agents travaillent en parallèle sur les autres fichiers du même dossier).

## Schéma d'une fiche (objet JavaScript)
`{ id, nom, duree, sel, selNote?, cout, alt, side?, core?, conseil?, inge, alias, desc, apres, mpc, w, kw, p, src }`
- `nom` intitulé clair (officiel quand il existe) ; `duree` ; `sel` 1 = accessible, 2 = sélectif, 3 = très sélectif, `selNote` nuance facultative ; `cout` coût réel 2026-2027 (constantes possibles, écrites sans guillemets : `FAC_COST` licence à l'université, `PREPA_COST` CPGE en lycée public, `BUT_COST`, `BTS_COST`, `ING_PUB_COST` école d'ingénieurs publique) ; `alt` place de l'alternance (≥ 0.6 fréquente, 0.3 à 0.6 possible, < 0.3 rare).
- `conseil` : options ou spés **conseillées** que l'élève maths + PC peut ne pas avoir : `"expertes"`, `"svt"`, `"nsi"`, `"si"`. Si une spé est en réalité **exigée** et absente du combo maths + PC, signale-le dans ton rapport (la fiche devrait peut-être sortir du catalogue).
- `inge` : 1 mène directement au titre d'ingénieur (CTI), 0.5 poursuite fréquente en école d'ingénieurs, 0 sinon.
- `alias` : noms que l'élève pourrait taper (écoles citées en exemple, sigles) pour retrouver la fiche. Ajoute les noms d'écoles importants que tu cites dans `nom` ou `desc`.
- `desc` (ce qu'on y fait, 150 à 350 caractères), `apres` (débouchés et poursuites, 1 ou 2 phrases), `mpc` (texte affiché sous le titre « Avec maths + physique-chimie : » : adéquation avec ce combo, accès, options conseillées, un conseil concret ; 1 ou 2 phrases).
- `w`, `kw`, `core`, `side`, et dans `p` : `enc conc intense maths phys chim code ecrit oral vente bureau terrain indus ouvert gen integ` → **ce sont des réglages du classement : n'y touche pas.** Exceptions autorisées si un fait l'exige, à signaler dans ton rapport : `p.prive` (1 si payant/privé), `p.concours` (1 concours ou épreuves, 0.5 dossier + entretien, 0 dossier seul), `p.sortie` (années avant un premier diplôme utile), `p.niv`, `p.prepa`, `p.fac`, `alt`, `sel`, `inge`, `conseil`.
- `src` : **à ajouter à chaque fiche**, juste après `p`, sous la forme `src: { u: "https://…", l: "Fiche Onisep" }`. Préfère une fiche formation Onisep (`https://www.onisep.fr/ressources/univers-formation/formations/post-bac/…`, libellé `"Fiche Onisep"`) ; sinon une page Onisep thématique (`"Onisep"`), Parcoursup (`"Parcoursup"`), un site officiel (libellé = nom du site, ex. `"Groupe INSA"`). **Vérifie avec WebFetch que la page existe et parle bien de cette formation.** Pas de lien vers un site commercial de classement ou d'annonces.

## Règles de rédaction
- Français simple, concret, honnête, tutoiement dans `mpc`. Aucun ton publicitaire.
- Guillemets « » (jamais de guillemets droits `"` à l'intérieur des textes), pas de point d'exclamation, pas d'emoji, nombres « 9 000 € ».
- Explique un sigle à sa première apparition dans `nom` ou `desc`.
- **N'invente rien.** Vérifie chaque affirmation précise (concours, écoles membres, frais 2026-2027, spés attendues, réformes, dates) avec WebSearch puis WebFetch, en privilégiant onisep.fr, parcoursup.gouv.fr, enseignementsup-recherche.gouv.fr, education.gouv.fr, service-public.fr, cti-commission.fr, les sites officiels des écoles, des concours et des ministères. Si un point reste incertain, formule prudemment (« selon les écoles », « souvent », « environ ») plutôt que d'affirmer.
- Les frais : donne la fourchette 2026-2027 si elle est publiée, sinon 2025-2026 en le formulant comme un ordre de grandeur (« environ »).
- Garde les fiches à peu près à la même longueur qu'avant.

## Méthode
1. Lis tes fichiers. Pour chaque fiche, vérifie : intitulé, durée, sélectivité, coût, alternance, spés et options attendues ou conseillées, mode d'admission (concours, dossier, entretien, Parcoursup ou non), écoles citées (existent-elles, recrutent-elles bien après le bac, dans ce type de formation ?), affirmations de `desc`, `apres`, `mpc`.
2. Corrige directement dans le fichier (outil Edit), en gardant un JavaScript valide.
3. Valide **ton fichier seulement** : `node /home/claude/bmp/dev/check_cat.js <ton_fichier.js>` doit afficher « 0 problèmes ».
4. Écris `/home/claude/bmp/dev/facts_<groupe>.md` : pour chaque fiche, les faits importants vérifiés avec leur URL source, les points restés incertains, et tes remarques (fiche à retirer ou à ajouter, formation exigeant une spé absente, valeur d'une constante de coût).
5. Sois efficace : environ 2 à 4 recherches par fiche, pas besoin de revérifier ce qui est manifestement juste et générique.

## Réponse finale (courte, en français)
- Le nombre de fiches vérifiées et corrigées.
- Les corrections importantes (une ligne chacune : id, ce qui a changé, pourquoi).
- Les points incertains restants (3 à 6 au plus).
- Les fiches à retirer, à fusionner ou à ajouter, s'il y en a, avec la raison.
- Les valeurs vérifiées pour les constantes demandées dans ta mission, le cas échéant.
