# Boussole Maths-Physique : conception

> Document de conception, validé le 5 octobre 2026 avant de coder. Il reprend la mécanique de Boussole SES-Maths et le cahier des charges commun, adaptés à un élève de terminale générale avec les spécialités maths + physique-chimie, avec ou sans maths expertes. ✱ = nouveau par rapport à SES. Ce qui a changé pendant le développement est résumé à la fin (section 9).

## En bref

- **Même squelette que SES** : 6 blocs (10 à 12 minutes), profil rédigé, top 5 justifié, « À creuser aussi », « À côté de ce que tu imagines », « Si tu ne sais vraiment pas encore », questions pour aller plus loin, calendrier, exports PDF et HTML, « Partager mon lien », sauvegarde sur l'appareil.
- **Contenu réécrit** : 11 axes de profil, 40 questions à choix (dont 1 conditionnelle) et 5 champs libres (dont 1 conditionnel), 80 fiches de formations réparties en 9 familles.
- **Nouveautés testées ici avant la version toutes spécialités** :
  - la question « Une école d'ingénieurs, pour toi c'est… » ;
  - le curseur « garder un profil large ↔ me spécialiser tôt », qui départage écoles généralistes et spécialisées ;
  - la question « Choisir ton école dès le bac » (école en 5 ans ou route progressive) ;
  - les **idées de départ** : l'élève écrit « ESTACA » ou « INSA », la boussole retrouve la fiche et montre où elle tombe dans ses pistes ;
  - les **notes aux relances**, reprises telles quelles dans la synthèse et les exports ;
  - les **options conseillées** par formation (maths expertes, NSI, SI, SVT), affichées et prises en compte.
- **Pas repris de SES** : le curseur « calculer ↔ écrire » (voir bloc 3). Le bandeau de nouveautés (il prévient ceux qui reviennent après une mise à jour) et la lecture des liens d'une ancienne version n'ont pas lieu d'être sur un site neuf ; le mécanisme de versions du lien reste prêt pour la suite.

## Décisions validées

1. **11 axes au lieu de 10.** Je sépare « Entreprise, finance & management » de « Humain : soigner, transmettre, accompagner ». S'ils étaient regroupés, un élève attiré par la finance verrait monter un axe qui parle aussi de soigner et d'enseigner.
2. **Idées de départ.** Si l'élève répond « J'ai déjà quelques idées », un champ libre s'affiche : « Lesquelles ? Écoles, formations, métiers… ». La boussole reconnaît les noms connus (les écoles citées en exemple dans les fiches, les sigles comme MPSI, CUPGE ou BUT GMP, quelques métiers comme pilote, kiné ou architecte). En haut des résultats, elle indique pour chaque idée la fiche correspondante, son rang dans les pistes, le pourquoi et les points d'attention. Les noms non reconnus sont repris tels quels. C'est la réponse directe au cas « je pense à ESTACA ou à une généraliste ».
3. **Une ouverture hors sciences.** J'ajoute le centre d'intérêt « La société, la politique, le droit » et 3 fiches : Sciences Po et IEP, économie (licence ou double licence maths-éco), prépa ECG. L'autre option est de ne les laisser que dans « Tout ce qui existe ».
4. **Écoles d'ingénieurs découpées par statut et par domaine.** 14 fiches au lieu d'une : aéro-auto privées, généralistes privées, numérique, BTP, chimie, agronomie, apprentissage, INSA, UT, Polytech, Prépa des INP, prépas intégrées de chimie… C'est ce qui permet de répondre « spécialisée ou généraliste, publique ou privée, dès le bac ou après une prépa ».
5. **La 3e spécialité de première** (`spe1` : SVT, NSI, SI, autre), question factuelle utilisée seulement pour les options conseillées (« NSI conseillée : mets-toi à Python avant la rentrée »).

## 1. Les axes du profil

| Clé | Libellé affiché | Nourri surtout par |
|---|---|---|
| MATH | Maths & modélisation | maths (raisonnement, calcul), maths expertes, IA et données, finance |
| PHYS | Physique & sciences fondamentales | mécanique, ondes, TP, recherche, labo |
| MECA | Mécanique, aéro & transports | mécanique, bricoler, aéro, auto, trains et bateaux, concevoir une machine |
| ENER | Énergie & électronique | électricité et ondes, électronique, énergie, robots, centrale |
| NUM | Numérique, info & IA | coder, IA et cybersécurité, logiciels |
| CHIM | Chimie & matériaux | chimie, matériaux et médicaments, labo |
| VIE | Vivant, santé & environnement | le vivant, la santé, le climat, l'agriculture |
| BAT | Construction & architecture | construire, chantier |
| CREA | Design, son & image | arts, design, son et image, créer |
| ECO | Entreprise, finance & management ✱ | monter un projet, la finance, mener une équipe |
| HUM | Humain : soigner, transmettre, accompagner ✱ | soigner, enseigner, le sport, devant une classe |

Principe clé : les écoles **généralistes** ont des poids étalés sur plusieurs axes techniques, les écoles **spécialisées** un axe dominant. Un profil étalé fait monter les généralistes, un profil pointu les spécialisées, et le curseur « profil large ↔ spécialisé » renforce l'effet.

## 2. Le questionnaire

Échelle : Pas du tout · Bof · Plutôt · Carrément · ?. Curseur : 5 positions, plus « ? Je ne sais pas ».

### Bloc 1 · Pour commencer

| id | Question | Réponses |
|---|---|---|
| `prenom` | Ton prénom | texte facultatif |
| `maths_opt` | En maths cette année, tu as… | La spécialité seulement · La spécialité + l'option maths expertes · Je ne sais plus |
| `spe1` ✱ | En première, ta 3e spécialité (celle que tu as arrêtée) était… | SVT · NSI · SI · Une autre · Je ne sais plus |
| `moy` | Ta moyenne générale, à peu près | Moins de 10 · 10 à 12 · 12 à 14 · 14 à 16 · 16 et plus · ? |
| `niv_maths` | Ta moyenne en maths | idem |
| `niv_pc` ✱ | Ta moyenne en physique-chimie | idem |
| `deja` | Côté orientation, tu en es où ? | Je n'ai rien regardé · J'ai un peu traîné sur Parcoursup ou Onisep · J'ai déjà quelques idées |
| `deja_quoi` ✱ | Lesquelles ? Écoles, formations, métiers… | texte, affiché seulement si « quelques idées » |
| `inge` ✱ | Une école d'ingénieurs, pour toi c'est… | Mon idée principale · Une piste parmi d'autres · Pas vraiment mon truc · ? |

Indice de `inge` : « Ce n'est pas une obligation avec maths + physique : la boussole te montre aussi le reste. » Son effet sur le classement reste modéré, pour ne pas enfermer l'élève dans son idée de départ.

### Bloc 2 · Ce que tu aimes en cours (échelles)

| id | Libellé | Indice |
|---|---|---|
| `m_raison` ✱ | Les maths, côté raisonnement | Démontrer, chercher l'astuce, comprendre pourquoi c'est vrai |
| `m_calcul` ✱ | Les maths, côté calcul et modélisation | Calculer, modéliser, probas, algorithmes |
| `m_expertes` ✱ | L'option maths expertes | Complexes, arithmétique, matrices et graphes. Affichée seulement si tu l'as |
| `m_meca` ✱ | La physique, côté mécanique | Mouvements, forces, énergie, fluides |
| `m_ondes` ✱ | La physique, côté électricité, ondes et lumière | Circuits, signaux, son, optique |
| `m_chim` ✱ | La chimie | Réactions, molécules, dosages, matériaux |
| `m_tp` ✱ | Les TP | Manips, mesures, expériences |
| `m_info` | L'informatique | Coder, même en dehors des cours : Python, jeux, sites |
| `m_techno` ✱ | Bricoler, construire, démonter | Mécanique, électronique, Arduino, impression 3D… même en dehors des cours |
| `m_vivant` ✱ | Le vivant | Bio, corps humain, écologie, même si tu as arrêté la SVT |
| `m_fr` | Écrire et argumenter, la philo | |
| `m_lang` | L'anglais et les autres langues | |
| `m_arts` | Arts, musique, création | Même en dehors des cours |
| `m_sport` | Le sport | |

Relance du bloc : « Quel cours tu attends le plus dans la semaine ? Et le chapitre de maths ou de physique qui t'a le plus scotché cette année ? »

### Bloc 3 · Ta façon de bosser (curseurs)

| id | À gauche | À droite |
|---|---|---|
| `s_enc` | Un cadre, un rythme imposé, des profs qui suivent | Être libre et gérer mon temps seul |
| `s_conc` | Comprendre la théorie, le pourquoi | Du concret, voir vite à quoi ça sert |
| `s_gen` ✱ | Garder un profil large, toucher à plusieurs domaines | Plonger tôt dans un domaine précis qui me plaît |
| `s_team` | Bosser seul dans mon coin | Bosser en équipe, en mode projet |
| `s_eff` | Mettre le paquet 2 ans pour ouvrir des portes | Garder du temps pour ma vie à côté |
| `s_terr` | Bureau, écran, réflexion | Bouger : atelier, chantier, terrain, contact |

Relance : « Le dernier truc où tu as vraiment bossé dur sans qu'on te force, c'était quoi ? »

Le curseur SES « calculer ↔ écrire » disparaît : il départage peu des élèves maths-physique, et le goût pour l'écrit passe par `m_fr`.

### Bloc 4 · Ce qui t'attire, ce qui te rebute

**`interets`** (cases), avec les axes que chaque case nourrit :

| Clé | Libellé | Axes |
|---|---|---|
| `aero` | L'aéronautique et l'espace | MECA, PHYS |
| `auto` | Les voitures, la moto, le sport auto | MECA |
| `transport` | Les trains, les bateaux, les nouvelles mobilités | MECA, ENER |
| `energie` | L'énergie : nucléaire, renouvelables, batteries | ENER, PHYS |
| `environnement` | Le climat, l'environnement, l'eau | VIE, ENER |
| `robot` | Les robots, les drones, l'automatisme | ENER, MECA, NUM |
| `electronique` | L'électronique, les objets connectés | ENER, NUM |
| `dev` | Coder, créer des applis, des jeux vidéo | NUM |
| `ia` | L'IA, les données, la cybersécurité | NUM, MATH |
| `recherche` | Comprendre l'univers : recherche, astrophysique, quantique | PHYS, MATH |
| `chimie` | La chimie, les matériaux, les médicaments, les cosmétiques | CHIM |
| `sante` | La santé, soigner | VIE, HUM |
| `biomed` | La technologie au service de la santé (imagerie, prothèses) | VIE, ENER, PHYS |
| `construction` | Construire : bâtiments, ponts, villes | BAT |
| `design` | Le design, dessiner des objets | CREA, MECA |
| `sonimage` | Le son, l'image, le cinéma, la musique | CREA, ENER |
| `entreprise` | Monter ou diriger un projet, une boîte | ECO |
| `finance` | L'argent, la finance, les marchés | ECO, MATH |
| `enseigner` | Expliquer, transmettre, enseigner | HUM |
| `defense` | L'armée, la défense, la sécurité | HUM, MECA |
| `pilote` | Piloter : avion, hélico, drone | MECA, HUM |
| `sport` | Le sport | HUM, VIE |
| `international` | L'international, voyager, les langues | ECO, HUM |
| `industrie` | L'industrie : fabriquer, faire tourner une usine | MECA, CHIM, ECO |
| `agro` | La nature, l'agriculture, l'alimentation | VIE, CHIM |
| `societe` ✱ | La société, la politique, le droit | ECO, HUM |

Relance : « Parmi ce que tu as coché, sur quoi tu pourrais regarder des vidéos pendant une heure ? »

**`eviter`** (cases) : des maths de plus en plus abstraites · de la physique de plus en plus théorique ✱ · la chimie ✱ · coder toute la journée ✱ · écrire beaucoup · parler en public · les concours, la compétition · une grosse pression pendant des années · être assis devant un écran toute la journée · l'atelier, l'usine, le chantier ✱ · faire du commercial · des études longues.

### Bloc 5 · Le genre d'études

| id | Question | Réponses |
|---|---|---|
| `e_duree` | Combien d'années d'études tu te vois faire ? | Court : 2 ou 3 ans · Bac+3, et on verra · Bac+5 · Long si ça me passionne · Aucune idée |
| `e_prepa` | Une prépa, ça te fait quoi ? (indice : MPSI, PCSI, MP2I, PTSI…) | Ça me motive · Ça me fait peur, mais pourquoi pas · Non merci · ? |
| `e_engage` ✱ | Choisir ton école dès le bac, pour 5 ans au même endroit | Ça me rassure · Pourquoi pas · Je préfère me laisser le temps de choisir · ? |
| `e_fac` | La fac : amphis, beaucoup d'autonomie, peu de suivi au début | Ça me va · Bof · Non · ? |
| `e_alt` | L'alternance : une partie du temps en entreprise, payé, formation gratuite | Ça me tente · Pourquoi pas · Non · ? |
| `e_mob` | Pour tes études, tu te vois… | Chez mes parents · Dans ma région · N'importe où en France · Pourquoi pas à l'étranger |
| `e_budget` | Une école privée (pour une école d'ingénieurs, souvent 8 000 à 12 000 € par an) | Envisageable · Seulement en alternance ou avec une aide · Non, plutôt le public · À voir avec les parents |
| `e_conc` | Un concours écrit, un QCM ou un entretien juste après le bac | Pas de souci · Bof · Je préfère éviter |
| `e_cesure` | Une année pour souffler, bosser ou voyager avant de reprendre | Ça me tente · Peut-être · Non, j'enchaîne |

Indice de `e_engage` : « C'est le principe des écoles d'ingénieurs post-bac, avec leur prépa intégrée. Avec une prépa, un BUT ou une licence, on choisit son école plus tard. »

Relance : « Prépa, école en 5 ans ou BUT : qu'est-ce qui te fait pencher d'un côté ? »

### Bloc 6 · Dans 10 ans

- **`f_scene`** (2 au plus) : concevoir un avion, une voiture, une machine · chercher dans un labo · construire des logiciels, des IA, des jeux · analyser des données, modéliser, conseiller · sur un chantier ou dans une centrale · faire tourner une usine, améliorer la production · mener une équipe et un projet · soigner, accompagner des patients · créer : design, son, image, architecture · en déplacement, à l'étranger · devant une classe · aux commandes : pilote, marin, militaire.
- **`f_val`** (3 au plus) : les 10 valeurs de SES, plus « travailler sur des technos de pointe » ✱ et « agir pour la planète » ✱.
- **`f_metier`**, **`f_flow`**, **`f_non`** : champs libres, comme SES.

Relance : « Qui, autour de toi, a un boulot qui te paraît pas mal ? Qu'est-ce qui te plaît dedans ? »

### Notes aux relances ✱

Sous chacune des 5 relances « À te demander », un lien discret « + Noter une idée » ouvre un petit champ (280 caractères au plus). Le texte apparaît **tel quel, sans interprétation**, dans la synthèse (rubrique « Tes notes », sous la relance qui l'a suscité), dans le PDF et dans la page HTML. Il voyage dans le lien de partage et ne change pas le classement.

### Questions conditionnelles ✱

Un champ `when` décide de l'affichage d'une question : `m_expertes` seulement avec maths expertes, `deja_quoi` seulement si l'élève a des idées. Une question masquée ne compte ni dans le total ni dans les exports.

## 3. Règles de classement

On garde la mécanique de SES : le secteur classe, les contraintes fortes filtrent ou pénalisent fortement, les simples préférences départagent, et les voies ouvertes prennent le relais quand rien ne ressort. S'ajoutent :

- **`s_gen` × généraliste** : chaque fiche a une note `gen` (1 = généraliste, 0 = très spécialisée).
- **`e_engage` × école dès le bac** : « ça me rassure » fait monter les écoles en 5 ans ; « me laisser le temps » fait monter la prépa, le BUT, la licence et les voies qui gardent des portes ouvertes.
- **`inge` × voie ingénieur** : chaque fiche a une note `inge` (1 = mène au diplôme d'ingénieur, 0,5 = poursuite fréquente en école, 0 sinon). « Idée principale » donne un bonus modéré, « pas vraiment mon truc » un malus net.
- **Niveaux** : la moyenne en physique-chimie compte pour les voies très physiques, comme la moyenne en maths pour les voies très matheuses.
- **Options conseillées** : maths expertes absentes alors qu'elles sont conseillées → point d'attention et petit malus. NSI, SI ou SVT conseillées → point d'attention et très petit malus, puisqu'on ne sait pas ce que l'élève a suivi en première.
- **À éviter** : physique théorique, chimie, coder, atelier font baisser les fiches où ces matières pèsent (`phys`, `chim`, `code`, `indus`).
- **Leçons du test SES** :
  1. un bac+2 est pénalisé et signalé si l'élève vise bac+5 ;
  2. l'envie d'étranger fait monter les parcours internationaux ;
  3. une voie très thématique sans aucun signal pour son thème descend nettement et n'entre jamais dans le top 5 ;
  4. chaque centre d'intérêt mène à au moins 2 fiches (test automatique).
- **Diversité** : au plus 2 pistes du même type de formation dans le top 5 ; si le budget n'est pas tranché, au plus 3 écoles payantes dans les 12 premières pistes.

## 4. La synthèse

Elle doit se lire en une minute sur un téléphone, avec le détail replié.

- **Portrait** en 2 ou 3 phrases : les axes dominants, la façon de bosser (dont « garder un profil large » ou « te spécialiser tôt »), les études (dont l'école dès le bac et l'idée d'école d'ingénieurs).
- **Les 3 axes dominants**, les 8 autres repliés. Étiquettes « façon de bosser » et « à éviter ».
- **Tes idées de départ** ✱, si l'élève en a donné (voir « Décisions validées », point 2, et la section 9).
- **Ce qui tiraille** : 2 tensions au plus, choisies dans cette liste.
  1. Bac+5 visé sans prépa ni fac : restent les écoles post-bac (publiques sur dossier comme les INSA, les UT ou Polytech, ou payantes) et le BUT suivi d'une école en admission parallèle.
  2. Aéro, auto ou transports cochés et budget « non » : les écoles spécialisées type ESTACA ou IPSA sont privées, mais des routes publiques existent (INSA, UT, Polytech, prépa puis écoles publiques de l'aéro, BUT GMP puis école, apprentissage).
  3. École d'ingénieurs envisagée mais concours refusés : beaucoup d'admissions post-bac se font sur dossier, et la prépa n'est pas la seule route.
  4. École d'ingénieurs en idée principale, avec des maths abstraites à éviter ou une moyenne fragile en maths : les deux premières années restent très matheuses ; une formation par projets ou un BUT peut mieux convenir pour démarrer.
  5. Envie de se spécialiser tôt, alors qu'aucun domaine ne ressort : une école généraliste laisse 2 ou 3 ans pour choisir.
  6. École d'ingénieurs en idée principale, mais envie de se laisser le temps : prépa, CUPGE ou BUT repoussent le choix de l'école de 2 ou 3 ans.
  7. Prépa tentante sans maths expertes : c'est possible, en travaillant les complexes et l'arithmétique pendant l'été.
  8. Santé ou technologie médicale cochées sans goût pour le vivant : manipulateur radio, audioprothésiste ou ingénieur biomédical sont plus physiques que biologiques.
  9. Envie de concevoir des machines, mais pas de l'atelier : plutôt le bureau d'études que la production.
  10. Pas d'école d'ingénieurs, mais beaucoup d'intérêts techniques : BUT, licences ou BTS permettent de faire de la technique sans ce format.
  11. Repris de SES : bien gagner sa vie et être utile ; l'international mais rester chez ses parents ; la prépa mais pas de pression.
  12. Ajouté pendant le développement : budget « à voir avec les parents » alors que des écoles privées sont dans le top 5 (coût annuel et routes publiques équivalentes).
- **Questions pour aller plus loin** : celles de SES qui valent pour tous, plus des questions propres au combo, par exemple « Tu as cité ESTACA : c'est le domaine (aéro, auto) ou le format (5 ans, des projets) qui t'attire ? » ou « Généraliste ou spécialisée : qu'est-ce qui te ferait trancher ? ».
- **Tes notes** ✱.

## 5. Le catalogue

Des **types de formations**, à la même granularité que SES, avec 3 à 6 exemples d'écoles entre parenthèses, sans base d'établissements. Chaque fiche donne une description, les débouchés, un texte « Avec maths + physique-chimie : », la durée, la sélectivité, le coût réel, la place de l'alternance, les options conseillées et un lien officiel vérifié. Toutes les infos sont vérifiées et datées.

◇ = voie moins connue (rubrique « À côté »), ◆ = voie très thématique (elle descend sans signal pour son thème).

- **Prépas scientifiques** : MPSI · PCSI · MP2I (NSI conseillée) · PTSI · BCPST (SVT conseillée) · ECG maths approfondies (pour la finance ou le commerce).
- **Écoles d'ingénieurs post-bac publiques** : INSA · universités de technologie (UTC, UTT, UTBM) · Polytech, parcours PeiP · La Prépa des INP · prépas intégrées de chimie (CPI, Fédération Gay-Lussac) ◆ · autres écoles publiques en 5 ans (recrutement à vérifier) · Bachelor de technologie Arts et Métiers ◇ (à vérifier).
- **Écoles d'ingénieurs post-bac privées** : aéronautique, spatial, automobile, ferroviaire (ESTACA, IPSA, ELISA Aerospace…) ◆ · généralistes (EPF, ESILV, EIGSI, ESME, Junia HEI, ECAM…) · numérique et électronique (EPITA, EFREI, ESIEA, ISEP, ISEN…) · BTP ◆ · chimie et biotechnologies ◆ · agronomie et environnement (SVT conseillée) ◆ · écoles en apprentissage (CESI, Icam…).
- **Université** : CUPGE · CMI (cursus master en ingénierie) ◇ · doubles licences et licences renforcées (maths-physique, maths-info…) · licences Mathématiques, Physique (ou physique-chimie), Informatique, Sciences pour l'ingénieur, Chimie, Sciences de la Terre ◇, MIASHS ou maths-économie, STAPS ◆ · licence Professorat des écoles ◇ ◆.
- **IUT (BUT)** : GMP · Mesures physiques ◇ · GEII · Informatique · Réseaux et télécoms · Génie civil ◆ · MT2E (transition énergétique) · Chimie · Génie chimique · GIM ◇ · QLIO ◇ · Science des données · MMI ◆ · HSE ◇.
- **BTS** : CIRA ◇ · Électrotechnique · CIEL (ex-Systèmes numériques) · CPI · CRSA · Aéronautique ◆ · Métiers de l'audiovisuel ◆ · Opticien-lunetier ◇ · Géomètre-topographe ◇ · Bâtiment et travaux publics ◆ · Métiers de la chimie · Environnement nucléaire ◇ · Fluides, énergies, domotique. Avec la prépa ATS citée dans les poursuites.
- **Santé** : nouvelle 1re année de santé (fin de PASS et LAS à la rentrée 2027) ◆ · kinésithérapie ◆ · manipulateur en électroradiologie ◇ ◆ · audioprothésiste ◇ ◆ · soins infirmiers ◆.
- **Création** : écoles d'architecture · DN MADE ◆ · design industriel ◇ ◆ · son et image ◇ ◆.
- **Autres voies** : écoles de commerce post-bac ◆ · écoles d'informatique hors titre d'ingénieur (Epitech, 42) · armées, officiers ◇ ◆ · armées, sous-officiers techniciens ◇ ◆ · pilote de ligne ◇ ◆ · marine marchande ◇ ◆ · météo et climat ◇ · études à l'étranger (EPFL, Belgique, Québec…) · bachelors scientifiques sélectifs (Bachelor de l'École polytechnique…) ◇ · Sciences Po et IEP ◇ ◆ · année de césure.

Les 80 fiches ont été rédigées puis vérifiées le 5 octobre 2026, une famille par sous-agent, chacune avec un lien officiel ouvert et contrôlé. Sources et points incertains : `dev/facts_*.md`. Ajouts pendant la vérification : une fiche « Études vétérinaires après le bac » dans Santé ; ESTP retirée des exemples BTP (pas de cycle ingénieur direct après le bac).

**Plus compliqué avec maths + physique-chimie** (rubrique courte) : les prépas TSI, TPC et TB, réservées à d'autres bacs ; la prépa ATS, qui se fait après un bac+2 ; les licences de biologie sans SVT.

## 6. Calendrier

- Le calendrier officiel de Parcoursup 2027 n'était pas publié le 5 octobre 2026 : la page affiche des dates prévisionnelles, d'après le calendrier 2026 (mi-décembre, mi-janvier à mi-mars, début avril, début juin), et le dit.
- En plus : les concours post-bac des écoles d'ingénieurs (Avenir, Puissance Alpha, Geipi Polytech, Advance), dont les vœux passent par Parcoursup, avec les dates d'épreuves 2027 annoncées, et les journées portes ouvertes de novembre à février.
- Dans la note, ce qui se passe hors Parcoursup : l'étranger, certaines écoles privées, les écoles de pilotage.

## 7. Technique

- Pars d'une copie de l'`index.html` de SES : identité visuelle (cahier, bic, fluo), ergonomie mobile, accessibilité, sauvegarde locale avec bandeau « Continuer · Recommencer à zéro », exports, lien de partage.
- Clé de stockage `boussole-maths-physique-v1`, `SCHEMA = 1`, lien de partage en version 1 : on ajoute toujours à la fin de `ORDER`, on ne réordonne jamais.
- Champs de fiche nouveaux : `mpc` (remplace `ses`), `inge`, `conseil`, `alias` (noms reconnus dans les idées de départ), `vie` (mode de vie très marqué), et dans `p` : `phys`, `chim`, `bio`, `code`, `indus`, `gen`, `integ`, `compet`, `minor`.
- Un seul fichier : `index.html` contient le questionnaire, le moteur et le catalogue. Les scripts de `dev/` le lisent directement.
- Exports : réponses multiples séparées par « · » (leçon SES), notes et idées de départ incluses.

## 8. Tests

- Script Node qui exécute le moteur sans navigateur, avec 8 profils fictifs :
  1. aéro et auto, maths expertes, bon niveau, école d'ingénieurs en idée principale, budget à voir, prépa « pourquoi pas », envie de se spécialiser ;
  2. mêmes goûts, mais public uniquement et sans concours ;
  3. théoricien : raisonnement, recherche, prépa motivante ;
  4. concret : études courtes, alternance ;
  5. pas sûr de l'ingénierie, attiré par la santé et la technologie médicale ;
  6. créatif : design, son, architecture ;
  7. beaucoup de « ? » ;
  8. numérique et IA.
- Invariants automatiques : id uniques, un lien par fiche, chaque intérêt mène à au moins 2 fiches, l'aller-retour du lien de partage redonne les mêmes réponses (notes comprises), aucun plantage avec des réponses vides, partielles ou toutes en « ? ».
- Parcours complet dans un navigateur en vue mobile, PDF, page HTML, lien, remise à zéro, puis vérification de la version en ligne.
- Scripts : `node dev/check_cat.js` (catalogue), `node dev/test_profils.js` (moteur, profils, idées de départ, lien), `node dev/test_navigateur.js` (parcours complet dans Chromium, avec Playwright et pdfmake installés).

## 9. Ce qui a changé pendant le développement

- **Sélection et compétition séparées.** Une sélection juste après le bac (écrits, QCM, entretien) et une compétition plus tard (concours de fin de prépa, classement de 1re année) ne jouent pas sur les mêmes réponses : « un concours juste après le bac » vise la première, « éviter les concours, la compétition » vise la seconde. Sans ça, l'INSA disparaissait pour qui refuse les concours.
- **Généralistes.** Une école généraliste couvre aussi, moins directement, les autres domaines techniques cochés : petit bonus par domaine coché qu'elle ne cite pas.
- **Biologie.** Les voies très biologiques (santé, véto, agro) descendent si « le vivant » ne plaît pas, avec un point d'attention.
- **Formations pensées pour d'autres bacs** (bachelor Arts et Métiers, BTS CRSA…) : léger malus et point d'attention « tu y serais en minorité ».
- **Armées** : elles n'entrent en tête qu'avec un intérêt pour la défense ou le pilotage.
- **Marine marchande** : l'intérêt « transports » ne suffit plus à la mettre dans le top 5. Il faut aussi un signal pour la vie qu'elle implique (« aux commandes : pilote, marin, militaire », « en déplacement, à l'étranger », « voyager » ou l'international) ; sinon elle descend un peu, avec le point d'attention « de longues périodes en mer ».
- **Idées de départ, élargies** pour ne pas dépendre d'un nom exact : en plus des près de 470 noms d'écoles, sigles et métiers tirés des fiches, la boussole reconnaît les grandes écoles qu'on vise après une prépa (Centrale, Mines, Supaéro…), environ 230 mots répartis sur les 26 domaines (« fusée », « centrale nucléaire », « ponts », « jeux vidéo »…) et les types d'études (écoles d'ingénieurs, généralistes, prépa, fac, BUT, BTS, alternance). Elle lit le champ « Lesquelles ? » et le métier ou domaine qui a intrigué l'élève. Un texte non reconnu reste affiché tel quel, avec une invitation à chercher dans le catalogue. Rien de tout ça ne change le classement.
- **Lien de partage collé dans un onglet déjà ouvert** : il est lu sans recharger la page.
- **PDF** : les 5 premières pistes peuvent se couper entre l'essentiel et l'accès-débouchés, pour éviter les grandes pages blanches ; les idées de départ ouvrent la deuxième page.
