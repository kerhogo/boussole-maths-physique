# Faits vérifiés : groupe « autre » (fichier cat/cat_autre.js)

Vérification faite le 5 octobre 2026, pour la rentrée 2027 (Parcoursup 2027). Méthode : WebFetch sur des pages officielles ; le quota de WebSearch (200 sur 200) a été épuisé en cours de route. Les résumés renvoyés par WebFetch sont parfois incomplets ou se contredisent : quand c'est le cas, le point est classé dans « Points incertains » et le texte du catalogue reste prudent. Beaucoup de pages Onisep ne renvoient que leurs métadonnées : l'existence de la page et son titre sont vérifiés, pas son contenu détaillé.

Résultat du contrôle : `node dev/check_cat.js cat/cat_autre.js` donne « 11 fiches, 0 problèmes ».

## Réglages modifiés (clés autorisées par la spec)

| fiche | clé | avant | après | raison |
|---|---|---|---|---|
| pilote | p.sortie | 2 | 3 | aucune voie ENAC ne prend un bachelier sans études : 1 an d'études scientifiques (60 ECTS) puis environ 24 mois de formation, soit 3 ans avant le diplôme bac+3 |
| marine_marchande | p.concours | 1 | .5 | ENSM : pas de concours, sélection sur Parcoursup (dossier, lettre de motivation, oral pour l'ingénieur) |
| marine_marchande | alt | .3 | .2 | apprentissage seulement pour le cursus génie maritime à Nantes (1 an étudiant puis 2 ans apprenti) |
| bachelor_sci | p.concours | 1 | .5 | dossier et entretien en anglais, pas d'épreuves écrites propres à l'école |
| info_hors_inge | alt | .5 | .3 | Epitech : pas d'alternance formelle dans le Programme Grande École ; 42 : apprentissage ou contrat pro possible, mais dans la seconde partie du cursus |

`sel`, `inge`, `conseil`, `p.prive`, `p.niv`, `p.prepa`, `p.fac` : inchangés. `ING_PUB_COST` n'est plus utilisée dans ce fichier (marine_marchande la remplaçait par un montant précis).

## commerce (seulement le lien, consigne)

- Lien : https://www.onisep.fr/formation/les-principaux-domaines-de-formation/les-ecoles-de-commerce (« Les écoles de commerce », page existante : accessibles directement après le bac en 3 à 5 ans ou après bac+2 en 3 ans, environ 150 programmes).
- Contenu de la fiche non modifié (déjà vérifié par ailleurs). La fiche formation Onisep devinée `.../post-bac/ecole-de-commerce` donne une 404.

## info_hors_inge (Epitech, 42)

Lien retenu : https://www.epitech.eu/programme-grande-ecole-informatique/ (libellé « Epitech »). La fiche Onisep « Expert en ingénierie logicielle » (https://www.onisep.fr/ressources/univers-formation/formations/post-bac/expert-en-ingenierie-logicielle) existe, liste les 15 campus de « École pour l'informatique et les nouvelles technologies », mais ne nomme pas Epitech et porte un autre intitulé de titre que la brochure : écartée.

Epitech (brochure 2026-2027 : https://www.epitech.eu/wp-content/uploads/EPITECH-BROCH-SALON-EDUCATION-A4-2026-2027_BD-1.pdf) :
- Programme Grande École en 5 ans après le bac. Frais 2026-2027 : année 1 = 8 270 €, année 2 = 8 300 €, années 3 à 5 = 10 560 €/an ; inscription 990 €/an ; frais complémentaires 140 à 235 € selon le campus.
- Diplôme : « Diplôme Bac +5 d'Expert(e) en technologies de l'information visé par le Ministère de l'Enseignement supérieur », enregistré au RNCP niveau 7 ; la brochure se présente comme « première école d'informatique hors CTI accréditée par le Ministère ». Ce n'est donc pas un titre d'ingénieur CTI.
- Admission : « Le concours Epitech est accessible en un seul vœu sur Parcoursup » : QCM de logique et d'anglais, questionnaire de personnalité et de culture tech, entretien de motivation. Aucun prérequis de spécialité. 15 campus en France.
- Alternance : pas de dispositif formel dans le Programme Grande École (stages : 4 à 6 mois en année 2, 4 à 5 mois en année 3, 6 mois en année 5). Le Bachelor (3 ans) a un « Track alternance » en année 3.
- Pédagogie : projets, « piscines » (5 semaines en année 1, 3 semaines en année 2).

42 (https://42.fr/admissions/admissions/, https://42.fr/le-campus-de-paris/diplome-informatique/, https://42.fr/le-programme/stages-et-professionnalisation/, https://42.fr/le-programme/methode-travail/) :
- « 100 % gratuit », « sans frais cachés ». Dès la majorité légale, sans limite d'âge supérieure ; aucun diplôme ni spécialité requis ; pas besoin de savoir coder. Étapes : jeux en ligne (tests cognitifs), rencontre au campus, « piscine » d'un mois sur place. Maximum 2 piscines dans une vie (300 jours minimum entre deux tentatives). Piscines 2027 : février et mars, puis juillet à septembre.
- Cursus : tronc commun de 1 an à 1 an et demi (2 ans maximum), puis spécialisation ; « 3 à 5 ans au total selon les objectifs et la progression ».
- Titres : « Concepteur développeur de solutions informatiques » (RNCP niveau 6) et « Expert en architecture informatique » (RNCP niveau 7). Ce sont des titres professionnels RNCP, pas des titres d'ingénieur. Stages de 4 à 6 mois et 6 mois, ou jusqu'à 2 ans d'apprentissage ou de contrat pro.

Incertain : 42 donne deux formulations sur l'âge d'entrée (« à partir de 18 ans ou de l'année de terminale » sur une page, « dès la majorité légale ; moins de 18 ans avec le bac » sur une autre). Le catalogue ne cite pas l'âge.

## armees_off (écoles d'officiers)

Lien retenu : https://www.onisep.fr/formation/les-principaux-domaines-de-formation/les-ecoles-de-la-defense (« Les écoles de la Défense : formations et admissions », page existante, aperçu général : candidatures de la 3e à bac+5, cinq composantes dont terre, air et espace, marine ; pas de détail des concours). Les fiches formation Onisep existent pour les diplômes d'ingénieur de l'École navale et de l'ESM de Saint-Cyr, mais aucune ne couvre les quatre écoles.

Recrutement après prépa (le cas du bachelier maths + physique-chimie) :
- École de l'air et de l'espace (Salon-de-Provence) : concours externes « filières MP-MPI-PC-PSI », « licence Sciences politiques », « licence Sciences », « titres » (https://www.ecole-air-espace.fr/la-formation-de-lofficier-aviateur/les-concours-externes/). Cursus de 3 ans ; diplôme d'ingénieur de l'EAE (CTI, grade de master) ou diplôme de l'IEP d'Aix (brochure EAE 2024 : https://ecole-air-espace.fr/wp-content/uploads/2025/01/Brochure-EAE-2024.pdf). Âge : 22 ans au plus au 1er janvier d'après le guide candidat de l'armée de l'air (https://devenir-aviateur.fr/themes/custom/aviateur/asset/guide-candidat.pdf) ; 25 ans pour le concours sur titres.
- École navale (Brest) : prépas MP, PSI, PC ou MPI via le concours Centrale-Supélec ; 3 ans ; « titre d'ingénieur » (https://www.ecole-navale.fr/formation/formations-officiers/cursus-officiers-de-carriere/). Âge : 22 ans au plus au 1er janvier (https://www.francetravail.fr/actualites/le-dossier/armee---defense/marine-nationale/le-recrutement-officiers.html). Onisep : diplôme d'ingénieur de l'École navale, 3 ans, bac+5, grade de master.
- ESM de Saint-Cyr Coëtquidan : concours après CPGE, 3 ans, 22 ans ou moins au 1er janvier (https://www.sengager.fr/assets/Officiers_2a6d9cbbe3.pdf). Onisep : diplôme d'ingénieur de l'ESM, 3 ans, bac+5, RNCP niveau 7 (https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-ecole-speciale-militaire-de-saint-cyr-conferant-le-diplome-d-ingenieur-de-l-esm-pour-la-filiere-sciences-de-l-ingenieur).
- Lycées militaires : Saint-Cyr-l'École accepte « les détenteurs d'un baccalauréat pour les classes préparatoires », sur dossier (https://www.sengager.fr/editos/fiche-lycee-saint-cyr-l-ecole) ; Autun, Aix-en-Provence et le Prytanée de La Flèche ont aussi leur fiche sur sengager.fr.
- École polytechnique, cycle ingénieur : 4 ans ; concours X-ENS ouvert aux filières MP (option informatique ou option physique et sciences de l'ingénieur), MPI, PC, PSI, PT, BCPST, TSI ; 431 places pour les Français et 140 pour les internationaux au concours 2026 (https://www.polytechnique.edu/admission-cycle-ingenieur/concours-dadmission). Pour les Français : pas de frais de scolarité, rémunération sous statut militaire d'élève-officier ; il faut ensuite servir l'État 10 ans dans les 20 ans, sinon rembourser 21 000 € (4e année dans l'administration) ou 31 000 € (https://programmes.polytechnique.edu/en/ingenieur-polytechnicien-program/tuition-fees). Âge (catalogue 2022-2023) : au moins 17 ans au 1er septembre, moins de 23 ans au 1er janvier du concours (https://synapses.polytechnique.fr/catalogue/2022-2023/diplome/1/X-diplome-d-ingenieur-de-l-ecole-polytechnique).

Recrutements directs au niveau bac (officiers) :
- Armée de l'air et de l'espace, officier sous contrat navigant (pilote de chasse, de transport, d'hélicoptère, navigateur officier systèmes d'armes, pilote à distance) : bac minimum, nationalité française, moins de 27 ans à la signature du contrat (guide candidat, fiche de poste pilote de transport https://devenir-aviateur.fr/sites/default/files/2020-04/poste-PILOTE-TRANSPORT.pdf, triptyque EAE, France Travail). Premier contrat de 10 ans, renouvelable jusqu'à 20 ans de service ; environ 3 ans de formation jusqu'au brevet de pilote de transport ; sélection sur tests psychotechniques, épreuve d'anglais, épreuves sportives, visite médicale, entretien de motivation ; formation initiale à Salon-de-Provence.
- Armée de terre, officier sous contrat pilote (aviation légère, ALAT) : bac minimum, moins de 32 ans (https://www.sengager.fr/assets/Commandement_ou_specialiste_Officier_66b1219453.pdf) ; 8 mois à Saint-Cyr Coëtquidan puis 24 mois à l'EALAT de Luc-en-Provence ; 2 618 € brut par mois (https://www.sengager.fr/tous-nos-postes/officier-pilote-dhelicoptere-davion).
- Marine nationale : aucun recrutement d'officier au niveau bac. Officier sous contrat : bac+3 minimum, moins de 30 ans, 4 à 8 ans ; volontaire officier aspirant : bac+2, moins de 26 ans ; École navale, officiers sous contrat : bac+3 minimum, 1 an de formation, premier contrat de 8 ans (https://www.ecole-navale.fr/formation/formations-officiers/officiers-sous-contrat/).
- Armée de terre : les autres officiers sous contrat demandent bac+2 (OSC encadrement) ou bac+3 (OSC spécialiste).

Incertain :
- Limites d'âge contradictoires : OSC navigant « moins de 27 ans » (guide candidat, fiche de poste, triptyque EAE, France Travail) mais « moins de 30 ans » dans la brochure EAE 2024 ; concours EAE « moins de 27 ans » dans la brochure 2024 contre « 22 ans au 1er janvier » dans le guide candidat. Le catalogue ne cite aucun âge pour cette raison.
- Solde des élèves-officiers : confirmée seulement pour Polytechnique (« remuneration under military status »). Pour l'EAE, l'École navale et Saint-Cyr, les pages officielles consultées ne disent rien ; le catalogue dit « formation rémunérée » comme le brouillon d'origine (très probable, non sourcé).
- Solde d'un lieutenant sous contrat : 2 618 € brut (document « Commandement ou spécialiste ») contre 2 900 € brut, et 3 100 € brut pour un lieutenant de carrière (document « Officiers ») : incohérence entre deux brochures de sengager.fr, montants non repris dans le catalogue.
- Le sigle « EOFIA » (sengager.fr : « 17-19 ans, Bac ou élève de terminale ») n'est défini sur aucune page consultée : non utilisé.

## armees_sof (sous-officiers techniciens)

Lien : même page Onisep que armees_off (les pages Onisep « armée de terre », « marine nationale » et « armée de l'air » ne renvoient que leurs métadonnées).

- Armée de l'air et de l'espace : bac général, technologique ou professionnel, nationalité française, 30 ans au plus à la signature, formation militaire de 16 semaines puis formation de spécialité, premier contrat de 5 à 8 ans (« 5 ou 6 ans selon les spécialités » dans le guide candidat) ; école : EFSOAA à Rochefort-Saint-Agnant (https://www.francetravail.fr/actualites/le-dossier/armee---defense/armee-de-lair/le-recrutement-sous-officier.html, guide candidat). L'EETAA (16 à 18 ans) offre une formation gratuite et rémunérée menant au bac puis à sous-officier.
- Marine, officiers mariniers : bac à bac+2, 17 à 30 ans, École de maistrance à Brest et à Saint-Mandrier, formation initiale de 5 mois puis 2 à 9 mois de spécialité (https://www.francetravail.fr/actualites/le-dossier/armee---defense/marine-nationale/le-recrutement-officiers-marinie.html) ; les élèves « s'engagent à servir dix ans » (https://www.defense.gouv.fr/marine/mieux-nous-connaitre/ecoles-formations/centre-dinstruction-naval) ; spécialités : opérateur radar, sonar, systèmes d'armes, mécanique navale, plongeur-démineur, techniciens aéronautiques.
- Armée de terre : bac ou diplôme de niveau IV, 17,5 à 32 ans (https://www.sengager.fr/editos/devenir-soldat) ; 8 mois à l'ENSOA (ou à l'EMHM) puis 5 à 36 semaines pour le brevet de spécialité (BSAT) (https://www.francetravail.fr/actualites/le-dossier/armee---defense/armee-de-terre/travailler-dans-larmee-de-terre.html).
- Rémunération : sergent de l'armée de terre, 2 134 € brut par mois après une première année en régiment (https://www.sengager.fr/editos/les-avantages-de-l-armee-de-terre) ; la FAQ précise « hors prime, pour un célibataire sans enfant » (https://www.sengager.fr/editos/faq). Engagé volontaire de l'armée de terre : 1 982 € brut. Pas de chiffre trouvé pour l'air ni la marine.

## pilote (pilote de ligne)

Lien : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/pilote-de-ligne-enac (« Pilote de ligne (ENAC) » : niveau 6 (bac+3), 2 ans, seul établissement : ENAC campus de Toulouse ; ne précise ni les conditions d'accès ni le coût).

ENAC, élève pilote de ligne (EPL) :
- Arrêté du 28 juillet 2023 (https://concours.enac.fr/concours/c13608/arrete%20EPL%2028%20juillet%202023.pdf) et page ENAC (https://www.enac.fr/fr/epl-eleve-pilote-de-ligne) : trois filières. EPL/S : plus de 16 ans et moins de 23 ans au 1er janvier, 60 crédits ECTS (prépa, licence scientifique ou diplôme de niveau 5 en sciences et technologies). EPL/U : 17 à 28 ans, bac+3 scientifique ou BTS/BUT, ou 120 ECTS plus certificat de connaissances ATPL, plus licence LAPL ou SPL et examen d'anglais FCL.055. EPL/P : 18 à 30 ans, bac, licence de pilote professionnel CPL(A), ATPL théorique de moins de 18 mois (sauf exception), médical classe 1.
- Aucune filière n'accepte un candidat qui n'a que le bac. Nationalité de l'UE ou de l'EEE, aptitude médicale de classe 1, 3 présentations au maximum, formation d'environ 24 mois, diplôme visé niveau bac+3 grade licence (catalogue ENAC : https://formations.enac.fr/fr/formations/feuilleter-le-catalogue/sciences-technologies-sante-STS/diplome-vise-niveau-bac-3-grade-licence-RD/pilote-de-ligne-epl-113352.html).
- Sélection EPL/S (notice 2021, https://concours.enac.fr/concours/c13486/N_fr_NOTICE_EPLS_2021.pdf) : épreuves écrites de maths, physique et anglais, tests psychotechniques et psychomoteurs, évaluation psychologique, oral d'anglais, visite médicale classe 1 ; 14 places. La notice EPL/S 2026 n'a pas pu être récupérée (liens 404). D'après test-pilote.fr (site privé qui cite les notices ENAC), 14 places et 1 537 inscrits en 2025, soit environ 1 % d'admis : ordre de grandeur seulement.
- Coûts, notice EPL/U et EPL/P 2026 (https://concours.enac.fr/concours/c13611/N_fr_NOTICE_EPLUP_2026.pdf) : droits d'inscription au concours 190 € (gratuit pour les boursiers du gouvernement français), « frais de scolarité de 1 500 €/an », « toutes les dépenses techniques relatives à la formation sont prises en charge par l'ENAC », hébergement et restauration à la charge de l'élève, bourse d'entretien sous conditions de ressources pour les moins de 28 ans. Places 2026 : « probablement 4 » en EPL/U et 2 en EPL/P. Le barème des tarifs ENAC confirme 190 € de droits de concours EPL en 2025-2026 (https://www.enac.fr/sites/default/files/2026-03/Tarifs%20ENAC%20CA%20MARS%202026.pdf).
- Seule entrée juste après le bac : cycle préparatoire ATPL (https://concours.enac.fr/concours/c13606/N_fr_NOTICE_CPATPL_2026.pdf), créé en 2011 pour des élèves « d'origine sociale modeste » : élève de terminale, plus de 16 ans et moins de 20 ans au 1er janvier, critères d'attribution d'une bourse de l'enseignement supérieur, BIA ou recommandation d'un club aéronautique affilié, nationalité UE/EEE ; 10 mois à Toulouse (maths, physique, anglais, français), puis ATPL à l'ENAC gratuitement ; « 5 places » en 2026 ; bourse d'entretien ENAC.

Cadets d'Air France (https://corporate.airfrance.com/fr/node/836 ; campagne 2026 : https://corporate.airfrance.com/fr/node/5716 ; https://www.air-journal.fr/2026-06-17-air-france-rouvre-sa-filiere-cadets-une-formation-de-pilote-de-ligne-100-financee-5275748.html) :
- Conditions : bac plus ATPL théorique, ou 1re année de prépa, ou bac+2 scientifique (120 ECTS), ou bac+4/5 ; nationalité de l'EEE ou suisse ; pas de limite d'âge stricte ; médical classe 2 (classe 1 acceptée) ; frais d'inscription 200 € ; candidatures du 15 juin au 31 juillet 2026.
- Formation de 24 mois (9 mois de théorie ATPL puis 15 à 21 mois de vol et de simulateur), « entièrement prise en charge par la compagnie » ; rémunération de 65 % du SMIC avant 21 ans, 80 % de 21 à 26 ans, 100 % après 26 ans ; élèves logés pendant la formation initiale.

Écoles privées : « de 70 000 € à 120 000 € » d'après la presse spécialisée (salerya.fr, octobre 2024 : https://salerya.fr/metiers/transport/pilote-de-ligne/formation-enac-vs-privee-roi/) ; « peut atteindre 100 000 € » (CIDJ, mis à jour le 22 octobre 2025 : https://www.cidj.com/metiers/pilote-de-ligne). Aucune source officielle de prix : formulé « souvent 70 000 à 120 000 € ».

Incertain : le barème « Tarifs ENAC CA mars 2026 » (même URL ci-dessus) contient un tableau de droits de scolarité annuels que les résumés WebFetch rattachent tantôt à « IENAC/GSEA/EPL » (5 100 € pour un étudiant de l'UE admis sur concours, 9 300 € hors UE), tantôt aux seuls ingénieurs. La notice EPL/U-EPL/P 2026 (source primaire) et un site tiers parlent de 1 500 €/an : le catalogue retient 1 500 €/an « d'après la notice 2026 » et n'a pas pu trancher pour EPL/S.

## marine_marchande (ENSM)

Lien : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-ecole-nationale-superieure-maritime (« Diplôme d'ingénieur de l'École nationale supérieure maritime (ENSM) », 5 ans, bac+5, RNCP niveau 7, grade de master, CTI ; admission après bac général ou technologique, sélection sur dossier et épreuves écrites ou orales ; Le Havre, Nantes, Marseille ; exemple de métier : officier de la marine marchande).

- Admission : candidature sur Parcoursup pour les trois formations initiales (ingénieur, officier chef de quart passerelle, officier chef de quart machine) ; critères : résultats académiques, résultats scientifiques, avis des bulletins, lettre de motivation, et une épreuve orale pour les candidats admissibles à l'ingénieur (FAQ : https://supmaritime.fr/faq-formation-initiale-a-lensm ; brochure mer.gouv : https://formations.mer.gouv.fr/sites/default/files/2025-05/brochure-formation-initiale-maritime%20VF.pdf). « Un bac à dominante scientifique est fortement conseillé » (maths, physique-chimie, sciences de l'ingénieur, informatique). Pas de concours.
- Cursus : ingénieur navigant (« officier polyvalent », 5 ans : 3 ans à Marseille puis 2 ans au Havre), ingénieur génie maritime (non navigant, 5 ans : Marseille puis Nantes ; parcours éco-gestion du navire et déploiement des systèmes offshore), officiers chef de quart bac+3 en 3 ans (machine à Saint-Malo). Quatre sites : Le Havre, Marseille, Nantes, Saint-Malo. Diplôme d'ingénieur accrédité par la CTI, grade de master ; officiers : grade de licence (https://www.supmaritime.fr/app/uploads/2025/12/Officier-Polyvalent.pdf ; RNCP 17080 puis 40100 sur francecompetences).
- Effectifs, rentrée 2026 : 1 171 inscriptions prévues ; 732 ingénieurs polyvalents, 173 officiers pont, 160 officiers machine, 106 génie maritime (https://www.ecologie.gouv.fr/sites/default/files/documents/01092026_DP.Rentree_classe_maritimes_2026.pdf).
- Coût : 1 600 €/an en 2025-2026 (fiche Officier polyvalent, décembre 2025) ; 1 570 € en 2023-2024 et 8 000 € hors UE (FAQ) ; boursiers exonérés ; CVEC en plus ; l'ENSM ne propose pas d'hébergement sur ses campus. Montant 2026-2027 non publié : le catalogue dit « environ 1 600 €/an (montant 2025-2026) ».
- Alternance : seulement l'ingénieur en génie maritime à Nantes (1 an d'étudiant puis 2 ans d'apprenti, 4 semaines d'école pour 5 semaines d'entreprise) (https://www.supmaritime.fr/app/uploads/2026/03/ENSM_FICHE-APPRENTISSAGE-V9.pdf).
- Rapport public Parcoursup 2022 (ingénieur Marseille) : 165 places, 462 candidatures confirmées, 215 propositions ; le rapport cite les spécialités maths, physique-chimie, SI, NSI en première, les mêmes plus l'option maths expertes en terminale ; non repris dans la FAQ actuelle, donc pas de `conseil`.
- Aptitude médicale à la navigation : à justifier à l'inscription de septembre.
- J'ai supprimé l'alias « hydro » (aucune formation d'hydrographe à l'ENSM) et ajouté « École nationale supérieure maritime », « officier polyvalent », « ingénieur navigant », « capitaine de navire ».

## meteo (École nationale de la météorologie)

Lien : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-ecole-nationale-de-la-meteorologie (« Diplôme d'ingénieur de l'École nationale de la météorologie », 3 ans, bac+5, après CPGE ou bac+2 équivalent, à Toulouse, insertion directe).

Pages de l'école (https://meteofrance.fr/enm, https://meteofrance.fr/enm/admission, https://meteofrance.fr/enm/nos-formations/devenir-ingenieur-meteo, https://meteofrance.fr/enm/nos-formations/devenir-technicien-meteo) :
- Ingénieur : 3 ans (2 ans pour l'entrée en M1). Voies : concours CMT (Mines-Télécom) après prépa MP, PC, PSI ou MPI ; concours G2E après BCPST ; recrutement INP sur contrôle continu (prépa INP) ; L3 scientifique ; M1 scientifique ; concours interne ; titres bac+5. Statut fonctionnaire (formation rétribuée, engagement de 8 ans à Météo-France) ou civil (frais d'inscription de 618 € en 2024-2025 plus CVEC). Diplôme accrédité CTI et EURACE (valable jusqu'en 2031). Environ 200 élèves par an dont la moitié sous statut de fonctionnaire.
- Technicien : TSE (exploitation, « bac scientifique dominante maths/physique »), TSI (instruments et installations, « bac scientifique ou technologique STI2D et STL »), 2 ans, statut de fonctionnaire, rémunérés pendant la formation ; TMM pour la défense. Concours externes et internes.
- Master SOAC (sciences de l'océan, de l'atmosphère et du climat) en partenariat avec l'université de Toulouse. Un tiers de la promotion d'ingénieurs 2022-2025 a poursuivi en doctorat ; 85 % des diplômés civils trouvent un emploi en moins de 2 mois.

Incertain : les débouchés « énergie ou assurance » du brouillon ne sont confirmés par aucune page de l'école : remplacés par « dans le privé ». La difficulté et les places des concours de technicien ne sont pas publiées sur les pages consultées. La fiche Onisep métier « ingénieur météorologue » donne une 404.

## etranger (EPFL, ETH Zurich, Belgique, Québec)

Lien : https://www.onisep.fr/formation/partir-a-l-etranger/etudier-a-l-etranger-le-tour-du-monde-en-35-pays (« Étudier à l'étranger : guide de 35 pays » ; la page n'a renvoyé que ses métadonnées, donc je n'ai pas pu confirmer qu'elle détaille la Suisse, la Belgique et le Canada). Alternative vérifiable pour une seule destination : https://www.epfl.ch/education/admission/fr/admission/conditions-dadmission-inscription-bachelor/.

EPFL :
- Les titulaires d'un certificat de l'UE sont admis en première année « dans la limite des places disponibles » : au moins 6 matières sur 7 à valider, dont mathématiques et physique « au niveau le plus élevé », avec au moins 80 % de la note maximale (soit environ 16/20) en maths, en physique et en moyenne générale. Limitation à 3 000 étudiants en première année de bachelor « dès la rentrée de 2025 et pour quatre ans au moins » ; la moyenne générale sert à classer.
- Candidature de mi-novembre au 30 avril pour la rentrée de septembre ; frais de dossier de 150 CHF pour un diplôme étranger. Pièces définitives avant le 10 juillet.
- Examen d'admission (pour ceux qui n'ont pas les notes) : 18 au 22 janvier 2027, inscription du 1er octobre au 1er décembre 2026, 550 CHF (examen réduit) ou 800 CHF (complet).
- Frais depuis l'automne 2025 : 2 240 CHF par semestre (finance de cours 2 190 CHF, « triplée » par rapport à 730 CHF, plus 50 CHF) pour les étrangers non résidents avant leurs études ; 780 CHF pour les Suisses et les résidents. Soit environ 4 480 CHF par an. Adaptation à l'indice des prix tous les 4 ans (première en 2029).
- Pages : https://www.epfl.ch/education/admission/fr/admission/conditions-dadmission-inscription-bachelor/ ; .../procedure-dinscription/ ; .../examens-dadmission/ ; https://www.epfl.ch/education/studies/reglement-et-procedure/taxes-d-etudes/finance-cours-autres-frais/.

ETH Zurich (https://ethz.ch/en/studies/bachelor.html, https://ethz.ch/en/studies/bachelor/application/non-swiss-matriculation-certificate.html, https://ethz.ch/students/en/studies/financial/tuition-fees.html) :
- « La langue d'enseignement principale de tous les bachelors est l'allemand » (la maîtrise de l'anglais est indispensable). « Certain applicants must pass an ETH Zurich entrance examination » : les pages consultées ne disent pas si un bachelier français en est dispensé, ni à quelles conditions de notes, ni le niveau d'allemand exigé.
- Frais depuis l'automne 2025 : 730 CHF par semestre pour les Suisses, les résidents et assimilés ; 2 190 CHF par semestre pour les autres étrangers (triple). Soit environ 4 380 CHF par an.

Belgique francophone :
- Ingénieur civil : « l'accès au bachelier en sciences de l'ingénieur, orientation ingénieur civil, est conditionné à la réussite d'un examen d'admission », en deux sessions (début juillet et début septembre) (https://uclouvain.be/fr/facultes/epl/examenadmission.html) ; les étudiants étrangers sont inclus dans la procédure de sélection (https://www.studyinbelgium.be/fr/etudes-de-bachelier-en-belgique-francophone-conditions-dadmission-et-dinscription). Demande d'équivalence du diplôme nécessaire. Le niveau de l'examen correspond au programme de mathématiques de 6 h par semaine de 5e et 6e secondaire.
- Droits d'inscription 2026-2027 : « au maximum 1 194 € net » par an pour un ressortissant de l'UE (https://www.studyinbelgium.be/fr/etudier-en-belgique-francophone-les-frais-dinscription). Bachelier de 3 ans.

Polytechnique Montréal (https://www.polymtl.ca/admission/baccalaureat/conditions-dadmission-au-baccalaureat/exigences-academiques/2-etudes-hors-quebec/21-baccalaureat-general-francais, https://www.polymtl.ca/futur/bac/finances, https://www.polymtl.ca/futur/bac/admission) :
- Bac général français : spécialité mathématiques obligatoire plus une deuxième parmi physique-chimie, NSI, sciences de l'ingénieur ou SVT ; maths expertes non exigées ; moyenne minimale de 13/20 au bac ; offre conditionnelle selon les résultats de seconde, première, épreuves anticipées et 1er trimestre de terminale en maths et physique-chimie ; entrée avec une « année préparatoire intégrée » ; bourse d'admission avec mention Très bien (16/20) ; dispense de test de français.
- Frais 2026-2027 pour 2 semestres de 15 crédits : 10 713 $ CAD pour les Français et Belges francophones (même tarif que les Canadiens hors Québec, en vertu d'ententes France-Québec), 4 100 $ pour les Québécois, 32 990 $ pour les internationaux.
- Dates limites pour les candidats internationaux : 1er février (automne) et 1er juin (hiver).

Correction principale : « maths expertes souvent attendues » supprimé (non exigées à Polytechnique Montréal, non mentionnées à l'EPFL).

## bachelor_sci (Bachelor of Science de l'École polytechnique)

Lien : https://programmes.polytechnique.edu/en/bachelors-admissions/bachelor-of-science/admissions-criteria-and-procedure (libellé « École polytechnique »). Aucune fiche Onisep n'existe pour ce bachelor (deux URLs devinées en 404 ; l'article Onisep « Les bachelors en écoles d'ingénieurs » existe mais ne nomme aucune école).

- 3 ans, enseignement entièrement en anglais ; première année de tronc commun, puis trois parcours : mathématiques et physique, mathématiques et informatique, mathématiques et économie (https://synapses.polytechnique.fr/catalogue/2026-2027/diplome/12/BX-ecole-polytechnique-bachelor-of-science).
- Candidature : « soit via Parcoursup, soit via le portail de candidature de l'École polytechnique », une seule fois par année universitaire (FAQ : https://programmes.polytechnique.edu/en/bachelor/admissions/application-faq). Trois tours 2026-2027 sur le portail : 17 septembre au 20 octobre 2026, 21 octobre 2026 au 6 janvier 2027, 7 janvier au 8 février 2027. Entretien d'environ 50 minutes en anglais ; anglais C1 prouvé (IELTS 6,5, TOEFL iBT 90, Cambridge 176). Frais de dossier : 105 € (page admission) contre 95 € (catalogue synapses).
- Recommandation pour le bac français : « deux spécialités scientifiques dont les mathématiques, plus, si possible, l'option maths expertes » (d'où `conseil: ["expertes"]`).
- Programme « accrédité par le ministère de l'Enseignement supérieur pour délivrer un grade de licence » ; poursuite en master en France et à l'étranger.
- Frais : 15 900 €/an (UE et EEE), 19 600 €/an (hors UE) ; année non précisée, « Rates are subject to change » (https://programmes.polytechnique.edu/en/bachelor/costs-and-funding/tuition-fees).
- Aides (https://programmes.polytechnique.edu/en/bachelor/costs-and-funding/scholarships-and-financial-aid) : admission « need-blind » ; bourse d'excellence de 4 800 € par an pendant 3 ans pour les admis « avec mention » ; bourse Women in Science du même montant ; bourse du Crous (exonération des frais plus aide à la vie, dès la première année pour les Français) ; aide institutionnelle partielle ; « aid is limited », donc candidater tôt si on en a besoin.
- Autres bachelors scientifiques comparables : aucun vérifié. Les pages de CentraleSupélec et de Mines Paris n'ont rien donné (404 ou blocage robots) ; ISAE-SUPAERO n'affiche pas de bachelor. Le nom de la fiche passe donc au singulier. Le brouillon laissait entendre que d'autres existent : à ajouter seulement si une source est trouvée.

## iep (seulement le lien, consigne)

- Lien : https://www.onisep.fr/formation/les-principaux-domaines-de-formation/les-iep-instituts-d-etudes-politiques (« Les IEP (instituts d'études politiques) » : Sciences Po Paris et dix autres IEP selon l'Onisep, dont sept associés pour le concours d'entrée en première année ; cursus de 5 ans en deux cycles).
- Remarque : l'Onisep compte onze IEP au total ; la fiche cite sept IEP du concours commun plus Bordeaux, Grenoble et Paris, soit dix. À recouper avec la vérification déjà faite par ailleurs.

## cesure (seulement le lien, consigne)

- Lien : https://www.service-public.gouv.fr/particuliers/vosdroits/F33072 (« Un étudiant peut-il faire une césure dans ses études ? » : un à deux semestres consécutifs, projet soumis au chef d'établissement qui apprécie sa qualité et sa cohérence, convention fixant les conditions de réintégration, d'accompagnement pédagogique et de validation des crédits).

## Section « Plus compliqué avec maths + physique-chimie » : proposition de textes

Vérifications (Onisep « Les prépas scientifiques », https://www.onisep.fr/formation/apres-le-bac-les-etudes-superieures/les-principales-filieres-d-etudes-superieures/les-cpge-classes-preparatoires-aux-grandes-ecoles/les-prepas-scientifiques et ses sous-pages ; concours vétérinaire post-bac : https://www.concours-veto-postbac.fr/, rapport 2026 https://www.concours-veto-postbac.fr/wp-content/uploads/2026/09/Rapport_Concours_ENVF_Public_2026_VD.pdf, FAQ https://support.concours-veto-postbac.fr/kb/faq.php?id=15 et ?id=18 ; Parcoursup https://www.parcoursup.gouv.fr/construire-son-projet-d-orientation/comment-choisir-vos-specialites-en-seconde-et-premiere-1619) :
- TSI : « destinée aux bacheliers STI2D et STL ». TPC : « conduit les bacheliers STL aux concours ». TB : « conduit les bacheliers STL et STAV aux concours » des écoles d'ingénieurs en sciences du vivant et des écoles vétérinaires. Formulé « conçues pour », car l'Onisep dit « destinée aux » et ne parle pas d'interdiction.
- ATS : « en 1 an, apportent aux étudiants ayant validé un BTS ou 2 (voire 3) années de BUT scientifique les compétences pour réussir en école d'ingénieurs ou vétérinaire ». Ce n'est donc pas une entrée après le bac.
- Vétérinaire post-bac : via Parcoursup (inscription du 19 janvier au 1er avril 2027, épreuves en avril 2027, résultats début juin), pour les terminales générales, STL et STAV ; quatre écoles (Alfort, VetAgro Sup, Oniris, ENVT) ; 1re année d'un cursus de 6 ans. Session 2026 : 280 places (70 par école), 3 815 candidatures confirmées, 851 admissibles, 280 admis (32,9 % des admissibles) ; admission sur 4 oraux et 3 QCM de 10 minutes chacun. Les écoles « ont clairement recommandé » SVT (ou biologie-écologie) avec physique-chimie ; la FAQ dit que pour la terminale « le choix des deux spécialités conservées parmi celles recommandées importe peu », que « toutes les autres spécialités sont acceptées » mais que c'est « une voie sélective qui exige de solides pré-requis ». Combinaisons du tableau XI du rapport 2026 : SVT + PC 48 à 51 %, PC + maths 32 à 38 %, SVT + maths 13 à 17 %.
- Licences : Parcoursup les classe parmi les formations non sélectives et précise qu'une formation « ne peut pas exiger une seule combinaison de spécialités et doit examiner toutes les candidatures ». Aucune source consultée ne décrit la difficulté d'une licence de biologie sans SVT : la phrase correspondante est une prudence, pas un fait.

Textes proposés (tutoiement, 1 à 2 phrases) :

1. **Prépas TSI, TPC et TB : pour les bacs technologiques.** Elles sont conçues pour les bacheliers STI2D et STL (TSI), STL (TPC), STL et STAV (TB). Avec un bac général maths + physique-chimie, tu vises plutôt MPSI, PCSI, PTSI ou MP2I.
2. **Prépa ATS : après un BTS ou un BUT, pas après le bac.** En un an, elle prépare les titulaires d'un BTS ou de 2 à 3 années de BUT scientifique aux écoles d'ingénieurs ou vétérinaires. Ce n'est donc pas une porte d'entrée après le bac, mais une passerelle possible si tu passes d'abord par un BTS ou un BUT.
3. **Études vétérinaires après le bac : possible sans SVT, mais exigeant.** Aucune spécialité n'est exigée et environ un tiers des candidats retenus en 2026 avaient maths + physique-chimie. Mais il y a 280 places pour 3 815 candidatures, et les écoles recommandent SVT ou biologie-écologie avec physique-chimie : sans SVT, il faudra combler la biologie par toi-même.
4. **Licence de biologie : ouverte à tous, à regarder de près.** Parcoursup interdit d'exiger une combinaison de spécialités : tu peux candidater en sciences de la vie avec maths + physique-chimie. Sans SVT, tu risques d'avoir des bases de biologie à rattraper : lis les attendus de la licence visée (point à confirmer).

## Points incertains (résumé)

1. ETH Zurich : conditions pour un bac français (dispense ou non de l'examen d'admission, notes minimales, niveau d'allemand) introuvables sur les pages consultées ; EPFL : deux pages se contredisent sur l'accès à l'examen d'admission pour un bachelier de l'UE sous 80 %.
2. Limites d'âge des recrutements d'officiers (22, 27 ou 30 ans selon les documents) ; solde des élèves-officiers vérifiée seulement pour Polytechnique ; deux montants différents pour un lieutenant sous contrat.
3. Frais de scolarité ENAC EPL : 1 500 €/an dans la notice EPL/U-EPL/P 2026 ; notice EPL/S 2026 introuvable ; le barème des tarifs est ambigu.
4. Vétérinaire : le tableau XI du rapport 2026 concerne probablement les admis, à confirmer ; licences de biologie sans SVT : aucune source sur la difficulté réelle.
5. Frais 2026-2027 de l'ENSM non publiés (1 600 €/an en 2025-2026) ; frais du Bachelor de l'X publiés sans année.
6. Onisep IEP : onze IEP annoncés, dix retrouvés dans la fiche (à recouper).

## Remarques pour le catalogue

- Aucune fiche à retirer. Aucune spécialité absente du combo maths + physique-chimie n'est exigée : ENSM (bac à dominante scientifique « fortement conseillé »), Polytechnique Montréal (maths plus PC, NSI, SI ou SVT), EPFL (maths et physique au meilleur niveau), concours vétérinaire (toutes spécialités acceptées).
- À ajouter si absente du catalogue : le concours vétérinaire post-bac (4 ENV, 280 places, Parcoursup), car il répond à la rubrique « Plus compliqué » ; une fiche « prépas TSI, TPC, TB » n'a pas de raison d'être pour un bac général.
- Polytechnique apparaît dans armees_off (cycle ingénieur de 4 ans) et dans bachelor_sci : vérifier que les fiches prépa / écoles d'ingénieurs des autres fichiers ne la répètent pas.
- Constantes de coût : `ING_PUB_COST` n'est plus utilisée dans cat_autre.js ; ENSM : environ 1 600 €/an (2025-2026).
