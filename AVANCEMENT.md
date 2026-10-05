# Avancement

## Fait (5 octobre 2026)

- **Conception** : `DESIGN.md`, validée avant de coder (11 axes, idées de départ, ouverture hors sciences, 14 fiches d'écoles d'ingénieurs, question sur la 3e spécialité de première). Les changements faits pendant le développement sont en section 9.
- **Catalogue** : 80 fiches, vérifiées par des sous-agents, chacune avec un lien officiel ouvert et contrôlé. Sources et points incertains : `dev/facts_*.md`.
- **Page** : `index.html`, en un seul fichier, repartie de la Boussole SES-Maths (identité visuelle, mobile, sauvegarde, exports, lien de partage) avec le contenu réécrit pour maths + physique-chimie.
- **En ligne** : https://kerhogo.github.io/boussole-maths-physique/

## Constantes de coût vérifiées (2026-2027)

- Licence, BUT : 178 € de droits + 105 € de CVEC, soit environ 280 €/an (0 € si boursier).
- Prépa en lycée public : inscription à l'université partenaire + CVEC, environ 280 €/an.
- École d'ingénieurs publique : 630 € de droits + 105 € de CVEC, soit environ 735 €/an (INSA, UT, PeiP Polytech, Prépa des INP, CPI).
- Écoles d'ingénieurs privées post-bac : souvent 8 000 à 12 000 €/an (ESTACA : 10 130 € en 2026-2027).

## Décisions prises pendant la vérification

- ESTP retirée des exemples d'écoles BTP post-bac : pas de cycle ingénieur direct après le bac (bachelor puis sélection).
- SVT non exigée dans les écoles d'agronomie post-bac : option conseillée retirée de cette fiche.
- MP2I : la NSI n'est ni exigée ni nécessaire ; PTSI : la SI n'est pas nécessaire, maths expertes conseillées ; BCPST : SVT et maths expertes conseillées.
- Pilote de ligne : pas d'entrée directe à l'ENAC après le bac (60 ECTS requis).
- ENS Louis-Lumière : concours après 2 ans d'études supérieures.
- Ajout d'une fiche « Études vétérinaires après le bac » (concours commun des 4 ENV, une bonne part des candidats retenus avec maths + PC).
- BUT MMI : sélectivité alignée sur le BUT Informatique (sélectif, très demandé).
- Calendrier Parcoursup 2027 : pas encore publié le 5 octobre 2026 ; les dates affichées sont présentées comme prévisionnelles.

## Tests passés

- `node dev/check_cat.js` : 80 fiches, aucun problème ; chaque centre d'intérêt mène à au moins 2 fiches.
- `node dev/test_profils.js` : 8 profils fictifs (aéro-auto, même profil en public et sans concours, théoricien, concret et court, santé, créatif, beaucoup de « ? », numérique), attentes ciblées, idées de départ (« ESTACA », « estaca ou une généraliste », « prépa puis Supaéro », « mon but est de devenir pilote », « centrale nucléaire », « INSA ou UTC »…), aller-retour du lien de partage, réponses vides ou toutes en « ? ».
- `node dev/test_navigateur.js` : parcours complet en vue téléphone dans Chromium (questions conditionnelles, notes, limite de choix, pistes, PDF, page HTML, lien ouvert sur un autre appareil, lien sur un appareil déjà utilisé, lien coupé, catalogue et recherche, bandeau de retour, remise à zéro), sans défilement horizontal ni erreur JavaScript.

## À faire ensuite

- Faire remplir la page par un vrai élève sur son téléphone, puis ajuster à partir de ses réactions (pistes surprenantes, questions mal comprises).
- En décembre 2026 : remplacer les dates prévisionnelles par le calendrier officiel de Parcoursup 2027.
- Pour la version toutes spécialités : reprendre les idées de départ (noms, domaines, types d'études) et les notes aux relances, qui ne dépendent pas du combo.
