# Faits vérifiés : prépas CPGE et écoles d'ingénieurs publiques post-bac

Groupe « prepa_ingpub » : `cat/cat_prepa.js` (mpsi, pcsi, mp2i, ptsi, bcpst, ecg) et `cat/cat_ingpub.js` (insa, ut, polytech, prepa_inp, cpi_chimie, ingpub_autres, bachelor_am).
Vérification faite le 5 octobre 2026, pour une entrée en 2027. Les chiffres « en 2026 » sont ceux de la session Parcoursup 2026 : rien n'était encore publié pour Parcoursup 2027 (à revérifier en décembre 2026 et janvier 2027).

## Méthode et limites

- Outils : WebFetch (résumés produits par un modèle, donc recoupés avec une 2e source quand c'était possible). Le quota de WebSearch a été épuisé en cours de route.
- Hôtes inaccessibles (robots.txt, certificat SSL ou 404), donc non vérifiés directement : sous-pages de groupe-insa.fr (seule la page d'accueil répond), candidat.groupe-insa.fr, insa-lyon.fr (page admission), banquept.fr sans « www » (www.banquept.fr répond mais sans la liste des écoles), concours-e3a-polytech.fr, concours-polytech.fr, sous-pages de 20ecolesdechimie.com (seule la page d'accueil répond), federation-gay-lussac.*, fede-gaylussac.fr, gay-lussac.org, ensai.fr (admission), esireims.univ-reims.fr, fr.wikipedia.org (cache seul), service-public.gouv.fr en curl (proxy 403, mais WebFetch fonctionne).
- Pages Onisep devinées et en 404 : MPSI sans option, PeiP, Prépa des INP, CPI, INSA, pages thématiques CPGE. Les 6 fiches CPGE retenues existent et parlent bien de la formation.

## Constantes de coût

### PREPA_COST : valeur à retenir
« Lycée public : 283 €/an (178 € d'inscription à l'université partenaire + 105 € de CVEC), 0 € si boursier »
- Arrêté « Montant des droits de scolarité au titre de l'année universitaire 2026-2027 » (PDF du ministère de l'Enseignement supérieur, juin 2026) : ligne « Élèves inscrits dans une classe préparatoire aux grandes écoles d'un lycée public préparant un diplôme national de premier cycle » = 178 € (taux normal et taux réduit).
  https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2026-06/montant-des-droits-de-scolarit-au-titre-de-l-ann-e-universitaire-2026-2027---tablissements-publics-relevant-du-ministre-charg-de-l-enseignement-superi-40672.pdf
- service-public.gouv.fr (page du 21 août 2026) : licence 178 €, CVEC 105 €, « les étudiants boursiers sont exonérés des droits d'inscription et de la CVEC ». https://www.service-public.gouv.fr/particuliers/actualites/A17481
- Hors périmètre : CPGE privées (frais de scolarité bien plus élevés, non vérifiés ; la phrase dit bien « lycée public »), internat et repas.

### ING_PUB_COST : valeur à retenir
« Environ 735 €/an : 630 € de droits d'inscription + 105 € de CVEC (0 € si boursier) »
- Même arrêté 2026-2027 : « diplôme d'ingénieur » 630 € (hors écoles centrales et Mines Nancy) et « étudiants en cycle préparatoire intégré ou assimilé (2 ans) » 630 € (taux normal). C'est donc le tarif ingénieur (et non le tarif licence à 178 €) qui s'applique à INSA (1er cycle), UT (tronc commun), PeiP Polytech, Prépa des INP et CPI.
- Recoupements : guide d'inscription UTBM 2026-2027 (« cycle préparatoire (tronc commun) et FISE : 630 € », CVEC 105 €) ; Groupe UT, informations pratiques (2026-2027 : 630 €) ; Université Côte d'Azur (Polytech Nice) 2026-2027 : diplôme d'ingénieur 630 € ; ENSEM (Lorraine) : 630 €. En 2025-2026 : 628 € (PeiP Polytech Paris-Saclay ; CPI de SIGMA Clermont ; INSA Toulouse sur Onisep) ; Prépa des INP de Bordeaux : 618 € (document de présentation non daté).
  https://www.service-public.gouv.fr/particuliers/actualites/A17481 ; https://bienvenue.utbm.fr/wp-content/uploads/2026/07/Guide_inscription_ingenieur_master_UTBM_2026-2027.pdf ; https://univ-cotedazur.fr/formation/candidater-et-s-inscrire/droits-dinscription ; https://www.polytech.universite-paris-saclay.fr/sites/default/files/2025-12/peip_sept_2025.pdf
- Exceptions : écoles centrales et Mines Nancy : 2 620 € (https://mines-nancy.univ-lorraine.fr/wp-content/uploads/2026/06/TARIFS-DROITS-SCOL-26-27.pdf) ; IMT Nord Europe, cycle préparatoire : 3 200 €/an pour les résidents UE en 2025 (https://imt-nord-europe.fr/annuaire-formations/cycle-preparatoire/) ; SIGMA Clermont (CPI) ajoute une redevance locale d'environ 90 € (2025-2026) ; BSI Arts et Métiers : tarif licence (178 € en 2025-2026), soit 283 € avec la CVEC. À confirmer : l'arrêté contient une ligne particulière pour le cycle préparatoire de l'ENISE de Saint-Étienne (630 €), alors que le cycle ingénieur de Centrale Lyon est ensuite au tarif des écoles centrales.
- Le « taux réduit » (420 €) concerne un 2e diplôme dans le même établissement : sans objet ici.

## Prépas (cat_prepa.js)

Points communs, vérifiés sur chaque fiche Onisep : « Durée : 2 ans dans un lycée », « Recrutement : sur dossier » (Parcoursup), « 120 crédits ECTS à l'issue de la 2e année (60 à la fin de la 1re année) », formation non diplômante. Spés : le guide du ministère de juin 2019 (https://education.gouv.fr/media/21401/download) demande maths + au moins un enseignement parmi physique-chimie, SI ou NSI pour MPSI, PCSI, PTSI et MPI. Aucune de ces prépas n'exige une spé absente d'un combo maths + physique-chimie. Colles : les sources consultées mentionnent les colles sans en préciser la fréquence, d'où « colles régulières » dans les textes (le brouillon disait « chaque semaine »).

### mpsi
- src : fiche Onisep MPSI 1re année, option sciences industrielles de l'ingénieur (existe aussi en option informatique ; l'URL sans option est en 404). https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-mathematiques-physique-et-sciences-de-l-ingenieur-mpsi-1re-annee-option-sciences-industrielles-de-l-ingenieur
- 2e année (Onisep) : MP, MP*, PSI, PSI*. Options SI ou informatique en MPSI (deux fiches Onisep).
- Spés : cours-thales (18 déc. 2024) recommande maths + physique-chimie + maths expertes. Thotis MPSI (2 juil. 2026), source secondaire : plus de 9 candidats sur 10 avaient maths + physique-chimie ; expertes « vivement recommandée » mais « il est tout à fait possible d'intégrer une MPSI sans l'avoir suivie ». `conseil: ["expertes"]` conservé.
- Corrigé : e3a-Polytech retiré de `apres` (existence et liste actuelle des concours non vérifiables, site inaccessible) ; informatique (Python) et options ajoutées ; sigle ENS explicité ; ECTS précisés ; sélectivité reformulée.
- Incertain : horaires (Thotis : environ 30 h par semaine, maths environ 12 h, physique-chimie environ 8 h) non repris dans la fiche.

### pcsi
- src : fiche Onisep PCSI 1re année. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-physique-chimie-et-sciences-de-l-ingenieur-pcsi-1re-annee
- 2e année (Onisep) : PC, PC*, PSI, PSI*. Attendus Onisep : résultats en « physique-chimie, mathématiques et, le cas échéant, en sciences de l'ingénieur ou en informatique ».
- Thotis (juil. 2026) : maths + physique-chimie (ou SI) ; maths expertes recommandées. `conseil: ["expertes"]` conservé, avec « conseillée sans être obligatoire ».
- Corrigé : desc neutre (TP, informatique Python, sciences de l'ingénieur) au lieu de « la prépa la plus équilibrée » (jugement non vérifiable) ; mpc sans comparaison avec MPSI.

### mp2i
- src : fiche Onisep MP2I 1re année. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-mathematiques-physique-ingenierie-et-informatique-mp2i-1re-annee
- 2e année (Onisep) : MPI, MP (options informatique ou SI), PSI. Attendus Onisep : résultats de première en maths, physique-chimie et, le cas échéant, informatique ou SI.
- Spés : NSI non exigée. L'Étudiant (30 juin 2023), en paraphrase : la prépa accueille maths + NSI comme maths + physique-chimie, et selon les enseignants l'avantage initial des élèves de NSI disparaît en quelques semaines ; Thotis (2 juil. 2026) : maths + physique-chimie ou maths + NSI, expertes « atout décisif » sans être indispensable. `conseil` : NSI retiré, `["expertes"]`.
- Sélectivité : L'Étudiant (30 juin 2023) : environ 30 classes, 1 350 places, plus de 37 000 vœux ; Thotis (2 juil. 2026) : « un peu plus de 1 350 places pour près de 37 000 vœux », plus de 41 lycées (25 à la création en 2021), Louis-le-Grand plus de 74 candidats par place ; annuaire Thotis (29 janv. 2026) : 37 classes listées, environ 1 544 places (données 2025). La fiche dit « une quarantaine de classes » et « environ 37 000 vœux pour environ 1 350 places en 2023 ». `sel: 3` conservé.
- Débouchés : communiqué SIF (déc. 2024) : cohorte MP2I 2023-2024 de 1 406 élèves ; session 2025 : 162 places MPI aux Mines-Télécom, 216 au CCINP ; Thotis : environ 85 % passent en MPI. https://www.socinfo.fr/uploads/2024/12/2024-12-20-CP-concours-CPGE.pdf
- Corrigé : desc (algorithmique, programmation, bases de données ; 2e année MPI le plus souvent) à la place de « informatique théorique » ; vœux de repli MPSI ou PCSI conseillés.

### ptsi
- src : fiche Onisep PTSI 1re année. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-physique-technologie-et-sciences-de-l-ingenieur-ptsi-1re-annee
- 2e année (Onisep) : PT, PT*, PSI, PSI*.
- Spés : SI non exigée. Présentation du lycée Blaise Pascal (académie de Normandie) : « maths + sciences de l'ingénieur (avec 2 h de physique) » ou « maths + physique-chimie » comme combinaison principale, option maths expertes « si possible » ; Thotis (7 juil. 2026), en paraphrase : maths + physique-chimie ou maths + SI sont particulièrement adaptées, la SI ou la NSI peuvent être un plus selon les lycées ; Onisep : attendus en physique-chimie, mathématiques et sciences de l'ingénieur. `conseil` : SI retiré, `["expertes"]` (plus).
- Horaires de 1re année (présentations de lycées) : maths 9 h à 9 h 30, physique-chimie 8 h, SI 8 h 30 à 10 h 30, informatique 1 h 30 à 2 h. D'où « environ 8 à 10 h par semaine chacune » pour les trois matières principales.
- Sélectivité : Thotis (7 juil. 2026) : taux d'accès indicatif d'environ 35 %, de moins de 10 % dans les lycées les plus demandés à plus de 90 % dans les plus accessibles ; PTSI recrute presque exclusivement des bacs généraux. `selNote` « souvent moins demandée que MPSI et PCSI » conservé (pas de comparaison chiffrée avec MPSI et PCSI trouvée).
- Banque PT (Livret PT 2025 ; chooseandconnect et Planète Grandes Écoles, 2026) : plus de 100 écoles (plus de 150 selon le livret 2025), environ 2 000 à 2 600 places ; Arts et Métiers 540 places, Réseau Polytech 300 à 400, groupe INSA 120, CentraleSupélec 44 ; concours partenaires : Centrale-Supélec, Mines-Ponts, Commun INP, Arts et Métiers, ENS Paris-Saclay et ENS Rennes, École polytechnique, Polytech, Mines-Télécom ; Lycée Blaise Pascal : 2 366 candidats pour 2 087 places en PT. Les écoles citées dans `apres` sont toutes dans ces listes.
  https://www.chooseandconnect.com/voies-acces/banque-pt ; https://eijv.u-picardie.fr/wp-content/uploads/sites/14/2024/12/Livret-PT-2025-V1.pdf ; https://www.planetegrandesecoles.com/resulats-admissions-banque-pt-date
- Alias ajoutés : banque PT, Arts et Métiers.

### bcpst
- src : fiche Onisep BCPST 1re année. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-biologie-chimie-physique-et-sciences-de-la-terre-bcpst-1re-annee
- Accessible avec maths + physique-chimie sans SVT : oui. IPR de SVT Nancy-Metz (3 mars 2025) : « n'importe quelle doublette parmi ces trois matières scientifiques en terminale » (en cas de SVT + physique-chimie, maths complémentaires obligatoires) ; plaquette Lakanal 2025-2026 : profils acceptés « SVT », « physique-chimie », « maths complémentaires », « physique-chimie + mathématiques (+ expertes) », « SVT + mathématiques (+ expertes) » ; Thotis : « tous les dossiers provenant de chacune des combinaisons seront examinés », maths expertes valorisées (rectorat de La Réunion, 2022 : « Maths expert valorisées »). https://www.citescolairelakanal.fr/images/lakanal/CPGE/Presentation/Filiere_scientifique/BCPST/plaquette-bcpst-2025-2026.pdf
- Horaires BCPST1 (Lakanal) : maths 8 h, physique-chimie 7 h, SVT 8 h, informatique 2 h. D'où « à parts proches, environ 7 à 8 h chacune » et le conseil de prévoir un rattrapage en SVT. `conseil: ["svt", "expertes"]`.
- Débouchés (Lakanal et IPR) : 4 écoles nationales vétérinaires (271 places), banque Agro-Véto environ 1 600 places, banque ENS-ENPC environ 70 places, concours G2E environ 240 places, 79 écoles d'ingénieurs environ 1 900 places.
- Corrigé : suppression de « C'est aussi une voie vers l'enseignement des SVT » (non vérifié) ; G2E explicité.

### ecg
- src : fiche Onisep ECG 1re année. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/classe-preparatoire-economique-et-commerciale-generale-1re-annee
- Attendus Onisep : « s'intéresser en particulier aux sciences humaines et sociales (économie, géographie, géopolitique, histoire et sociologie) », qualités de rédaction et d'argumentation. 2e année : ECG 2e année. Onisep : 23 écoles de commerce reconnues par l'État.
- Spés : la fiche porte sur l'option maths approfondies. Le guide du ministère de 2019 cite, pour les CPGE économiques et commerciales, « un enseignement de mathématiques (spécialité ou option) et au moins un enseignement de spécialité parmi » HGGSP, HLP, LLCER, LLCA, SES. Maths + physique-chimie ne remplit donc pas cette liste, mais L'Étudiant (26 févr. 2025) donne cette combinaison comme acceptée, avec environ 72 % d'acceptation (84 % pour maths + HGGSP, 78 % pour maths + SES). L'Étudiant (2019) : les maths approfondies s'adressent surtout aux élèves avec maths expertes. `conseil: ["expertes"]` conservé, `side: true` conservé (réglage du classement non touché).
- Matières (Groupe Réussite, 2022, source secondaire) : maths approfondies 9 h par semaine ; ESH (8 h) ou HGG (7 h) au choix ; lettres et philosophie ; deux langues vivantes.
- Débouchés : règlement BCE 2026 (HEC, ESSEC, EDHEC, emlyon, ENSAE Paris… cités) ; notice ENSAE 2025 (admission après ECG maths approfondies). https://www.concours-bce.com/sites/default/files/2025-11/Reglement_Concours_BCE_2026_VA_VF_0_0.pdf ; https://ensae.fr/sites/default/files/pages/documents/Concours/Notice-ENSAE-eco-et-maths-ECG-2025.pdf
- Corrigé : ENSAI retiré (non confirmé après ECG par une source officielle ; seule L'Express en parle, page non utilisée) ; nom précisé (option maths approfondies, ECG = économique et commerciale générale) ; alias HEC, ESSEC, ESCP, EDHEC, ENSAE, BCE, école de commerce ajoutés ; mpc rappelle le poids de l'économie, de l'histoire et de l'écrit.
- Incertain : le détail ESH ou HGG vient d'une source secondaire de 2022.

## Écoles d'ingénieurs publiques (cat_ingpub.js)

### insa
- src : page d'accueil du Groupe INSA (les pages d'admission sont bloquées par robots.txt). https://groupe-insa.fr/
- Écoles : 7 INSA (Lyon, Toulouse, Rennes, Rouen Normandie, Strasbourg, Hauts-de-France, Centre Val de Loire), plus INSA Euro-Méditerranée (Fès), 80 spécialités, section « musique-études », accompagnement des sportifs de haut niveau (accueil Groupe INSA). Rennes : « filières artistiques et sportives de haut niveau ». INSA Hauts-de-France : parcours international GlobalINSA. Hauts-de-France créé en janvier 2020 au sein de l'UPHF.
- Admission (aufutur.fr, 8 déc. 2025 ; L'Étudiant ; chooseandconnect 2026) : procédure commune sur Parcoursup, dossier (bulletins de première et terminale), puis entretien de motivation obligatoire d'environ 30 minutes pour les candidats retenus (30 avril au 11 mai 2026), frais de 105 € pour tous les établissements (gratuit pour les boursiers), inscription du 19 janvier au 12 mars 2026, résultats le 2 juin 2026. En 2025, 83,4 % des admis avaient maths + physique-chimie (L'Étudiant). Environ 3 800 places, environ 25 000 candidats, environ 15 % d'admis (chooseandconnect). Le brouillon disait « sélection sur dossier » : un document de 2018 de l'INSA Lyon parlait d'un entretien « éventuel », mais en 2026 il est obligatoire. `p.concours` 0 vers 0.5.
  https://aufutur.fr/etudes-superieures/ecoles-ingenieurs/procedure-post-bac-insa/ ; https://www.letudiant.fr/etudes/ecole-ingenieur/ecoles-d-ingenieurs-post-bac-la-procedure-insa-mode-d-emploi.html ; https://www.chooseandconnect.com/voies-acces/groupe-insa
- Cursus : premier cycle de 2 ans (Onisep INSA Toulouse : « premier cycle INSA post bac général, 2 ans, sur dossier et/ou épreuves, et entretien », certificat délivré par l'école, spécialité choisie ensuite) puis 3 ans de spécialité. https://www.onisep.fr/ressources/univers-formation/formations/post-bac/premier-cycle-insa-post-bac-general-tronc-commun-de-l-insa-de-toulouse
- Alias ajoutés : INSA Rouen Normandie, INSA Valenciennes, INSA Blois, Groupe INSA, procédure INSA.
- Incertain : nombre d'écoles partenaires de la procédure (5 selon L'Étudiant : ENSIL-ENSCI, ENSISA, ESITech, ISIS, Sup'EnR ; 6 selon aufutur et chooseandconnect, avec l'ENSCMu) : la fiche ne les cite pas ; détail des sections aménagées par INSA.

### ut
- src : informations pratiques du Groupe UT. https://www.groupe-ut.fr/informations-pratiques/
- Admission 2026-2027 : post-bac via Parcoursup du 19 janvier au 12 mars 2026 (plateforme groupe-ut.fr pour les autres profils et la rentrée de février) ; 105 € de frais (gratuit pour les boursiers) ; entretiens de motivation d'une demi-journée, en visioconférence, en groupes de 5 à 6 pour les terminales ; droits d'inscription 630 €. `p.concours` 0.5 conservé.
- UTT (https://www.utt.fr/formations/diplome-d-ingenieur/les-stages-ingenieur et .../le-tronc-commun) : tronc commun de 2 ans (4 semestres), 9 branches, « jusqu'à 56 semaines en entreprise » (immersion de 4 semaines en 2e année, mission de 6 mois comme assistant ingénieur en 4e année, projet de fin d'études de 6 mois en 5e année) : ce n'est pas « un semestre entier » unique comme le disait le brouillon. UTBM : 9 spécialités, filières en apprentissage. UTC : 5 départements, apprentissage dans 3 spécialités.
- Alias ajoutés : Groupe UT, Montbéliard.

### polytech
- src : page PeiP du réseau Polytech. https://www.polytech-reseau.org/cycle-preparatoire-peip/
- Réseau : 16 écoles et 7 écoles associées ; « votre candidature est unique et valable pour l'ensemble de ces 16 écoles » (Angers, Annecy-Chambéry, Clermont, Dijon, Grenoble, Lille, Lyon, Marseille, Montpellier, Nancy, Nantes, Nice Sophia, Orléans, Paris-Saclay, Sorbonne, Tours). Le brouillon disait « une quinzaine de villes ».
- PeiP : 2 ans (une autre page du réseau parle de « 2 ou 3 ans »), accès via le concours Geipi Polytech sur Parcoursup ; si les 2 années sont validées, accès direct à un cycle ingénieur Polytech sous statut étudiant, selon préférences, places et résultats (procédure nationale unifiée) ; le réseau s'engage à proposer l'apprentissage aux diplômés du PeiP. https://www.polytech-reseau.org/comment-integrer-le-peip/
- Concours Geipi Polytech 2026, bac général (règlement 2026) : « étude de dossier + épreuve écrite pour l'ensemble des candidats », donc pas d'entretien (l'entretien de 25 minutes ne concerne que le bac technologique) ; écrit le 28 avril 2026 après-midi, 3 h : QCM de maths de 1 h, puis 2 sujets de 1 h au choix parmi maths, physique-chimie, sciences de l'ingénieur, SVT ou biologie-écologie, NSI ; frais de 60 € (gratuit pour les boursiers du secondaire) ; inscription uniquement via Parcoursup (un seul vœu, autant d'écoles que souhaité), résultats à partir du 2 juin. Le brouillon disait « entretien pour une partie des candidats » : faux pour le bac général. `p.concours` 0.5 vers 1 ; `p.fac` 0.5 conservé.
  https://www.geipi-polytech.org/wp-content/uploads/2026/01/Reglement-Concours-GP-General-2026.pdf ; https://www.geipi-polytech.org/wp-content/uploads/2026/01/Reglement-Concours-GP-Techno-2026.pdf ; https://lexpress-education.com/articles/concours-geipi-polytech-epreuves-ecoles-et-calendrier/
- Règlement du PeiP (Polytech Angers 2026-2027) : la poursuite en cycle ingénieur est automatique si les deux années sont validées.
- Incertain : règlement du concours 2027 non publié.

### prepa_inp
- src : page de la Prépa des INP sur groupe-inp.fr (le domaine la-prepa-des-inp.fr y redirige). https://www.groupe-inp.fr/la-prepa-des-inp
- 10 sites : Bordeaux, Cambrai, Clermont-Ferrand, Grenoble, Nancy, Pointe-à-Pitre, Quimper, Saint-Denis de La Réunion, Toulouse, Valence. Parcoursup, « sans concours mais sur la base du contrôle continu », « entretiens de motivation organisés dans les différents sites » (début mai 2026), inscriptions du 19 janvier au 12 mars 2026, aucune spé obligatoire citée.
- Grenoble INP (https://www.grenoble-inp.fr/fr/formation/la-prepa-des-inp) : environ 420 places sur 10 sites en 2025 (Grenoble 120, Valence 36), 34 écoles du Groupe INP accessibles, plus de 90 % des élèves obtiennent l'une de leurs 3 premières écoles souhaitées. Bordeaux INP (document de présentation) : dossier 65 %, bac 20 %, entretien 15 % ; affectation par ordre de mérite en satisfaisant au mieux les choix. Nancy (document Université de Lorraine) : 11 écoles Lorraine INP, frais de candidature d'environ 90 € (5 € pour les boursiers).
- `p.concours` 0 vers 0.5 (dossier + entretien).
- Alias ajoutés : Groupe INP, Clermont Auvergne INP, Lorraine INP.
- Incertain : le « plus de 90 % » vient d'une seule page d'établissement.

### cpi_chimie
- src : accueil de la Fédération Gay-Lussac (les sous-pages sont bloquées). https://20ecolesdechimie.com/
- 20 écoles d'ingénieurs en chimie et génie des procédés (publiques et privées), 5 CPI : Clermont-Ferrand, Lille, Pau, Rennes, Strasbourg (page ECPM : https://ecpm.unistra.fr/formations/cycle-preparatoire-integre/admissions/). Parcoursup « CPI chimie FGL » : un seul dossier, un seul entretien (quel que soit le nombre de centres choisis), un classement unique ; frais de candidature de 95 € (50 € pour les boursiers). Entretiens entre le 20 avril et le 12 mai 2026 (SIGMA : Clermont-Ferrand, Paris, Montpellier).
- FAQ (ENSCR) : l'affectation dans les écoles se fait par ordre de classement et selon les vœux ; « si vous ne souhaitez pas intégrer une école de statut privé, il faut impérativement placer celles-ci en dernier » ; 47 à 61 % des élèves obtiennent leur 1er choix, 81 à 91 % l'un de leurs 3 premiers. https://www.ensc-rennes.fr/formations/faq-des-cpi-de-la-fgl/
- Frais 2025-2026 à SIGMA Clermont : 628 € + CVEC 105 € + redevance SIGMA 90 € ; environ 50 élèves accueillis par an à SIGMA. 2026-2027 : 630 € selon l'arrêté. https://www.sigma-clermont.fr/fr/etudier-a-sigma-clermont/formations/cycle-preparatoire-integre-fgl.html
- `p.concours` 0 vers 0.5 (dossier + entretien). `cout` : chaîne détaillée (735 € pendant le CPI, frais plus élevés ensuite dans une école privée du réseau, sans chiffre).
- Alias ajoutés : ENSCR, ENSCL, ECPM, ENSGTI, SIGMA Clermont, 20 écoles de chimie.
- Incertain : spés conseillées (le flyer de la Fédération est une image illisible ; Parcoursup parle des « enseignements de spécialités scientifiques ») ; liste exacte des 20 écoles non relue (pages bloquées).

### ingpub_autres
- src : liste des écoles du concours Geipi Polytech. https://www.geipi-polytech.org/ecoles/
- Le site annonce « 1 concours, 35 écoles d'ingénieurs post-bac » : 16 Polytech et 19 autres écoles : Centrale Lyon ENISE (Saint-Étienne), EEIGM (Nancy), ENIB (Brest, aujourd'hui Bretagne INP), ENIM (Metz), ENIT (Tarbes), ENSGSI (Nancy), ENSIBS (Lorient-Vannes), ENSIM (Le Mans), ESGT (Le Mans), ESIR (Rennes), ESIROI (La Réunion), Grenoble INP Esisar (Valence), IMT Nord Europe, ISAT (Nevers), ISEL (Le Havre), ISTY (UVSQ), L'Institut Agro (Dijon), Sup Galilée (Paris Nord), Télécom Saint-Étienne. Noms complets donnés par la page : ENIB « École nationale d'ingénieurs de Brest », ENSIM « École nationale supérieure d'ingénieurs du Mans », ISAT « Institut supérieur de l'automobile et des transports », ESIR « École supérieure d'ingénieurs de Rennes », EEIGM « École européenne d'ingénieurs en génie des matériaux », Sup Galilée « école d'ingénieurs de l'université Sorbonne Paris Nord ». Un communiqué de 2025 annonçait « 37 écoles » (la liste obtenue n'en compte que 35) : le décompte exact est à surveiller, d'où « une vingtaine d'autres écoles » dans la fiche.
- Même concours que Polytech (dossier + écrit de 3 h) : `p.concours` 0.5 vers 1.
- ESIREIMS (Reims) : absente de la liste Geipi, site non vérifiable : retirée des alias. ENSICAEN ne recrute pas après le bac d'après sa page d'accueil (concours CCINP et admissions parallèles seulement).
- IMT Nord Europe : cycle préparatoire de 2 ans, accessible après le bac « uniquement via le concours Geipi Polytech » ; 3 200 €/an pour les résidents UE en 2025 (5 700 € hors UE) : d'où la mention dans `cout`.
- Alias ajoutés : Geipi, Geipi Polytech, ENIM, ENIT, ENISE, ENSIBS, ISEL, ISTY, ESIROI, ESGT, Esisar, Bretagne INP, IMT Nord Europe, Télécom Saint-Étienne.
- Incertain : le sigle GEIPI n'est pas développé sur le site, il n'est donc pas explicité dans les textes ; tarifs des autres écoles « autre tutelle » non vérifiés (Institut Agro, Télécom Saint-Étienne, Centrale Lyon ENISE).

### bachelor_am
- Fondée, mais renommée : l'ancien « Bachelor de technologie » est devenu « Bachelor en sciences et ingénierie (BSI), spécialité génie mécanique et production » (fin 2025). Diplôme conférant le grade de licence, RNCP niveau 6, 3 ans, campus de Bordeaux-Talence et Châlons-en-Champagne (un seul vœu Parcoursup pour les deux), recrutement sur Parcoursup, « sur dossier et entretien ». Onisep liste aussi les antennes de Niort, Dax et Bergerac, mais le site de l'école ne mentionne que Bordeaux-Talence et Châlons pour le BSI.
- Public : « accessible en majorité aux bacheliers STI2D et à quelques bacheliers généralistes » (plaquette 2025-2026) ; page d'admission du site de l'école (en anglais) : bac STI2D quelle que soit la spécialité, ou bac général à dominante scientifique (maths, physique, sciences de l'ingénieur). Statut étudiant les années 1 et 2, 3e année en alternance (contrat de professionnalisation). Frais 2025-2026 : 178 € (tarif licence) : pas le tarif ingénieur.
- Poursuite : master ou cursus d'ingénieur, y compris Arts et Métiers par un concours spécifique (« peut candidater directement »). Fiche Onisep : https://www.onisep.fr/ressources/univers-formation/formations/post-bac/bachelor-en-sciences-et-ingenierie-genie-mecanique-et-production-ensam ; plaquette : https://s3-site.artsetmetiers.fr/public/2025-11/Bachelor en Sciences et Ingénierie_Spécialité mécanique-production_2025_11_19.pdf
- À ne pas confondre : le « bachelor en sciences et technologies, filières de l'industrie » (Bergerac, Dax, Niort) est en apprentissage, hors Parcoursup (candidature directe dès janvier 2026), STI2D ou bac général avec au moins une spé scientifique, formation prise en charge par l'OPCO (8 500 € par an). Le bachelor « conception soutenable » (Chambéry) est aussi en apprentissage et hors Parcoursup.
- `p.concours` 0 vers 0.5 ; `alt` 0.5 et `inge` 0.5 conservés ; `cout` : chaîne à 283 €.
- Recommandation : fiche fondée mais marginale pour un bac général maths + physique-chimie (public cible STI2D) ; à garder en `side` ou à retirer au choix du porteur du projet.

## Fiches à retirer, fusionner, ajouter

- À retirer : aucune. `bachelor_am` est fondée mais marginale (voir ci-dessus).
- À ajouter (optionnel) : Mines Saint-Étienne, « cycle préparatoire et diplômant en ingénierie et santé » (PDIS) : 2 ans post-bac sur Parcoursup, 60 élèves, double diplôme (diplôme d'établissement + licence « sciences pour la santé » de l'université Jean Monnet), au Campus Santé Innovations de Saint-Étienne, poursuite en cycle ingénieur ou en santé : https://www.mines-stetienne.fr/programmes/cycle-preparatoire-et-diplomant-en-ingenierie-et-sante-pdis (frais et places non précisés sur la page). ENSEA (Cergy) propose un « Bachelor Human-IT » après le bac : détails non vérifiés, à ne pas ajouter sans vérification.
- Pas de fusion nécessaire. `ingpub_autres` contient déjà IMT Nord Europe.

## Champs de réglage modifiés (à signaler)

- `p.concours` : insa 0 vers 0.5 ; polytech 0.5 vers 1 ; prepa_inp 0 vers 0.5 ; cpi_chimie 0 vers 0.5 ; ingpub_autres 0.5 vers 1 ; bachelor_am 0 vers 0.5.
- `conseil` : mp2i `["expertes", "nsi"]` vers `["expertes"]` ; ptsi `["si"]` vers `["expertes"]` ; bcpst `["svt"]` vers `["svt", "expertes"]`.
- `sel`, `alt`, `inge`, `p.sortie`, `p.niv`, `p.prepa`, `p.fac`, `p.prive` : inchangés. `w`, `kw`, `core`, `side` et les autres clés de `p` : inchangés.
- `cout` : chaînes propres pour cpi_chimie, ingpub_autres, bachelor_am ; les autres fiches gardent les constantes `PREPA_COST` et `ING_PUB_COST`.

## Points incertains restants

1. INSA : liste exacte des écoles partenaires de la procédure (5 ou 6 selon les sources) et détail des sections aménagées ; les pages d'admission du groupe-insa.fr sont bloquées.
2. e3a-Polytech et autres concours de 2e année : existence et liste actuelles non vérifiées (e3a-Polytech retiré de la fiche MPSI) ; ENSAI après ECG non confirmé.
3. CPI de chimie : spés conseillées (flyer illisible) et liste exacte des 20 écoles.
4. Chiffres issus de sources secondaires : 83,4 % d'admis INSA avec maths + physique-chimie (L'Étudiant) ; « plus de 90 % » dans l'une de ses 3 premières écoles de la Prépa des INP (Grenoble INP) ; horaires PTSI et BCPST tirés de présentations de lycées ; nombre de classes MP2I (37 à plus de 41 selon les pages Thotis).
5. Frais : le tarif ingénieur (630 €) est celui de l'arrêté 2026-2027 pour les cycles préparatoires intégrés, mais des établissements ajoutent des redevances locales (SIGMA Clermont, environ 90 €) ou relèvent d'une autre tutelle (IMT Nord Europe, Centrale Lyon ENISE).
6. Calendrier, frais de concours (60 €, 95 €, 105 €) et règlement Geipi : valeurs de la session 2026 ; ceux de 2027 ne sont pas encore publiés.
