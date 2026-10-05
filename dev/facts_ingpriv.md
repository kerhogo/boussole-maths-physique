# Faits vérifiés : groupe « ingpriv » (écoles d'ingénieurs privées qui recrutent après le bac)

Fichier concerné : `cat/cat_ingpriv.js` (7 fiches : ing_aero, ing_gen, ing_num, ing_btp, ing_chimie, ing_agro, ing_app).
Date de vérification : 5 octobre 2026. Contexte : rentrée 2027, Parcoursup 2027.
Contrôle : `node dev/check_cat.js cat/cat_ingpriv.js` affiche « 7 fiches, 0 problèmes ».

Méthode et limites. Les pages ont été lues avec WebFetch, qui renvoie des résumés produits par un petit modèle : les chiffres clés ont été recoupés par des requêtes « recopie mot pour mot » ou par une deuxième source officielle. Le quota de WebSearch (200 par session, partagé avec les autres agents) a été épuisé en cours de route ; la fin de la vérification s'est faite en suivant les menus des sites officiels. Plusieurs sites sont bloqués ou illisibles (robots.txt, certificat, DNS) : concours-puissancealpha.fr, esitc-metz.fr, isen-ouest.yncrea.fr, franceagro3.fr, builders.fr, builders-ingenieur.fr, onisep.fr/recherche. Ce qui n'a pas pu être vérifié est dit explicitement plus bas.

---

## 1. Valeurs demandées pour le site (fourchette des frais)

Phrase proposée : « Une école privée (souvent 8 000 à 12 000 € par an pour une école d'ingénieurs) ».

Justification (statut étudiant, plein tarif, hors logement ; 2026-2027 sauf mention) :
- Bas de fourchette : ESCOM prépa 4 500 € ; ECAM prépas environ 5 100 à 5 300 € ; UniLaSalle prépa dès 5 500 € ; ISEN Méditerranée prépa 6 900 € ; ISA Junia 7 270 € (1re année) ; Junia prépa 7 722 € ; ESIGELEC prépa 7 800 €.
- Milieu : ELISA 8 400 € puis 9 200 € ; ESITC Paris 8 400 € ; ESIEE Paris 8 280 € puis 8 680 € ; EIGSI 8 800 € ; ISEP 9 000 € puis 10 850 € ; ECAM cycle ingénieur 9 040 € ; Icam cycle ingénieur 9 900 € ; ESTACA 10 130 € ; EPF 10 180 € ; ESME prépa 10 240 €.
- Haut de fourchette : IPSA 11 394 € ; ESILV 11 400 € ; ECE 11 990 € ; EFREI 12 000 € en fin de cycle ; ESME cycle ingénieur 12 290 € ; Sup'Biotech environ 12 600 € (2025-2026) ; EPITA 12 950 € (page libellée 2027-2028).
- Conclusion : la grande majorité des écoles se situe entre 8 000 et 12 000 € par an ; les extrêmes vérifiés sont environ 4 500 € (ESCOM, prépa) et environ 13 000 € (EPITA, cycle ingénieur). Sur 5 ans, cela donne un ordre de grandeur de 40 000 à 60 000 € (simple multiplication, à ne pas présenter comme un chiffre officiel).
- En apprentissage, l'élève ne paie pas les frais de formation (l'entreprise ou l'OPCO les prend en charge) et il est rémunéré ; en pratique cela commence en 3e année (IPSA, ESIEA, ESME, CESI, Icam, ESA, Purpan, EIGSI, ESIGELEC, EFREI), dès la 1re année de cycle ingénieur à l'ISEP.
- Frais de concours à ajouter si besoin : de 60 € (Geipi Polytech) à 130 € (Puissance Alpha) ; gratuité ou forte réduction pour les boursiers.

---

## 2. Concours post-bac 2027

Tous les concours ci-dessous passent par Parcoursup et comptent pour un seul vœu (« vœu multiple », parmi les 10 vœux autorisés), quel que soit le nombre d'écoles choisies.

### 2.1 Avenir (AvenirBac)
- Écoles membres (8, session 2027) : BUILDERS (Caen, Lyon), EBI (Cergy, Dijon ; elle rejoint le concours à partir de la session 2027), ECE (Paris, Lyon, Bordeaux, Rennes, Marseille), EIGSI (La Rochelle, Casablanca), EPF (Paris-Cachan, Troyes, Montpellier, Saint-Nazaire), ESIGELEC (Rouen, Poitiers), ESILV (Paris-La Défense, Nantes, Montpellier), ESTACA (Paris-Saclay, Laval, Bordeaux).
  Sources : https://www.concoursavenir.fr/ecoles-ingenieurs ; https://www.concoursavenir.fr/ ; arrivée d'EBI : https://lexpress-education.com/actualites/ebi-rejoint-concours-avenir/ (14 septembre 2026) et https://thotismedia.com/le-concours-avenir-poursuit-son-developpement-et-integre-lecole-des-bio-industries-des-biotechnologies-ebi/ ; EBI elle-même : https://www.ebi-edu.com/ (« à partir de 2027, l'EBI rejoint le Concours Avenir »).
- Terminale générale, « profil violet » : maths + une spécialité scientifique « quelle qu'elle soit » ; dossier 40 % et épreuves écrites 60 % ; trois QCU : maths 1 h 30 (45 questions parmi 60, coefficient 6), sciences 1 h (30 parmi 40, coefficient 4), anglais 30 min (45 questions, coefficient 2) ; les « grands classés » (dossiers les plus solides) sont dispensés des écrits et classés en tête.
  Source : https://www.concoursavenir.fr/avenir-bac/procedure-specifique-terminale-scientifique
- « Profil orange » (autres combinaisons de spécialités) et STI2D : dossier + entretien de motivation, sans épreuve écrite. Source : https://www.concoursavenir.fr/avenir-bac/procedure-terminale-sti2d
- Dates de la session 2027 publiées par le concours : entretiens (profil orange, STI2D) le samedi 10 avril 2027 ; épreuves écrites (profil violet) le samedi 17 avril 2027 ; convocations environ 15 jours avant ; réponses d'admission sur Parcoursup ; notes détaillées en juillet sur l'espace candidat.
- Frais de candidature : profil violet 120 € (30 € boursiers) ; profil orange et STI2D 75 € (15 € boursiers). Source officielle sans année affichée : https://www.concoursavenir.fr/avenir-bac/frais-de-candidature ; règlement « AvenirBac 2025/2026 » : https://www.concoursavenir.fr/assets/fichiers/reglements/AvenirBac_reglement.pdf ; ESTACA indique aussi 120 € (30 €) pour 2026. Un article de L'Express (31 juillet 2026) donne 170 € (50 €) pour la session 2026 : contradiction non résolue, je retiens les pages officielles.
- Places : 3 345 places au total en 2025/2026 (https://www.concoursavenir.fr/avenir-bac/affectations-dans-les-ecoles-dingenieurs). FAQ 2024-2025 : environ 11 000 candidats pour environ 2 700 places (https://www.concoursavenir.fr/avenir-bac/faq/).

### 2.2 Advance (Advance Post-Bac)
- Écoles membres (4) : EPITA, ESME, IPSA, Sup'Biotech. Terminales générales (spécialités scientifiques) et STL. Source : https://www.concours-advance.fr/admission-post-bac/presentation-concours-advance/ (page « Concours Advance Post-Bac 2026-2027 »).
- Épreuves : étude du dossier, QCM de mathématiques, QCM d'anglais, entretien de motivation ; les « grands classés » sont dispensés des écrits ; coefficients finaux : dossier 3, épreuves et oral 4, profil école 3. Les maths sont obligatoires sauf pour les grands classés ; les spécialités scientifiques reçoivent un bonus dès qu'il y en a au moins deux (FAQ : https://www.concours-advance.fr/admission-post-bac/faq-questions-concours-ecole-ingenieur/).
- Frais : 75 € ; gratuit pour les boursiers (page 2026-2027).
- Calendrier de l'édition 2027 (formulé ainsi sur la page) : inscription mi-janvier à mi-mars 2027 sur Parcoursup ; étude des dossiers mi-mars à début avril ; épreuves d'avril à début mai ; résultats début juin. La FAQ parle de « avril-mai 2027 » pour les écrits et les oraux.
- Places : environ 1 800 au total (EPITA 702 à 783 selon les pages, ESME environ 520, IPSA 400, Sup'Biotech 236 à 241) ; les pages ne donnent pas toutes le même total.

### 2.3 Puissance Alpha (concours Puissance Alpha Ingénieurs Bac+5)
- Écoles membres (17, site officiel, édition 2027) : 3iL Ingénieurs, CPE Lyon, EFREI, ELISA Aerospace, ESAIP, ESCOM Chimie, ESEO, ESIEA, ESIEE Paris, ESITC Metz, ESITC Paris, ESTBB, ESTIA, ISEN Méditerranée, ISEN Ouest, ISEP, JUNIA (HEI et ISEN). EBI ne figure plus dans la liste 2027 (elle passe à Avenir). Source : https://www.puissance-alpha.fr/ (titre « Puissance Alpha 2027 »). Des articles plus anciens parlent de 19 écoles.
- Évaluation : dossier 50 % et trois épreuves écrites 50 % : maths 1 h 30, sciences appliquées 1 h (physique-chimie, SVT, NSI ou SI selon le profil), anglais 45 min ; « grands classés » dispensés des écrits. Profils : « 2 sciences » (maths + une spécialité scientifique), « 1 science », techno (STI2D, STL). L'ELISA précise que le profil « 1 science » seul n'est pas accepté chez elle (https://www.elisa-aerospace.fr/admission-cycle-prepa/).
- Frais : 130 € (15 € boursiers) pour la session 2026 (https://www.elisa-aerospace.fr/admission-cycle-prepa/ ; https://www.escom.fr/formation/admissions-classes-preparatoires/ ; L'Express). Tarif 2027 non publié.
- Date : épreuves écrites le samedi 24 avril 2027 (site officiel) ; en 2026 elles avaient lieu le samedi 25 avril.
- Points négatifs : les sources se contredisent (L'Express : « pas de pénalité » ; Groupe Réussite, ESCOM : QCU avec points négatifs). Rien d'affirmé dans le catalogue.

### 2.4 Geipi Polytech (concours d'écoles PUBLIQUES, hors périmètre de ce fichier)
- 35 écoles d'ingénieurs publiques (réseau Polytech, ISAT Nevers, ENSIBS, ESIR, etc.), 3 922 places, toutes accréditées CTI. Sources : https://www.geipi-polytech.org/terminale-generale-scientifique-integrez-une-ecole-dingenieurs-apres-le-bac/ ; https://www.geipi-polytech.org/les-ecoles-du-concours-geipi-polytech/
- Terminale générale : maths + une spécialité scientifique recommandées (le règlement 2026 parle de « 2 enseignements de spécialité scientifique ») ; dossier (notes de 1re et terminale en maths, physique-chimie, français, anglais, spécialités) puis épreuve écrite de 3 h sans calculatrice : QCM de maths (1 h) + deux sujets au choix parmi maths, physique-chimie, NSI, SVT, sciences de l'ingénieur (1 h chacun). « Aucun candidat ne sera éliminé suite à l'étude de dossier. »
- Frais : 60 €, exonération pour les boursiers (règlement 2026 : https://www.geipi-polytech.org/wp-content/uploads/2026/01/Reglement-Concours-GP-General-2026.pdf).
- Dates : épreuve écrite le mercredi 28 avril 2027 (après-midi) ; inscription Parcoursup et résultats : « dates à venir ». Session 2026 : inscriptions du 19 janvier au 12 mars, écrit le 28 avril, résultats à partir du 2 juin.

### 2.5 Parcoursup 2027
Le calendrier officiel 2027 n'est pas encore publié : https://www.parcoursup.gouv.fr/calendrier affiche toujours 2026 (ouverture du site le 17 décembre 2025, vœux du 19 janvier au 12 mars 2026, confirmation avant le 1er avril, réponses à partir du 2 juin 2026). Un site non officiel (avis-parents.com) annonce pour 2027, à titre indicatif : information mi-décembre 2026, vœux de mi-janvier à mi-mars 2027, confirmation début avril, phase principale début juin 2027 ; le ministère doit confirmer fin 2026.

### 2.6 Hors concours : sélection sur dossier et entretien via Parcoursup
ECAM LaSalle (entretien collectif), CESI (dossier + oral), Icam (dossier + deux entretiens), UniLaSalle (entretien de 20 min), ESA (entretien de motivation), Purpan et ISA Junia (procédure commune France Agro3, entretien), ESCOM (prépa intégrée en accès direct, en plus de Puissance Alpha). Frais de dossier donnés à titre d'ordre de grandeur par un site secondaire de janvier 2025 (à ne pas reprendre tel quel) : France Agro3 90 €, CESI 50 €, Icam 150 €, ECAM 90 €.

### 2.7 Proposition pour le calendrier du site (« Les prochaines étapes »)
- « Mi-décembre 2026 à mi-mars 2027 : inscription et vœux sur Parcoursup (dates officielles à confirmer) ; chaque concours d'écoles d'ingénieurs post-bac (Avenir, Puissance Alpha, Advance, Geipi Polytech) ne compte que pour un vœu. »
- « Avril 2027 : épreuves des concours : Avenir (entretiens le 10 avril, écrits le 17 avril), Puissance Alpha (24 avril), Geipi Polytech (28 avril), Advance (avril à début mai) ; réponses sur Parcoursup à partir de début juin. »
(Les dates Avenir, Puissance Alpha et Geipi 2027 sont celles publiées par les concours ; les dates Parcoursup 2027 et le jour des réponses sont des estimations d'après 2026.)

---

## 3. Fiche par fiche

### ing_aero : aéronautique, spatial, automobile (ESTACA, IPSA, ELISA Aerospace)
Lien retenu : https://www.estaca.fr/admissions/terminales/ (libellé « ESTACA »). Aucune fiche Onisep trouvée (trois adresses testées : 404).

ESTACA
- Campus : Paris-Saclay (Saint-Quentin-en-Yvelines), Laval, Bordeaux. Source : https://www.estaca.fr/ et plaquette https://www.estaca.fr/wp-content/uploads/Documentation/26-EST-Plaquette-Generale-FINALE-bd.pdf
- Cinq filières : spatial, aéronautique, automobile, ferroviaire, naval (le brouillon oubliait le naval). Par campus : Paris-Saclay = spatial, aéronautique, automobile, ferroviaire ; Laval = aéronautique, automobile, naval ; Bordeaux = aéronautique, automobile, spatial (le spatial et l'automobile y ouvrent en 3e et 4e année en admissions parallèles aux rentrées 2027 et 2028 selon un article). Source : https://estaca.fr/actualites/1-ecole-3-sites-les-filieres-a-lestaca-comme-choisir-et-quand (14 janvier 2026).
- Structure : 5 ans, années 1 et 2 en tronc commun (chaque campus y enseigne toutes les filières), choix de la filière « en fin d'année » de 1re année après une initiation, spécialisation en années 3 à 5 (même article et plaquette). Le brouillon laissait croire que le domaine est connu dès la 1re année : corrigé.
- Admission post-bac : concours Avenir via Parcoursup ; « Mathématiques et une 2e spécialité scientifique » (physique-chimie, SVT, SI, NSI) ; 520 places en 1re année en 2026 dont 24 STI2D (https://www.estaca.fr/admissions/) ; rapport CTI de 2025 : Avenir = environ 70 % des places (https://www.cti-commission.fr/wp-content/uploads/2025/04/estaca_versailles_rmad_202501.pdf).
- Frais : « Les frais de scolarité s'élèvent pour l'année 2026-2027 à 10 130 € », hors cotisation au Bureau des élèves (https://www.estaca.fr/admissions/frais-de-scolarite-financement/). Aucune modulation selon les revenus ; aides : bourses CROUS, 900 € de mérite pour mention très bien, etc.
- Apprentissage : deux formations de 3 ans en contrat d'apprentissage, ouvertes après un bac+1, bac+2 ou bac+3 et non directement après le bac : « Véhicules, systèmes autonomes et connectés » (Paris-Saclay, CFA Mécavenir) et « Génie industriel pour l'aéronautique et l'espace » (Laval, ITII Pays de Loire, ouverte en septembre 2025, accessible avec BUT 3, licence scientifique ou prépa ATS, contrat signé avant la rentrée). Sources : https://www.estaca.fr/actualites/nouvelle-formation-ingenieur-apprentissage-aeronautique-spatial/ ; https://www.estaca.fr/admissions/apres-classes-prepa/
- Rentrée décalée « SPID'ESTACA » (février, bac+1) : 6 770 €, via AvenirPlus.
- Titre d'ingénieur habilité par la CTI (rapport CTI ci-dessus). Débouchés (plaquette 2026) : 47 % en recherche et développement, 20 % production-qualité-maintenance, 83 % en activité avant le diplôme, salaire moyen d'embauche 44 000 € primes comprises ; employeurs cités : Airbus Atlantic, Dassault Aviation, Safran, ArianeGroup, Renault, Stellantis, Alstom, Naval Group.
- Stages et international : « 12 mois de stages obligatoires », « une expérience internationale obligatoire » (plaquette).

IPSA (Institut polytechnique des sciences avancées)
- Concours Advance (400 places). Trois campus : Paris-Ivry, Lyon, Toulouse. « École d'ingénieurs de l'air, de l'espace et des mobilités ». Sources : https://www.concours-advance.fr/ipsa/ ; https://www.ipsa.fr/
- Plaquette ingénieur 2026 : « Années 1 à 5 : 11 394 € / an » (2026-2027) ; rentrée décalée 6 141 € ; apprentissage « dès la 1re année de cycle ingénieur » (années 3 à 5, rythme 3 semaines école / 3 semaines entreprise), 12 240 € par an financés par l'entreprise ; 10 majeures ; « spécialités recommandées : mathématiques, physique-chimie, sciences de l'ingénieur ; l'option mathématiques expertes est fortement conseillée ». Source : https://www.ipsa.fr/wp-content/uploads/2025/10/IPSA-26-PLAQUETTE-INGENIEUR.pdf
- Diplôme habilité CTI ; fiche Onisep : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-institut-polytechnique-des-sciences-avancees (confirme 11 394 € et les trois campus).

ELISA Aerospace
- Concours Puissance Alpha via Parcoursup (130 €, 15 € boursiers) ; bacs généraux « 2 sciences », STI2D, STL ; profil « 1 science » seul non accepté ; 2026 : 70 places à Hauts-de-France (Saint-Quentin) et 90 à Bordeaux (Saint-Jean-d'Illac). Source : https://www.elisa-aerospace.fr/admission-cycle-prepa/
- Spécialités : « nous vous préconisons de conserver la spécialité Mathématiques + une spécialité scientifique au choix parmi : Sciences de l'ingénieur ou Physique-Chimie » (https://www.elisa-aerospace.fr/choix-des-specialites/).
- Frais 2026-2027 : 8 400 € par an en cycle préparatoire intégré et 9 200 € en cycle ingénieur, dont 700 € de frais d'inscription ; cotisation associative 100 € ; bachelor Drones et mécatronique 6 600 € (https://www.elisa-aerospace.fr/frais-de-scolarite-et-informations-pratiques/). Un site secondaire (Groupe Réussite, décembre 2025) donnait 7 990 € et 8 990 € : ancienne année.
- Structure : 2 ans de prépa intégrée + 3 ans de cycle ingénieur ; trois spécialités en 4e année : systèmes aéronautiques, missiles et systèmes spatiaux, drones et systèmes autonomes collaboratifs ; stage de découverte en fin de 1re année ; 16 semaines à l'étranger au 1er semestre de la 4e année ; diplôme CTI (https://www.elisa-aerospace.fr/cursus-ingenieur/). Aucune mention d'apprentissage dans le cursus ingénieur.

Autres écoles examinées
- ISAE-Supméca : ne recrute pas après le bac (concours après prépa, DUT, ATS ou BTS) ; ISAE-SUPAERO : aucune formation post-bac trouvée sur le site ; ISAE-ENSMA : voie post-bac non confirmée. ISAT Nevers (transports et automobile) est une école publique recrutée par Geipi Polytech : à voir dans le fichier ingpub, pas ici. Conclusion : pas d'autre école privée post-bac en aéro, spatial ou auto à ajouter.

Corrections apportées : coût 9 000-10 500 → 8 400 à 11 400 (ESTACA 10 130) ; `alt` 0,4 → 0,3 (l'apprentissage n'est pas accessible directement après le bac à l'ESTACA, il l'est dès le cycle ingénieur à l'IPSA seulement) ; domaines de l'ESTACA (naval ajouté, ferroviaire déjà là, domaine choisi en fin de 1re année) ; concours précisés dans `selNote` ; la phrase « sans concours en fin de 2e année » a disparu.
Incertain : dates d'ouverture et filières exactes du campus de Bordeaux (plaquette : 2021 ; rapport CTI : depuis 2022, bâtiment dédié en 2025 ; article : ouverture à la rentrée 2025 ; les pages se contredisent), donc le catalogue ne cite pas Bordeaux.

### ing_gen : généralistes privées (EPF, ESILV, ESME, ECE, EIGSI, ESIGELEC, Junia HEI, ECAM)
Lien retenu : fiche Onisep EPF https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-epf (confirme : 5 ans après un bac général ou technologique, CTI, grade de master, campus Troyes, Montpellier, Paris-Cachan, Saint-Nazaire).

Recrutement après le bac, école par école :
- EPF, ESILV, ECE, EIGSI, ESIGELEC : concours Avenir (liste officielle).
- ESME : concours Advance (pas Avenir : le brouillon de l'agent précédent aurait pu le laisser croire, ESME n'est pas dans Avenir) ; 4 campus de 1re année (Paris, Bordeaux, Lille, Lyon) ; au moins une spécialité scientifique, maths expertes ou complémentaires conseillées si pas de maths ; apprentissage en 3e année. Source : https://www.esme.fr/formation-ingenieur/ecole-ingenieur-post-bac/
- Junia HEI : Puissance Alpha, via le cycle préparatoire intégré Adimaker (2 ans, Lille et Bordeaux) puis cycle ingénieur HEI ou ISEN ; spécialités conseillées : maths + une spécialité scientifique (physique-chimie, SVT, NSI ou SI). Le cycle ingénieur HEI seul est un cursus de 3 ans après bac+2. Sources : https://www.junia.com/fr/formations-admissions/comment-integrer-ecole-ingenieurs/ ; https://groupe-reussite.fr/ressources/cs-integrer-hei-concours-puissance-alpha/ ; fiche Onisep Adimaker.
- ECAM LaSalle : pas de concours, Parcoursup, dossier et entretien collectif ; « mathématiques puis physique et/ou SI fortement recommandées » ; test d'anglais B2 pour ECAM Engineering ; prépas à Lyon, Bordeaux, Annonay, Nîmes, Rueil-Malmaison, Reims puis cycle ingénieur à Lyon sans concours supplémentaire. Sources : https://www.ecam.fr/faq-admission-ecam-post-bac/ ; https://www.ecam.fr/formation/ingenieur-generaliste-arts-et-metiers/

Frais 2026-2027 :
- EPF 10 180 € (Troyes et Saint-Nazaire : 9 160 € en 1re année puis 9 928 €) : https://www.epf.fr/droits-scolarite-financements
- ESILV 11 400 € : https://www.esilv.fr/admissions/tarifs-et-financement/
- ECE 11 990 € (système éducatif français), 12 990 € sinon : https://www.ece.fr/en/tuition-fees/
- EIGSI 8 800 € dont 1 500 € de frais d'inscription : https://www.eigsi.fr/admission-ecole-ingenieur/cout-de-la-scolarite/
- ESME 10 240 € (INGÉ SUP et SPE) puis 12 290 € : https://www.esme.fr/formation-ingenieur/tarifs-financement/
- ESIGELEC 7 800 € (prépa) puis 8 280 € : https://www.esigelec.fr/fr/frais-de-scolarite
- Junia : prépa 7 722 € ; HEI et ISEN 8 775 € puis 9 527 € : https://www.junia.com/fr/formations-admissions/frais-de-scolarite/
- ECAM : prépas 5 100 à 5 300 € ; cycle ingénieur 9 040 € : https://www.ecam.fr/formation/ingenieur-generaliste-arts-et-metiers/
- Fourchette retenue : « souvent 8 000 à 12 000 € » avec la mention des prépas de l'ECAM moins chères.

Modulation et aides (voir aussi section 5) : aucune grille selon les revenus des parents chez les écoles vérifiées, sauf l'ECAM pour la prépa de Rueil-Malmaison ; réductions pour boursiers CROUS à l'EPF (20 %), l'ESILV (5 à 30 %), l'ESIGELEC (25 % en prépa).

Corrections : coût 7 500-10 500 → « souvent 8 000 à 12 000 € » ; la phrase « certaines écoles modulent selon les revenus des parents » est remplacée par « plusieurs écoles réduisent les frais des élèves boursiers » (seule chose vérifiée) ; concours précisés ; ESIGELEC et ECE ajoutées au `nom`, Junia HEI, ECAM LaSalle, ECE Paris et « école d'ingénieurs généraliste » aux alias.

### ing_num : numérique et électronique (EPITA, EFREI, ESIEA, ISEP, ESIEE Paris, ISEN)
Lien retenu : fiche Onisep EFREI https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-d-efrei-paris (confirme : 5 ans après bac général ou technologique, CTI, grade de master, campus Villejuif et Bordeaux).
- EPITA : concours Advance (inscription 75 €) ; maths obligatoires + une spécialité scientifique (« NSI si disponible ») ; « Option Mathématiques expertes (recommandé) » ; sept sites dans cinq villes (Paris, Lyon, Rennes, Strasbourg, Toulouse) ; 5 ans (2 + 3) ; apprentissage en 3e ou 4e année ; CTI et EUR-ACE. Sources : https://www.epita.fr/diplome-ingenieur/admission-post-bac/ ; https://www.epita.fr/programme-ingenieur-rncp/
- EFREI : Puissance Alpha (Villejuif, Bordeaux), prépas intégrées de 2 ans, filières en apprentissage ; CTI. https://www.efrei.fr/admission/admissions-programme-grande-ecole/
- ESIEA : Puissance Alpha (Paris, Ivry, Laval) ; apprentissage à partir de la 3e année ; CTI. https://www.esiea.fr/admissions-programme-ingenieur-cti/
- ISEP : Puissance Alpha ; au moins une spécialité scientifique ; apprentissage dès la 1re année de cycle ingénieur. https://www.isep.fr/admissions/admission-post-bac/
- ESIEE Paris : Puissance Alpha ; Champs-sur-Marne. https://www.esiee.fr/fileadmin/user_upload/Fichiers/brochures/brochure-admissions-esiee-paris-2026.pdf
- ISEN : ISEN Méditerranée (Toulon, Marseille) et ISEN Ouest dans Puissance Alpha ; Junia ISEN via Junia (voir ing_gen). CTI pour ISEN Méditerranée.
- Frais 2026-2027 : EFREI 10 000 € (P1), 11 000 € (P2 et ING1), 12 000 € (ING2 et ING3) ; ISEP 9 000 € puis 10 850 € ; ESIEE Paris 8 280 € puis 8 680 € ; ISEN Méditerranée 6 900 € puis 9 100 € ; ESIEA Laval 9 000 € puis environ 10 700 à 10 900 € ; EPITA 10 350 € puis 12 950 € (page libellée 2027-2028) ; Junia ISEN 7 722 € puis 8 775 et 9 527 €. Fourchette : environ 7 000 à 13 000 €.
- Epitech : diplôme d'« Expert(e) en technologies de l'information visé par le ministère de l'Enseignement supérieur », sans mention de la CTI ni de titre d'ingénieur sur ses pages (https://www.epitech.eu/programme-grande-ecole/). La mention de « 42 » du brouillon a été retirée : non vérifiée.
- CPE Lyon a aussi un diplôme d'ingénieur « sciences du numérique » (électronique, télécoms, informatique, cybersécurité) : https://www.cpe.fr/formations/ ; l'école est rattachée à ing_chimie dans le catalogue.
Corrections : coût 8 000-11 000 → environ 7 000 à 13 000 € ; `duree` détaillée ; concours précisés ; ESIEE Paris ajoutée ; mention d'EPITA qui recommande les maths expertes.

### ing_btp : bâtiment et travaux publics (ESITC Paris, ESITC Metz, BUILDERS)
Lien retenu : https://www.esitc-paris.fr/fr/admissions/formation-ingenieur-admission-post-bac (libellé « ESITC Paris »). Aucune fiche Onisep ESITC trouvée.
- ESITC Paris : Puissance Alpha via Parcoursup ; cursus de 5 ans avec phase préparatoire intégrée (et 3 ans pour les bac+2) ; campus d'Arcueil et d'Égletons ; « 55 places maximum » en 2026 ; « mathématiques et physique » conseillées au lycée ; BIM, construction durable, énergies renouvelables, réseaux et infrastructures ; titre CTI. Frais : « 8 400 € par an, sur une durée de 5, 4 ou 3 ans », tarifs « garantis fixes » pendant toute la durée ; apprentissage : coût de formation 11 600 € pris en charge par l'OPCO et l'entreprise (https://www.esitc-paris.fr/fr/formations/financer-ses-etudes).
- ESITC Metz : membre de Puissance Alpha (liste officielle 2027) ; site illisible (robots.txt), rien d'autre vérifié.
- BUILDERS (anciennement ESITC Caen, d'après le site ESITC Caen, qui parle d'« une entrée sur concours ») : membre d'Avenir, campus de Caen et Lyon ; frais non trouvés.
- ESTP : ne recrute pas directement en cycle ingénieur après le bac. Le site de l'école présente le diplôme d'ingénieur comme un cursus de 3 ans avec entrée en 1re année après une prépa (concours Centrale-Supélec, ENSAM, ENSEA) ou après une licence (« admissions sur titres »), et les bachelors de 3 ans (8 000 €, rentrée de septembre 2026, grade de licence) comme une voie vers le cycle ingénieur « sur sélection ». Cycle ingénieur : 9 950 € (rentrée de septembre 2026). Sources : https://www.estp.fr/en/formations/graduate-school-of-engineering-programme/ ; https://www.estp.fr/en/formations/bachelor-in-science-and-engineering-architecture-and-construction/ ; https://www.estp.fr/en/admissions-how-apply-our-engineering-training-and-bac-23. Contradiction : la fiche Onisep de l'ESTP indique encore « après un bac général ou technologique (cursus de 5 ans) ». Je suis le site de l'école (confiance d'environ 80 %).
Corrections : l'ESTP est sortie du `nom` (reste en alias, avec une explication dans `mpc`) ; ESITC Paris, ESITC Metz et BUILDERS ajoutées ; coût 8 000-10 500 → 8 400 € à l'ESITC Paris ; l'affirmation « Le BTP recrute beaucoup, y compris en apprentissage » (non vérifiée) a été retirée.

### ing_chimie : chimie et biotechnologies (ESCOM, CPE Lyon, Sup'Biotech, EBI)
Lien retenu : https://www.escom.fr/formation/admissions-classes-preparatoires/ (libellé « ESCOM »). La fiche Onisep de l'ESCOM décrit seulement le cycle de 3 ans après bac+2 : écartée.
- ESCOM (Compiègne) : 5 ans (prépa intégrée 2 ans + cycle ingénieur 3 ans) ; Puissance Alpha (130 €, 15 € boursiers) ou classes préparatoires intégrées en accès direct ; « 1 ou 2 spécialités scientifiques » parmi maths, physique-chimie, SVT, SI, NSI ; dossier 50 % + écrits 50 % ; épreuves le 25 avril 2026 ; CTI ; alternance possible (« ingénieur chimiste en alternance »). Frais 2026-2027 : 4 500 € par an en prépa, 7 750 € en cycle ingénieur, gratuit en apprentissage ; environ 30 % des élèves reçoivent une aide ; association à but non lucratif (https://www.escom.fr/formation/comment-financer-vos-etudes/).
- CPE Lyon : Puissance Alpha et concours commun INP ; 5 ans après le bac (2 ans de prépa + 3 ans) ; chimie-génie des procédés et sciences du numérique ; EESPIG (privé à but non lucratif) ; CTI (https://www.cpe.fr/formation-chimie/genie-des-procedes/ingenieur-chimiste/). Frais non trouvés.
- Sup'Biotech : Advance ; Paris-Villejuif et Lyon ; spécialités : « Mathématiques et SVT » ou « Mathématiques et Physique-Chimie » ou « Physique-Chimie et SVT plus option Mathématiques complémentaires » (https://www.supbiotech.fr/admissions-ecole-ingenieur/post-bac/) ; apprentissage possible dès la 3e année ; CTI. Frais 2025-2026 : années 1-2 : 990 + 8 777 + 170 € de frais annexes (environ 9 940 €) ; années 3-5 : 990 + 11 402 + 190 € (environ 12 580 €) ; la page officielle précise l'absence de modulation selon les revenus et renvoie à un PDF 2026-2027 que je n'ai pas pu lire (https://supbiotech.fr/wp-content/uploads/SUPBIO-TARIFS-A4-2025-2026-HD.pdf).
- EBI (Cergy, Dijon) : rejoint Avenir dès la session 2027 (sources en 2.1) ; prépa intégrée de 2 ans ; CTI ; tableau des frais 2026-2027 présent sur le site mais sous forme d'image, illisible (https://www.ebi-edu.com/frais-de-scolarite-financement-etudes-ebi/).
Corrections : coût 7 000-10 000 → « très variable » avec les montants vérifiés ; CPE Lyon ajoutée ; concours précisés (EBI : Avenir dès 2027) ; la phrase du brouillon « sans SVT, prévois de rattraper » est remplacée par les spécialités réellement citées par les écoles.

### ing_agro : agronomie et environnement (UniLaSalle, ISA Junia, ESA, Purpan)
Lien retenu : fiche Onisep ISA Junia https://www.onisep.fr/ressources/univers-formation/formations/post-bac/diplome-d-ingenieur-de-l-institut-superieur-d-agriculture-junia (page existante ; confirme CTI, grade de master, campus de Lille ; le texte générique y indique aussi « après un bac général ou technologique (cursus en 5 ans) »).
- Admission : sur Parcoursup, dossier + entretien de motivation, sans concours écrit ; UniLaSalle : dossier puis entretien oral de 20 min sur un des quatre campus (Amiens, Beauvais, Rennes, Rouen), https://www.unilasalle.fr/candidature-post-bac ; ESA (Angers) : https://www.groupe-esa.com/postuler-a-lesa/apres-un-bac/ ; Purpan et ISA : procédure commune France Agro3 (avec ISARA), entretien, 90 € de frais de dossier (page Purpan, https://www.purpan.fr/candidature/) ; ISA : entretien 40 % + dossier 60 % (https://www.junia.com/fr/formations-admissions/comment-integrer-ecole-ingenieurs/).
- SVT : jamais exigée dans les pages officielles lues. ESA : « au minimum 1 spécialité scientifique en terminale. Les mathématiques, en spécialité ou en option, sont fortement recommandées » ; Purpan : « nous recommandons de conserver une matière scientifique en Terminale » et valorise les profils variés ; UniLaSalle : page sur les spécialités illisible (404), prépas ouvertes aux bacs généraux ; Junia ISA : pas de recommandation de spécialités sur les pages lues. Le brouillon disait « la SVT est fortement conseillée » : non soutenu, `conseil: ["svt"]` retiré.
- Structure : UniLaSalle 2 ans de prépa intégrée (3 prépas : Terre-vivant-environnement à Beauvais, Rennes, Rouen ; Life and Environmental Sciences à Rouen ; Énergie-Numérique à Amiens) puis 3 ans ; ESA 3 ans + 2 ans ; Purpan 3 ans de tronc commun + 2 ans ; ISA 2 ans de prépa + 3 ans. UniLaSalle forme aussi en géosciences et en énergie-numérique (cinq diplômes d'ingénieur).
- Frais 2026-2027 : UniLaSalle prépa 5 500 à 8 500 € selon le programme, cycle ingénieur 7 900 à 8 500 € (https://www.unilasalle.fr/frais-de-scolarite-et-aides-financieres) ; ISA 7 270 € (1re année) puis 9 527 € ; ESA 7 566 € (cycle L) et 8 118 € (cycle M), tarif « à titre indicatif » (https://www.groupe-esa.com/formation/ingenieur-agronome/) ; Purpan 7 700 € en 2025-2026 « révisables chaque année ». Aucune modulation selon les revenus trouvée.
- Apprentissage : ESA à partir de la 3e année ; Purpan à partir de la 3e année (3, 2 ou 1 an) ; ISA : en alternance « à certains moments du parcours » ; UniLaSalle : cinq diplômes proposés en alternance (années non précisées).
Corrections : coût 6 500-9 000 → 5 500 à 9 500 € et suppression de « souvent modulés selon les revenus des parents » (non vérifié) ; `conseil` « svt » retiré ; `duree` « 5 ans (2 + 3 ou 3 + 2) » ; `selNote` ajouté ; la mention « le plus souvent associatives » (non vérifiée) a été retirée de `desc`.

### ing_app : tournées vers l'apprentissage (CESI, Icam)
Lien retenu : https://www.cesi.fr/programmes/cursus-ingenieur-5-ans/ (libellé « CESI ») ; l'adresse Onisep Icam testée donne 404.
- CESI : cursus de 5 ans (cycle préparatoire intégré de 2 ans puis cycle ingénieur de 3 ans), accès direct au cycle ingénieur à l'issue de la prépa ; Parcoursup, dossier + oral (actualité, culture générale, motivation), pas de concours écrit ; bac général scientifique ou STI2D ; frais de candidature 50 € ; 24 campus ; « l'alternance est ensuite possible à partir de la troisième année » ; CTI. Frais 2026-2027 : 6 500 € par an en prépa intégrée, 8 500 € en cycle ingénieur. Sources : https://www.cesi.fr/admissions/cursus-ingenieur-5-ans/ ; https://www.cesi.fr/programmes/cycle-preparatoire-integre/
- Icam : 7 campus (Grand Paris Sud, Lille, Nantes, Bretagne, Vendée, Toulouse, Strasbourg-Europe) ; Parcoursup, dossier + deux entretiens (mi-avril à début mai 2027), sans concours écrit ; prépa scientifique de 2 ans (maths + une spécialité scientifique, ou physique + SI + maths complémentaires) ; autres prépas de 2 à 4 ans ; passage en cycle ingénieur « sur contrôle continu, sans concours » ; statut étudiant 9 900 € par an ; statut apprenti gratuit (contribution à la vie collective de 620 € par an, libellée 2027/2028), 3 ans ou 2 ans à partir de la 4e année ; alternance de 1 mois/1 mois en année 3 jusqu'à 6 mois/6 mois en année 5. Sources : https://www.icam.fr/formations/enseignement-superieur/admissions-inscriptions/ ; https://www.icam.fr/formations/enseignement-superieur/cycles-preparatoires-ingenieurs/ ; https://www.icam.fr/formation/formation-ingenieur-icam-sous-statut-etudiant/ ; https://www.icam.fr/formation/formation-ingenieur-icam-sous-statut-apprenti/. Frais de la prépa Icam : non trouvés.
Corrections : `cout` précisé (6 500 € puis 8 500 à 9 900 €) ; `duree` « dont 3 possibles en apprentissage » (le brouillon disait « souvent 3 ») ; `selNote` ajouté ; l'affirmation « souvent embauché par l'entreprise d'apprentissage » (non vérifiée) a été retirée de `apres`.

---

## 4. Tableau des frais annuels (statut étudiant, plein tarif)

| École | Prépa (années 1-2) | Cycle ingénieur (années 3-5) | Année | Source |
|---|---|---|---|---|
| ESTACA | 10 130 € | 10 130 € | 2026-2027 | estaca.fr/admissions/frais-de-scolarite-financement |
| IPSA | 11 394 € | 11 394 € | 2026-2027 | plaquette ingénieur 2026 |
| ELISA Aerospace | 8 400 € | 9 200 € | 2026-2027 | elisa-aerospace.fr/frais-de-scolarite-et-informations-pratiques |
| EPF | 10 180 € | 10 180 € | 2026-2027 | epf.fr/droits-scolarite-financements |
| ESILV | 11 400 € | 11 400 € | 2026-2027 | esilv.fr/admissions/tarifs-et-financement |
| ECE | 11 990 € | 11 990 € | 2026-2027 | ece.fr/en/tuition-fees |
| EIGSI | 8 800 € | 8 800 € | 2026-2027 | eigsi.fr/admission-ecole-ingenieur/cout-de-la-scolarite |
| ESME | 10 240 € | 12 290 € | 2026-2027 | esme.fr/formation-ingenieur/tarifs-financement |
| ESIGELEC | 7 800 € | 8 280 € | 2026-2027 | esigelec.fr/fr/frais-de-scolarite |
| Junia (HEI, ISEN) | 7 722 € | 8 775 € puis 9 527 € | 2026-2027 | junia.com/fr/formations-admissions/frais-de-scolarite |
| ECAM LaSalle | 5 100 à 5 300 € (Rueil : 3 700 à 5 920 €) | 9 040 € | 2026-2027 | ecam.fr/formation/ingenieur-generaliste-arts-et-metiers |
| EPITA | 10 350 € | 12 950 € | page 2027-2028 | epita.fr/tarifs-et-financement |
| EFREI | 10 000 € puis 11 000 € | 11 000 € puis 12 000 € | 2026-2027 | efrei.fr/financer-ses-etudes |
| ESIEA (Laval) | 9 000 € | 10 700 à 10 900 € | 2026-2027 et 2027-2028 | esiea.fr |
| ISEP | 9 000 € | 10 850 € | 2026-2027 | isep.fr/frais-de-scolarite-et-aide-au-financement |
| ISEN Méditerranée | 6 900 € | 9 100 € | 2026-2027 | isen-mediterranee.fr/en/admissions-frais-dinscription |
| ESIEE Paris | 8 280 € | 8 680 € | 2026-2027 | brochure admissions 2026 |
| ESITC Paris | 8 400 € | 8 400 € | 2026-2027 | esitc-paris.fr/fr/formations/financer-ses-etudes |
| ESCOM | 4 500 € | 7 750 € | 2026-2027 | escom.fr/formation/comment-financer-vos-etudes |
| Sup'Biotech | environ 9 940 € | environ 12 580 € | 2025-2026 | supbiotech.fr tarifs 2025-2026 |
| UniLaSalle | 5 500 à 8 500 € | 7 900 à 8 500 € | 2026-2027 | unilasalle.fr/frais-de-scolarite-et-aides-financieres |
| ISA Junia | 7 270 € (1re année du cycle) | 9 527 € | 2026-2027 | junia.com (frais) |
| ESA | 7 566 € (cycle L, 3 ans) | 8 118 € (cycle M, 2 ans) | 2026-2027, indicatif | groupe-esa.com/formation/ingenieur-agronome |
| Purpan | 7 700 € | 7 700 € | 2025-2026 | purpan.fr/candidature |
| CESI | 6 500 € | 8 500 € | 2026-2027 | cesi.fr/admissions/cursus-ingenieur-5-ans |
| Icam | non trouvé | 9 900 € | non daté | icam.fr (statut étudiant) |
| ESTP (bachelor puis ingénieur) | bachelor 8 000 € | 9 950 € | rentrée septembre 2026 | estp.fr |
| Non trouvés | EBI (tableau en image), CPE Lyon, ESITC Metz, BUILDERS | | | |

Apprentissage (frais payés par l'entreprise) : IPSA 12 240 € par an, EFREI 14 800 €, EIGSI 10 500 €, ESA 14 400 €, ESITC Paris 11 600 € : c'est le coût de formation facturé à l'employeur, pas à l'élève.

---

## 5. Modulation des frais selon les revenus des parents

- Seul cas de grille selon les revenus de la famille trouvé : prépa de l'ECAM à Rueil-Malmaison (3 700 à 5 920 €, « modulé selon revenus familiaux »), ECAM 2026-2027.
- Réductions liées à la bourse CROUS : EPF 20 % pendant les 3 premières années post-bac ; ESILV de 5 % (échelons 0 bis, 1, 2) à 30 % (échelon 7) ; ESIGELEC 25 % en prépa (5 850 € au lieu de 7 800 €) ; ESME : bourses de la Fondation (de un quart à la moitié des frais) ; ESCOM : environ 30 % des élèves aidés ; ISEP : bourses sociales jusqu'à 2 000 à 3 000 € et bourse « CROUS+ Isep » de 2 000 €.
- Remises de fratrie : EPF 10 % ; ESILV 10 % (plusieurs enfants dans ESILV, EMLV, IIM) ; enfants d'anciens (EPF) 10 %.
- Aucune modulation trouvée ou explicitement absente : Junia (page officielle, aucune modulation), Sup'Biotech (page officielle, pas de modulation directe), ESTACA, EFREI, ESITC Paris (tarifs identiques pour tous), UniLaSalle, ECE (page sans détail), EIGSI (page d'aides sans réduction de l'école).
- Conséquence pour le catalogue : la phrase « certaines écoles modulent selon les revenus des parents » du brouillon n'était pas soutenue ; elle est remplacée par « plusieurs écoles réduisent les frais des élèves boursiers ».

---

## 6. Points incertains restants

1. ESTP : le site de l'école (pas de cycle ingénieur direct après le bac) contredit la fiche Onisep (« cursus de 5 ans après un bac général »). Je suis le site de l'école ; si une autre source officielle confirme l'ancien cycle post-bac, ESTP pourrait revenir dans `ing_btp`.
2. Frais de candidature et dates 2027 : Avenir 120 € (30 €) selon les pages officielles sans année, contre 170 € (50 €) chez L'Express pour 2026 ; Puissance Alpha 2027 non publié (130 € en 2026) ; Parcoursup 2027 non publié (dates estimées d'après 2026).
3. Frais non trouvés ou anciens : EBI (image), CPE Lyon, ESITC Metz, BUILDERS, prépa Icam ; Sup'Biotech 2025-2026 (le PDF 2026-2027 n'a pas pu être lu) ; EPITA et ESIEA (Paris) lus sur des pages libellées 2027-2028 ; Purpan 2025-2026 ; ESA « à titre indicatif ».
4. Spécialités conseillées : l'IPSA (« fortement conseillée ») et l'EPITA (« recommandé ») conseillent les maths expertes ; je n'ai pas mis `conseil: ["expertes"]` car ce n'est vrai que pour une école sur trois ou six citées (voir remarques). Décision laissée à l'appelant.
5. Puissance Alpha : sources contradictoires sur les points négatifs ; liste d'écoles 2027 (17) lue sur le site officiel, mais les anciennes sources en comptent 19.
6. Certains chiffres reposent sur un seul résumé de page (WebFetch) ou sur des PDF lus partiellement ; le quota de recherches épuisé n'a pas permis de tout recouper par une seconde recherche.

---

## 7. Remarques

- Aucune fiche à retirer. Aucune fiche à fusionner. Les sept types restent distincts (domaine ou mode de formation).
- Fiche à envisager (hors de mon fichier) : « Bachelors d'écoles d'ingénieurs et d'écoles de la construction » (3 ans, grade de licence, vers le cycle ingénieur), par exemple ESTP (8 000 €), ELISA Drones et mécatronique (6 600 €), bachelors EPF, ESME, ISEP, Sup'Biotech, ESIEA ; Puissance Alpha a une procédure bachelors (11 écoles). Utile surtout pour les élèves qui visent l'ESTP.
- Formation exigeant une spécialité absente du combo maths + physique-chimie : aucune. ESTACA : maths + une spécialité scientifique ; ELISA : maths + physique-chimie ou SI ; ESCOM : 1 ou 2 spécialités scientifiques ; Sup'Biotech : maths + physique-chimie accepté ; agro : une spécialité scientifique ; CESI : bac général scientifique ; Icam : maths + une spécialité scientifique.
- `conseil` : `["svt"]` retiré de ing_agro ; aucun `conseil` posé ailleurs (voir point 4 ci-dessus). Si l'appelant souhaite refléter l'IPSA et l'EPITA, `conseil: ["expertes"]` pourrait aller sur ing_aero et ing_num.
- `alt` : ing_aero 0,4 → 0,3 ; autres inchangés. `sel`, `inge`, `w`, `kw`, `core`, `p` : inchangés.
- Alias partagés : « CPE » et « CPE Lyon » sont dans ing_chimie alors que l'école a aussi un diplôme numérique ; « Junia » et « HEI » dans ing_gen, « Junia ISEN » dans ing_num (volontaire).
- Geipi Polytech et ISAT Nevers : écoles publiques, à traiter dans cat_ingpub.js.
- Calendrier du baccalauréat 2027 (hors de mon périmètre, lu via un résumé de la page https://www.education.gouv.fr/reussir-au-lycee/baccalaureat-brevet-cap-parcoursup-le-calendrier-2026-341384 ; à recouper par l'agent calendrier) : philosophie lundi 14 juin 2027, épreuves de spécialité du 16 au 18 juin 2027, grand oral du 21 juin au 2 juillet 2027.

---

## 8. Journal des modifications de `cat/cat_ingpriv.js`

- `src` ajouté aux 7 fiches : ESTACA (ing_aero), Fiche Onisep EPF (ing_gen), Fiche Onisep EFREI (ing_num), ESITC Paris (ing_btp), ESCOM (ing_chimie), Fiche Onisep ISA Junia (ing_agro), CESI (ing_app). Pages ouvertes et lues avec WebFetch.
- `cout` réécrit sur les 7 fiches (fourchettes vérifiées ci-dessus).
- `selNote` ajouté ou précisé sur les 7 fiches ; `duree` précisée.
- `alt` : ing_aero 0,4 → 0,3.
- `conseil` : `["svt"]` supprimé de ing_agro.
- `nom` : ing_gen (+ ESIGELEC, ECE), ing_num (+ ESIEE Paris), ing_btp (ESTP retiré, ESITC Paris, ESITC Metz et BUILDERS ajoutés), ing_chimie (+ CPE Lyon).
- `alias` complétés sur toutes les fiches (sigles des écoles citées, formes courantes).
- `desc`, `apres`, `mpc` corrigés : voir les rubriques « Corrections » de chaque fiche. Affirmations non vérifiées retirées : « modulent selon les revenus des parents » (ing_gen, ing_agro), « la SVT est fortement conseillée » (ing_agro), « ni de 42 » (ing_num), « Le BTP recrute beaucoup, y compris en apprentissage » (ing_btp), « souvent embauché par l'entreprise d'apprentissage » (ing_app), « le plus souvent associatives » (ing_agro).
- Rien n'a été changé dans `w`, `kw`, `core`, `side` ni dans les clés de `p`.
