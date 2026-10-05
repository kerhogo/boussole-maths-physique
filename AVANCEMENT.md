# Avancement

## Fait

- **Conception** : `DESIGN.md` (11 axes, 6 blocs de questions, règles de classement, synthèse, liste du catalogue). En attente de validation sur 4 points (voir plus bas).
- **Catalogue** : 80 fiches dans `cat/` (prépas, écoles d'ingénieurs publiques et privées post-bac, université, BUT, BTS, santé, création, autres voies). Chaque fiche a été vérifiée le 5 octobre 2026 par un sous-agent, avec un lien officiel ouvert et contrôlé. Sources et points incertains : `dev/facts_*.md`.
- **Contrôle automatique** : `node dev/check_cat.js` (clés, axes, centres d'intérêt, liens, chaque intérêt mène à au moins 2 fiches).

## Constantes de coût vérifiées (2026-2027)

- Licence, BUT : 178 € de droits + 105 € de CVEC, soit environ 280 €/an (0 € si boursier).
- Prépa en lycée public : inscription à l'université partenaire + CVEC, environ 280 €/an.
- École d'ingénieurs publique : 630 € de droits + 105 € de CVEC, soit environ 735 €/an (INSA, UT, PeiP Polytech, Prépa des INP, CPI).
- Écoles d'ingénieurs privées post-bac : souvent 8 000 à 12 000 €/an (ESTACA : 10 130 € en 2026-2027).

## Décisions prises pendant la vérification

- ESTP retirée des exemples d'écoles BTP post-bac : pas de cycle ingénieur direct après le bac (bachelor puis sélection).
- SVT non exigée dans les écoles d'agronomie post-bac : option conseillée retirée de cette fiche.
- MP2I : la NSI n'est pas exigée ni nécessaire ; PTSI : la SI n'est pas nécessaire, maths expertes conseillées ; BCPST : SVT et maths expertes conseillées.
- Pilote de ligne : pas d'entrée directe à l'ENAC après le bac (60 ECTS requis).
- ENS Louis-Lumière : concours après 2 ans d'études supérieures.
- Ajout d'une fiche « Études vétérinaires après le bac » (concours commun des 4 ENV, une bonne part des candidats retenus avec maths + PC).
- BUT MMI : sélectivité alignée sur le BUT Informatique (sélectif, très demandé).
- Calendrier Parcoursup 2027 : le calendrier officiel n'était pas publié le 5 octobre 2026 ; les dates affichées seront présentées comme prévisionnelles.

## En attente de Hugo

1. 11 axes (séparer « Entreprise, finance » et « Humain : soigner, transmettre »).
2. Idées de départ (champ libre, noms reconnus, rang dans les pistes).
3. Ouverture hors sciences (intérêt « société, politique, droit » + 3 fiches).
4. Écoles d'ingénieurs en 14 fiches.
5. Question factuelle « En première, ta 3e spécialité était… » (SVT, NSI, SI, autre), utilisée seulement pour les options conseillées.

## Reste à faire

- Adapter `index.html` (questions, profil, score, synthèse, notes, idées de départ, exports, lien, catalogue).
- Tests : 8 profils fictifs, invariants, parcours complet en vue mobile, PDF, HTML, lien.
- Publication sur GitHub Pages et vérification en ligne.
