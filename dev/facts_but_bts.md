# Faits vérifiés : groupe « but_bts » (14 BUT + 13 BTS)

Vérification faite le 5 octobre 2026, pour la rentrée 2027 (Parcoursup 2027).
Fichiers : `cat/cat_but.js` (14 fiches, toutes retouchées, un `src` Onisep par fiche) et `cat/cat_bts.js` (13 fiches, textes non modifiés, liens revérifiés).
Contrôle : `check_cat.js` donne « 14 fiches, 0 problèmes » (BUT) et « 13 fiches, 0 problèmes » (BTS).

Limites de la vérification (à garder en tête) :
- Le plafond de recherches web a été atteint avant la fin du travail : la dernière partie de la vérification (liens BTS, pages ADIUT, quelques notes ministérielles) s'est faite uniquement par lecture directe de pages.
- Les jeux de données ouverts Parcoursup (data.enseignementsup-recherche.gouv.fr, data.gouv.fr) n'ont pas pu être lus (robots.txt, politique du proxy). Les chiffres de demande par BUT viennent donc de sites secondaires (Digischool, Diplomeo, Thotis) qui reprennent les données Parcoursup : ordre de grandeur seulement, extraction automatisée.
- Les pages Onisep « BUT » génériques (sans parcours) renvoient 404 ou ne s'ouvrent pas : les liens `src` pointent donc vers la fiche d'un parcours représentatif, comme prévu par la spec.

---

## 1. Chiffres communs sur les BUT (sources officielles)

- 24 spécialités de BUT, parcours choisi en 2e année, admission sur dossier « voire tests et/ou entretien » via Parcoursup, ouverte aux bacs généraux, technologiques (selon la spécialité) et professionnels. Source : ADIUT https://www.iut.fr/les-24-specialites-de-but/ (une page par spécialité, citées plus bas).
- Effectifs 2025-2026 : plus de 150 000 inscrits en BUT (60 600 en 1re année, 47 400 en 2e, 42 000 en 3e). Source : note flash SIES n° 12, juin 2026, https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2026-06/nf-sies-2026-12-40403.pdf
- Alternance 2025-2026 : apprentis = 4 % des inscrits de 1re année, 21 % de 2e année, 57 % de 3e année ; 36 000 apprentis en tout (même note). En 2024-2025 : 4 %, 23 %, 60 % (note flash SIES n° 10, juin 2025, https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2025-06/nf-sies-2025-10-36981.pdf). Aucun chiffre national par spécialité trouvé.
- Nouveaux entrants 2025-2026 : 52,3 % de bacheliers généraux (57,2 % dans les spécialités de production, 48,9 % dans les services) ; plus de 4 sur 10 sont des bacheliers technologiques (même note n° 12).
- Poursuite d'études : après un BUT, la poursuite en licence pro tombe à moins de 1 % (contre 24,1 % après l'ancien DUT) ; 79,6 % des inscrits en 2e année passent en 3e année (note n° 10). Sur les diplômés 2024, 62,4 % ont poursuivi leurs études l'année suivante (note flash SIES n° 35, 19 décembre 2025, https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2025-12/nf-sies-2025-35--39001.pdf). Conséquence : « licence pro » n'est plus une poursuite normale après un BUT ; Onisep cite master, école d'ingénieurs, école de commerce ou école spécialisée.
- Insertion : note n° 35, taux d'emploi salarié à 12 mois des diplômés 2024 qui ne poursuivent pas leurs études : 69,2 % en tout, 78,7 % pour les spécialités de production, 62,6 % pour les services. Page de la note : https://www.enseignementsup-recherche.gouv.fr/fr/le-taux-d-emploi-salarie-en-france-des-diplomes-2024-de-100642

## 2. Constante BUT_COST (vérifiée)

Valeur actuelle : « Environ 280 €/an (0 € si boursier) ; frais de formation pris en charge en alternance ». **Correcte pour 2026-2027, aucune modification nécessaire.**
- Droits d'inscription 2026-2027 en licence/BUT : 178 € ; CVEC 2026-2027 : 105 € ; total 283 €. Source : service-public.gouv.fr, page mise à jour le 21 août 2026, https://www.service-public.gouv.fr/particuliers/actualites/A17481
- Boursiers : exonérés des droits et de la CVEC (même page ; IUT de Longwy, informations d'inscription 2026-2027 : https://iut-longwy.univ-lorraine.fr/wp-content/uploads/2026/06/informations_inscription_2026-2027.pdf).
- Alternance : en contrat d'apprentissage, les droits sont pris en charge par le CFA mais la CVEC (105 €) reste à payer ; en contrat de professionnalisation, les 178 € sont à la charge de l'employeur et la CVEC est exonérée (IUT de Longwy 2026-2027, même PDF ; IUT de Caen, document alternance MP 2026 : « pas de frais d'inscription » pour les apprentis, il reste la CVEC).
- Formulation facultative plus précise : « Environ 280 €/an (0 € si boursier) ; en apprentissage, les droits sont pris en charge, il reste la CVEC (environ 105 €) ».

## 3. Sélectivité des BUT : méthode et barème

Chiffres de demande (source secondaire : données Parcoursup 2025 reprises par Thotis ; sommes recalculées à partir des tableaux par IUT, ordre de grandeur à ± 15 % car les tableaux sont lus par extraction automatisée ; les totaux affichés par Thotis lui-même ne concordent pas toujours avec ses tableaux). Pages utilisées, préfixe https://thotismedia.com/ : liste-but-gmp/ ; annuaire-parcoursup-but-geii/ ; annuaire-parcoursup-but-informatique/ ; annuaire-parcoursup-but-gccd/ ; annuaire-parcoursup-but-science-des-donees/ ; annuaire-parcoursup-but-reseaux-et-telecommunications ; annuaire-parcoursup-but-mmi ; annuaire-parcoursup-but-metiers-de-la-transition-et-de-l-efficacite-energetique/ ; annuaire-parcoursup-but-chimie/ ; annuaire-parcoursup-but-gcgp/ ; annuaire-parcoursup-but-gim/ ; annuaire-parcoursup-but-qualite-logistique-industrielle-et-organisation/ ; annuaire-parcoursup-but-hse/ ; liste-but-mesures-physiques-annuaire-parcoursup.

| BUT | IUT | places | candidats | candidats par place (min / médian / max selon l'IUT) |
|---|---|---|---|---|
| Informatique | 49 | 4 400 | 107 600 | 24 (8 / 18 / 101) |
| Génie civil - construction durable | 30 | 2 600 | 56 200 | 21 (5 / 20 / 78) |
| MMI | 33 | 2 100 | 43 700 | 21 (7 / 18 / 85) |
| GMP | 45 | 3 700 | 70 100 | 19 (5 / 17 / 55) |
| Science des données | 15 | 830 | 14 600 | 18 (9 / 15 / 40) |
| Réseaux et télécoms | 30 | 1 640 | 27 500 | 17 (4 / 13 / 51) |
| Chimie | 19 | 1 700 | 26 200 | 15 |
| GEII | 53 | 4 000 | 55 900 | 14 (5 / 11 / 48) |
| GIM | 26 | 1 150 | 15 500 | 13 (5 / 11 / 29) |
| Mesures physiques | 29 | 2 400 | 31 000 | 13 (5 / 12 / 25) |
| Génie chimique - génie des procédés | 12 | 650 | 8 400 | 13 |
| HSE | 17 | 1 000 | 9 900 | 10 |
| MT2E | 19 | 1 100 | 10 900 | 10 |
| QLIO | 21 | 1 000 | 9 650 | 10 |

Autres chiffres :
- Vœux confirmés Parcoursup 2026 (Digischool, https://www.digischool.fr/articles/orientation/parcoursup/formations-plus-demandees-sur-parcoursup-2026/ ; Diplomeo, https://diplomeo.com/actualite-parcoursup_2026_but_plus_demandes) : TC 208 804, GEA 207 919, Informatique 70 040, GMP 62 266, GEII 45 125, GC-CD 40 597, Carrières juridiques 39 183, Génie biologique 37 372, Mesures physiques 29 138, GACO 27 338. Évolution 2025 à 2026 : Mesures physiques + 24,5 % (entre dans le top 10), GEII + 16,9 %, Génie biologique + 14,8 %, GMP + 14,7 %.
- Exemple local (IUT de Béziers, rapport public MMI 2025, https://iut-beziers.edu.umontpellier.fr/files/2025/11/IUTB_Rapport_public_MMI_signe.pdf) : 48 places partagées en 24 pour les « autres candidats » (surtout bacs généraux : 26 des 28 admis de ce groupe) et 24 pour les bacheliers technologiques ; 816 candidats confirmés ; taux d'accès global environ 6,2 % ; les IUT regardent les notes (maths, NSI, français) et un projet de formation motivé ; les combinaisons de spés les plus fréquentes parmi les candidats sont maths + NSI (21,2 %) puis maths + physique-chimie (12 %).
- Documents locaux utilisés : IUT 1 de Grenoble, états des lieux janvier 2024, MP https://iut1.univ-grenoble-alpes.fr/medias/fichier/etat-des-lieux-janv2024-mp_1705482878636-pdf , GEII https://iut1.univ-grenoble-alpes.fr/medias/fichier/etat-des-lieux-janv2024-geii_1705482790778-pdf , GMP https://iut1.univ-grenoble-alpes.fr/medias/fichier/etat-des-lieux-janv2024-gmp_1705482824401-pdf ; IUT de Caen, alternance en MP https://www.iutcaen.unicaen.fr/mp/site/file/source/alternance/mp2_presentation_alternance_iut_-_sufca_2026.pdf .
- Remarque : des places sont réservées aux bacheliers technologiques dans les IUT (cas de Béziers) ; la concurrence réelle pour un bac général est donc plus forte que le ratio global. Le taux minimum fixé par académie n'a pas pu être vérifié (plus de recherche web disponible).

Barème retenu : sel 2 pour les BUT à 18 candidats par place ou plus (Informatique, GC-CD, MMI, GMP, Science des données), sel 1 en dessous (Réseaux et télécoms, à 17, en est le plus proche), avec une `selNote` quand la demande monte vite ou varie fortement selon la région (GEII, Mesures physiques) ; MMI reste à 3 (voir points incertains).

## 4. Fiches BUT (14)

Pour chaque fiche : intitulé et parcours officiels, spécialités de bac général recommandées par Onisep, chiffres utiles, ce qui a été corrigé, lien `src`. « Taux d'emploi » = taux d'emploi salarié à 12 mois des diplômés 2024 qui ne poursuivent pas d'études (note SIES n° 35). Les spécialités de bac conseillées sont celles de la page Onisep du parcours cité. Aucune fiche n'exige une spé absente de maths + physique-chimie.

### but_gmp : BUT Génie mécanique et productique (GMP)
- Intitulé officiel : « Génie mécanique et productique (GMP) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/genie-mecanique-et-productique/
- 5 parcours officiels : chargé d'affaires industrielles ; innovation pour l'industrie ; management de process industriel ; simulation numérique et réalité virtuelle ; conception et production durable.
- Onisep (parcours innovation pour l'industrie) : accessible aux bacs technologique (STI2D), général ou professionnel ; spés recommandées : maths, NSI, sciences de l'ingénieur, physique-chimie ; poursuite en master ou école d'ingénieurs (bac + 5). https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-mecanique-et-productique-parcours-innovation-pour-l-industrie
- Demande : 62 266 vœux en 2026 (+ 14,7 %), environ 19 candidats par place (Cachan environ 42, Amiens environ 7). Grenoble IUT 1 (état des lieux janvier 2024) : 2 444 candidatures pour 96 places ; 61 % de bacs généraux en 1re année ; 33 % d'alternants en 2e et 3e années. Taux d'emploi : 78,8 %.
- Corrigé : le brouillon citait un parcours « management de la production » (n'existe pas en GMP : c'est « management de process industriel ») et disait « sans frais d'école » (non vérifié, retiré) ; ajout du nombre de parcours (cinq selon l'IUT) ; `selNote` ajoutée ; poursuite ramenée à master ou école d'ingénieurs (Onisep) au lieu de « admission parallèle » seule.

### but_mp : BUT Mesures physiques
- Intitulé officiel : « Mesures physiques (MP) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/mesures-physiques/
- 3 parcours : matériaux et contrôles physico-chimiques ; mesures et analyses environnementales ; techniques d'instrumentation. Tous les IUT ne les proposent pas tous (IUT Clermont Auvergne : 2 parcours en 2e année, MAE et TI ; https://iut.uca.fr/formations/but-mesures-physiques?toPdf=true).
- Onisep (parcours matériaux et contrôles physico-chimiques) : accessible aux bacs général ou technologique (STL, STI2D) ; spés privilégiées : maths, physique-chimie, sciences de l'ingénieur ; accès sur dossier et/ou entretien. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-mesures-physiques-parcours-materiaux-et-controles-physico-chimiques
- Demande : 29 138 vœux en 2026 (+ 24,5 %, nouveau dans le top 10), environ 13 candidats par place (de 5 à 25 selon l'IUT, Toulouse environ 25). Grenoble IUT 1 (2023-2024) : environ 17 candidats par place, 85 % de bacs généraux ; alternance en 2e année 0 % (parcours matériaux) et 30 % (instrumentation), en 3e année 65 % et 52 %. IUT de Caen : alternance « BUT 2 + BUT 3 ou BUT 3 seul ». IUT Clermont Auvergne : « après le BUT 2, 35 % sont admis dans des écoles d'ingénieurs ». Taux d'emploi : 78,3 %.
- Corrigé : le brouillon disait « peu connu » (la demande monte vite : + 24,5 %) ; débouchés reformulés d'après ADIUT (métrologie, contrôle des matériaux, laboratoire d'analyse, instrumentation) ; `selNote` ajoutée ; sel 1 conservé (demande très variable selon l'IUT).

### but_geii : BUT Génie électrique et informatique industrielle (GEII)
- Intitulé officiel : « Génie électrique et informatique industrielle (GEII) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/genie-electrique-et-informatique-industrielle/
- 3 parcours : automatisme et informatique industrielle ; électricité et maîtrise de l'énergie ; électronique et systèmes embarqués.
- Onisep (parcours électricité et maîtrise de l'énergie) : accessible aux bacs technologique (STI2D) ou général ; spés recommandées : maths, NSI, sciences de l'ingénieur, physique-chimie ; poursuite en master ou école d'ingénieurs. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-electrique-et-informatique-industrielle-parcours-electricite-et-maitrise-de-l-energie
- Demande : 45 125 vœux en 2026 (+ 16,9 %, passe de la 6e à la 5e place), environ 14 candidats par place mais très inégaux (Villetaneuse environ 48, Cergy-Neuville 21, contre 5 à 8 dans plusieurs IUT de province). Grenoble IUT 1 (2023-2024) : 1 180 candidatures confirmées pour 140 places ; 30 % de bacs généraux dans la cohorte entrée en 2021. Taux d'emploi : 80,9 %.
- Corrigé : suppression de l'idée de « poursuite fréquente » non chiffrée au profit de la formulation Onisep ; parcours listés ; `selNote` (hausse de la demande, plus sélectif en Île-de-France).

### but_info : BUT Informatique
- Intitulé officiel : « Informatique ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/informatique-2/
- 4 parcours : réalisation d'applications (conception, développement, validation) ; déploiement d'applications communicantes et sécurisées ; administration, gestion et exploitation des données ; intégration d'applications et management du système d'information.
- Onisep : accessible aux bacs général et technologique (STI2D, STMG option systèmes d'information) ; spés recommandées : maths, NSI, sciences de l'ingénieur, physique-chimie, SVT, SES, langues étrangères ; poursuite en master, école d'ingénieurs ou école spécialisée. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-informatique-parcours-realisation-d-applications-conception-developpement-validation
- Demande : 70 040 vœux en 2026 (3e BUT le plus demandé), environ 24 candidats par place, avec des extrêmes en Île-de-France (Marne-la-Vallée environ 101, Créteil 76, Villetaneuse 61, Paris 46). Taux d'emploi (diplômés qui arrêtent) : 57,2 %, un des plus bas ; la note SIES ne donne pas d'explication, la poursuite d'études très fréquente en est une raison probable (non vérifiée).
- Corrigé : parcours officiels ajoutés ; `conseil: ["nsi"]` conservé (NSI conseillée, pas exigée) ; mpc reformulé d'après la liste Onisep.

### but_rt : BUT Réseaux et télécommunications (R&T)
- Intitulé officiel : « Réseaux et télécommunications (R&T) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/reseaux-et-telecommunications/
- 5 parcours : cybersécurité ; réseaux opérateurs et multimédia ; internet des objets et mobilité ; pilotage de projets réseaux ; développement système et cloud.
- Onisep (parcours cybersécurité) : accessible aux bacs général, STI2D ou professionnel systèmes numériques ; spés recommandées : maths, NSI, sciences de l'ingénieur, physique-chimie, SVT, SES ; poursuite en master, école d'ingénieurs ou école de commerce. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-reseaux-et-telecommunications-parcours-cybersecurite
- Demande : environ 17 candidats par place (1 640 places). Taux d'emploi : 63,6 %.
- Corrigé : parcours (cinq selon l'IUT) et débouchés d'après ADIUT ; poursuite alignée sur Onisep.

### but_gc : BUT Génie civil - construction durable (GC-CD)
- Intitulé officiel : « Génie civil - construction durable (GCCD) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/genie-civil-construction-durable/
- 4 parcours : bureaux d'études conception ; réhabilitation et amélioration des performances environnementales des bâtiments ; travaux bâtiment ; travaux publics.
- Onisep (parcours bureaux d'études conception) : accessible aux bacs général ou STI2D ; spés recommandées : maths, physique-chimie, sciences de l'ingénieur, NSI ; poursuite en école spécialisée, école d'ingénieurs (exemples cités : École supérieure d'ingénieurs des travaux de la construction à Metz et Paris, diplôme d'ingénieur de Builders) ou master génie civil. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-civil-construction-durable-parcours-bureaux-d-etudes-conception
- Demande : 40 597 vœux en 2026 (6e BUT le plus demandé), environ 21 candidats par place (2 600 places seulement), jusqu'à 78 candidats par place (Marseille Château-Gombert) : plus tendu que GMP. Taux d'emploi : 80,4 %.
- Corrigé : **sel 1 passé à 2** (demande supérieure ou égale à GMP, qui est à 2) avec `selNote` ; alias « GCCD » ajouté ; « topographie » et « poursuite fréquente » retirés au profit de la formulation Onisep ; BIM expliqué (maquette numérique du bâtiment) ; le brouillon disait « recrute beaucoup, notamment en alternance » (alternance non documentée par spécialité, retiré) remplacé par le taux d'emploi du ministère.

### but_mt2e : BUT Métiers de la transition et de l'efficacité énergétiques (MT2E)
- Intitulé officiel : « Métiers de la transition et de l'efficacité énergétiques (MT2E) », ancien BUT Génie thermique et énergie (GTE). ADIUT : https://www.iut.fr/les-24-specialites-de-but/metiers-de-la-transition-et-de-lefficacite-energetiques/
- 4 parcours : optimisation, réalisation, exploitation, management de l'énergie (« pour le bâtiment et l'industrie »). Les intitulés diffèrent légèrement entre Onisep (« réalisation des installations thermiques ») et ADIUT (« réalisation des installations énergétiques »).
- Onisep (parcours optimisation énergétique) : accessible aux bacs général ou STI2D ; spés conseillées : maths, sciences de l'ingénieur, physique-chimie (maths complémentaires recommandées en terminale si maths abandonnées en fin de 1re) ; poursuite en master ou école d'ingénieurs. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-de-la-transition-et-de-l-efficacite-energetiques-parcours-optimisation-energetique-pour-le-batiment-et-l-industrie
- Demande : environ 10 candidats par place (1 100 places). Taux d'emploi : 79,4 %.
- Corrigé : « licence pro » retirée des poursuites (moins de 1 % des diplômés de BUT) ; alias « GTE » et « génie thermique et énergie » ajoutés ; débouchés alignés sur Onisep et ADIUT.

### but_chimie : BUT Chimie
- Intitulé officiel : « Chimie ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/chimie/
- 4 parcours : chimie industrielle ; analyse, contrôle-qualité, environnement ; matériaux et produits formulés ; synthèse.
- Onisep (parcours chimie industrielle) : accessible, sur dossier, voire tests et/ou entretien, avec un bac « notamment général ou STL » ; spés recommandées : maths, physique-chimie, SVT, sciences de l'ingénieur, NSI ; poursuite en master chimie, master chimie et sciences des matériaux ou école d'ingénieurs. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-chimie-parcours-chimie-industrielle
- Demande : environ 15 candidats par place (1 700 places, 19 IUT). Taux d'emploi : 84,7 %, le meilleur des BUT.
- Corrigé : « poursuite en école de chimie ou en licence » remplacée par master ou école d'ingénieurs (Onisep) ; parcours listés.

### but_gcgp : BUT Génie chimique - génie des procédés (GCGP)
- Intitulé officiel : « Génie chimique - génie des procédés (GCGP) », proposé dans 12 IUT (ADIUT : https://www.iut.fr/les-24-specialites-de-but/genie-chimique-genie-des-procedes/).
- 3 parcours : conception des procédés et innovation technologique ; contrôle, pilotage et optimisation des procédés ; contrôle, qualité, environnement et sécurité des procédés.
- Onisep (parcours conception des procédés) : accessible aux bacs général ou technologique (STL, STI2D) ; spés recommandées : maths, physique-chimie, SVT, sciences de l'ingénieur ; poursuite en master génie des procédés et des bio-procédés ou école d'ingénieurs en génie chimique ou procédés. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-chimique-genie-des-procedes-parcours-conception-des-procedes-et-innovation-technologique
- Demande : environ 13 candidats par place (650 places). Taux d'emploi : 81,3 %.
- Corrigé : nombre d'IUT (douzaine) et parcours ajoutés ; poursuite alignée sur Onisep.

### but_gim : BUT Génie industriel et maintenance (GIM)
- Intitulé officiel : « Génie industriel et maintenance (GIM) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/genie-industriel-et-maintenance/
- 2 parcours : ingénierie des systèmes pluritechniques ; management, méthodes et maintenance innovante.
- Onisep (parcours ingénierie des systèmes pluritechniques) : accessible aux bacs technologique (STI2D), professionnel (très bon niveau) ou général ; spés recommandées : maths, NSI, sciences de l'ingénieur, physique-chimie, SVT ; poursuite en master ou école d'ingénieurs (électronique, énergétique, mécanique). https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-industriel-et-maintenance-parcours-ingenierie-des-systemes-pluritechniques
- Demande : environ 13 candidats par place (1 150 places). Taux d'emploi : 83,2 %, deuxième meilleur des BUT après Chimie.
- Corrigé : « très recherché, notamment en alternance » (non documenté) remplacé par le taux d'emploi officiel ; parcours listés.

### but_qlio : BUT Qualité, logistique industrielle et organisation (QLIO)
- Intitulé officiel : « Qualité, logistique industrielle et organisation (QLIO) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/qualite-logistique-industrielle-et-organisation/
- 4 parcours (ADIUT) : management de la production ; qualité et management intégré ; organisation et supply chain ; management de la transformation digitale. Intitulés Onisep un peu différents : « accompagnement à la transformation numérique », « pilotage de la chaîne logistique globale », « qualité et pilotage des systèmes de management intégrés ». La fiche utilise des formulations génériques.
- Onisep (parcours management de la production) : bac général avec spés recommandées maths, NSI, sciences de l'ingénieur, physique-chimie ; bacs technologiques STI2D, STL, STMG ; poursuite en master ou école d'ingénieurs. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-qualite-logistique-industrielle-et-organisation-parcours-management-de-la-production
- Demande : environ 10 candidats par place (1 000 places). Taux d'emploi : 68,8 %.
- Corrigé : « maths appliquées (statistiques, optimisation) » retiré (les statistiques ne sont pas citées par Onisep) ; « école d'ingénieurs (génie industriel) » ramené à « école d'ingénieurs » ; parcours ajoutés.

### but_sd : BUT Science des données
- Intitulé officiel : « Science des données » (anciennement Statistique et informatique décisionnelle, STID ; la note SIES n° 35 utilise encore ce nom). ADIUT : https://www.iut.fr/les-24-specialites-de-but/science-des-donnees/
- 2 parcours : exploration et modélisation statistique ; visualisation et conception d'outils décisionnels. 14 établissements (Onisep).
- Onisep (parcours exploration et modélisation statistique) : bac général ou technologique (STMG, STI2D) ; spés recommandées : maths, sciences de l'ingénieur, NSI, SES, physique-chimie, SVT ; poursuite en master, école d'ingénieurs ou école de commerce. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-science-des-donnees-parcours-exploration-et-modelisation-statistique
- Demande : environ 18 candidats par place (830 places, 15 IUT, de 9 à 40). Taux d'emploi des diplômés qui arrêtent : 46,6 % (le plus bas des BUT, avec MMI) ; explication probable, non vérifiée : la plupart continuent en master ou école.
- Corrigé : description reprise du libellé ADIUT (« aider à la prise de décision », « restitution des résultats ») ; « avec de l'économie et de la gestion » retiré ; parcours ajoutés.

### but_mmi : BUT Métiers du multimédia et de l'internet (MMI)
- Intitulé officiel : « Métiers du multimédia et de l'internet (MMI) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/metiers-du-multimedia-et-de-linternet/
- 3 parcours : création numérique ; développement web et dispositifs interactifs ; stratégie de communication numérique et design d'expérience.
- Onisep (parcours développement web et dispositifs interactifs) : accessible aux bacs général ou technologique (STMG, STI2D), « sur dossier scolaire, projet motivé, voire tests et/ou entretien » ; poursuite en master, diplôme d'ingénieur ou école spécialisée. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-metiers-du-multimedia-et-de-l-internet-parcours-developpement-web-et-dispositifs-interactifs
- Demande : environ 21 candidats par place (2 100 places), de 7 à 85 (Bobigny 4 230 candidats pour 50 places). Béziers 2025 : voir section 3 (taux d'accès environ 6,2 %, critères = notes en maths, NSI, français, projet de formation motivé). Taux d'emploi des diplômés qui arrêtent : 47,9 %.
- Corrigé : « un portfolio fait la différence » (non vérifié) remplacé par les critères réellement cités dans le rapport de l'IUT de Béziers (notes, projet de formation) ; parcours ajoutés ; sel 3 conservé (voir points incertains).

### but_hse : BUT Hygiène, sécurité, environnement (HSE)
- Intitulé officiel : « Hygiène, sécurité, environnement (HSE) ». ADIUT : https://www.iut.fr/les-24-specialites-de-but/hygiene-securite-environnement/
- Un seul parcours : « science du danger et management des risques professionnels, technologiques et environnementaux ».
- Onisep : accessible aux bacs général ou technologique (ST2S, STI2D, STL), « sur dossier scolaire, projet motivé, voire tests et/ou entretien » ; spés conseillées : maths, physique-chimie, SVT, biologie-écologie, sciences de l'ingénieur ; poursuite en master, école d'ingénieurs ou école de commerce. Débouchés cités : technicien en traitement des déchets, technicien en radioprotection ; ADIUT : préventeur HSE, animateur HSE, contrôleur de sécurité, coordonnateur SPS. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-hygiene-securite-environnement-parcours-science-du-danger-et-management-des-risques-professionnels-technologiques-et-environnementaux
- Demande : environ 10 candidats par place (17 IUT, 1 000 places). Taux d'emploi : 66,5 %.
- Corrigé : « sécurité incendie » retiré (absent des sources) ; « avec du terrain » retiré (non documenté) ; débouchés et parcours unique précisés ; poursuite alignée sur Onisep.

## 5. Fiches BTS (13) : liens vérifiés, textes non modifiés

Chaque lien a été ouvert le 5 octobre 2026 : la page existe et décrit bien le BTS. Aucun texte modifié (aucune erreur manifeste constatée) ; `check_cat.js` : 0 problème.

| id | page Onisep (préfixe https://www.onisep.fr/ressources/univers-formation/formations/post-bac/) | bacs cités par la page |
|---|---|---|
| bts_cira | bts-controle-industriel-et-regulation-automatique | STI2D, bac pro industriel (production ou énergie), STL, bac général |
| bts_elec | bts-electrotechnique | bac pro industrie, électricité ou électrotechnique, STI2D, bac général à dominante scientifique |
| bts_sn (CIEL) | bts-cybersecurite-informatique-et-reseaux-electronique-option-a-informatique-et-reseaux | STI2D, bac pro CIEL, bac général avec spés scientifiques |
| bts_cpi | bts-conception-des-produits-industriels | STI2D, bac pro industriel de la production, bac général |
| bts_crsa | bts-conception-et-realisation-de-systemes-automatiques | bac pro automatismes ou maintenance, STI2D ; le bac général n'est pas cité (le texte de la fiche le dit déjà) |
| bts_aero | bts-aeronautique | STI2D, bac général, bac pro aéronautique |
| bts_mav | bts-metiers-de-l-audiovisuel-option-metiers-du-son | bac général, STI2D ou STL, bac pro (parfois après mise à niveau) ; 5 options citées : métiers du son, gestion de production, métiers de l'image, métiers du montage et de la postproduction, techniques d'ingénierie et exploitation des équipements |
| bts_opticien | bts-opticien-lunetier | bac général, STL, bac pro optique-lunetterie |
| bts_geometre | bts-metiers-du-geometre-topographe-et-de-la-modelisation-numerique | bac général, bac pro géomètre, STI2D (priorité d'examen aux bacs pro) |
| bts_btp | bts-travaux-publics (la fiche couvre aussi le BTS Bâtiment : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-batiment existe aussi) | TP : STI2D, bac pro du domaine, bac général ; Bâtiment : « en majorité bac STI2D (spécialité architecture et construction) ou bac pro du domaine » (le texte de la fiche le dit déjà) |
| bts_chimie | bts-metiers-de-la-chimie | bac général (cité en premier), STL, bac pro procédés de la chimie, de l'eau et des papiers-cartons |
| bts_envnuc | bts-environnement-nucleaire | bac pro techniques d'interventions sur installations nucléaires, bac techno (notamment STI2D), bac général |
| bts_fed | bts-fluides-energies-domotique-option-a-genie-climatique-et-fluidique | bac général, technologique ou professionnel du domaine ; 3 options : A génie climatique et fluidique, B froid et conditionnement d'air, C domotique et bâtiments communicants |

BTS CIEL, intitulé exact (Onisep) : « BTS cybersécurité, informatique et réseaux, électronique (CIEL) », option A « informatique et réseaux », option B « électronique et réseaux » (page option B : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bts-cybersecurite-informatique-et-reseaux-electronique-option-b-electronique-et-reseaux ). Le nom de la fiche est exact. La mention « remplace le BTS Systèmes numériques » n'apparaît pas sur Onisep ; elle vient de Thotis (https://thotismedia.com/bts-ciel-option-b-electronique-et-reseaux/ : « remplace, depuis la session 2025, l'ancien BTS Systèmes numériques option B ») : exacte à ma connaissance, mais source secondaire, aucun arrêté consulté. L'id `bts_sn` est resté tel quel (sans effet pour le visiteur). Le BTS CIEL figure parmi les plus demandés de Parcoursup 2026 : 53 416 vœux (Digischool).

Constante BTS_COST (« Gratuit en lycée public ») : non demandée dans la mission, non revérifiée ici.

## 6. BUT manquants, fiches à retirer ou à fusionner

Aucune fiche à retirer ni à fusionner. Aucun des 14 BUT n'exige une spécialité absente du combo maths + physique-chimie (maths et physique-chimie figurent dans toutes les listes Onisep ; NSI, sciences de l'ingénieur, SVT ou SES ne sont que « recommandées »). Pas de `conseil` à ajouter, hormis `nsi` pour l'Informatique, déjà présent.

BUT absents du catalogue et pertinents pour maths + physique-chimie (non ajoutés, à décider) :
1. **Science et génie des matériaux (SGM)** : 12 IUT, 3 parcours (caractérisation et expertise des matériaux et des produits ; ingénierie des matériaux et des produits ; recyclage et valorisation des matériaux), bacs général, technologique ou professionnel, alternance possible ; taux d'emploi 72,3 %. Proche de Mesures physiques et de Chimie, donc pertinent pour physique-chimie. https://www.iut.fr/les-24-specialites-de-but/science-et-genie-des-materiaux/
2. **Génie biologique (GB)** : 5 parcours (agronomie ; biologie médicale et biotechnologie ; diététique et nutrition ; sciences de l'aliment et biotechnologie ; sciences de l'environnement et écotechnologies) ; Onisep : bac général, STL, ST2S ou STAV, spés recommandées SVT, biologie-écologie, maths, physique-chimie, sciences de l'ingénieur ; très demandé (37 372 vœux en 2026, + 14,8 %) ; taux d'emploi 81,2 % ; `conseil: ["svt"]` serait approprié. Utile pour un élève maths + PC attiré par la santé, l'agro ou l'environnement. https://www.iut.fr/les-24-specialites-de-but/genie-biologique/ ; https://www.onisep.fr/ressources/univers-formation/formations/post-bac/but-genie-biologique-parcours-biologie-medicale-et-biotechnologie
3. **Packaging, emballage et conditionnement (PEC)** : 6 sites seulement (Avignon, Besançon-Vesoul, Évreux, Reims-Châlons-Charleville, Toulouse-Castres, Chambéry), 2 parcours, taux d'emploi 66,7 % ; niche, priorité faible. https://www.iut.fr/les-24-specialites-de-but/packaging-emballage-et-conditionnement/

Hors périmètre de ce groupe : les BUT du tertiaire (GEA, TC, GACO, MLT, Information-communication, Carrières juridiques, Carrières sociales) ; GEA ou MLT pourraient intéresser un élève maths attiré par la gestion, à voir avec les fiches « commerce et gestion » du catalogue.

## 7. Points incertains

1. **Sélectivité** : jugement fondé sur des données secondaires (Thotis, Digischool, Diplomeo) et deux rapports locaux, faute d'accès aux données ouvertes Parcoursup. Les ratios par IUT varient de 4 à plus de 100 candidats par place ; pour un bac général, la concurrence est plus forte que le ratio global (places réservées aux bacs technologiques).
2. **Cohérence MMI (sel 3) et Informatique (sel 2)** : les ratios (environ 21 pour MMI contre 24 pour Informatique, 21 pour GC-CD et 19 pour GMP) ne justifient pas un cran de plus pour MMI. MMI est conservé à 3 (valeur du brouillon, taux d'accès d'environ 6 % observé à Béziers, extrêmes à 85 candidats par place en Île-de-France), mais une échelle strictement alignée sur les chiffres le mettrait à 2. Décision à arbitrer au niveau du catalogue entier.
3. **Alternance (`alt`) non modifiée** : seules les parts nationales par année sont connues (4 % en BUT 1, 21 % en BUT 2, 57 % en BUT 3 ; environ 24 % des inscrits tous niveaux), pas de chiffre par spécialité. Les valeurs 0,6 à 0,8 du brouillon signifient « alternance fréquente en 2e et surtout en 3e année » ; elles seraient trop hautes si on les lit comme « part des étudiants ». Cas observés : GMP Grenoble 33 % en 2e et 3e années, MP Grenoble 0 à 30 % en 2e année et 52 à 65 % en 3e.
4. **Parcours disponibles** : les intitulés viennent d'ADIUT et d'Onisep, mais chaque IUT ne propose qu'une partie des parcours (« selon l'IUT » ajouté dans les fiches où c'était utile). Pour QLIO et MT2E, ADIUT et Onisep ne nomment pas tous les parcours exactement de la même façon.
5. **`inge: 0,5`** non vérifié spécialité par spécialité : seuls des cas locaux sont connus (IUT Clermont Auvergne, MP : « après le BUT 2, 35 % sont admis dans des écoles d'ingénieurs »). Onisep cite l'école d'ingénieurs (ou « diplôme d'ingénieur ») comme poursuite possible pour les 14 BUT, MMI compris ; `inge: 0` est resté pour MMI (la poursuite en école d'ingénieurs y est a priori moins fréquente, non chiffré), `inge: 0,5` pour les 13 autres.
6. **CIEL remplaçant Systèmes numériques** : confirmé par une seule source secondaire (Thotis, session 2025) ; l'intitulé du diplôme, lui, est confirmé par Onisep.

## 8. Longueur des textes

Les textes `desc`, `apres` et `mpc` des BUT sont plus longs que dans le brouillon (somme des trois : environ 1,9 fois plus), parce que j'y ai ajouté les parcours officiels, les spécialités Onisep et les chiffres officiels. `desc` reste entre 262 et 344 caractères (spec : 150 à 350), comme dans les fiches BTS.
