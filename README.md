# Boussole Maths-Physique

Un questionnaire d'orientation post-bac pour les élèves de terminale générale avec les spécialités **maths et physique-chimie** (avec ou sans maths expertes). En une dizaine de minutes, l'élève fait le tour de ce qui existe après le bac et repart avec des pistes expliquées, pas avec un verdict.

**En ligne : https://kerhogo.github.io/boussole-maths-physique/**

C'est la deuxième boussole « ultra-spécifique », après [Boussole SES-Maths](https://kerhogo.github.io/boussole-ses-maths/), avant une version pour toutes les combinaisons de spécialités.

## Ce que fait la page

- **Questions** : 6 blocs (où tu en es, les cours, ta façon de bosser, ce qui t'attire, le genre d'études, dans 10 ans). « ? » est une vraie réponse. Deux questions n'apparaissent que si elles ont un sens (l'option maths expertes, les idées déjà en tête). Sous les relances « À te demander », l'élève peut noter une idée : elle est reprise telle quelle dans les résultats.
- **Pistes** : un portrait en quelques phrases, les axes dominants, ce qui tiraille, les idées de départ comparées aux pistes, le top 5 avec le pourquoi et les points d'attention de chaque piste, d'autres pistes à creuser, des voies moins connues, des questions pour aller plus loin, les notes et les prochaines étapes.
- **Tout ce qui existe** : 80 fiches de formations (prépas, écoles d'ingénieurs publiques et privées, université, BUT, BTS, santé, création, autres voies), avec durée, sélectivité, coût, alternance, options conseillées et lien vers une source officielle.
- **Garder une trace** : PDF, page HTML autonome (toutes les réponses comprises) et lien de partage.

## Les réponses

- Elles restent **sur l'appareil** (stockage local du navigateur). Rien n'est envoyé à un serveur.
- Le **lien de partage** contient les réponses dans la partie de l'adresse après `#`, que le navigateur n'envoie jamais au serveur. Ouvert sur un autre appareil, il affiche les mêmes pistes ; s'il y a déjà d'autres réponses, la page demande avant de les remplacer.
- Seuls appels extérieurs : les polices (Google Fonts) et, au clic sur « Télécharger en PDF », la bibliothèque pdfmake (jsDelivr).

## Comment les pistes sont choisies

- Les réponses construisent un profil sur 11 axes (maths, physique, mécanique-aéro, énergie-électronique, numérique, chimie, vivant, construction, création, entreprise, humain), plus des préférences de style (cadre ou autonomie, concret ou théorique, profil large ou spécialisation…).
- Chaque fiche a ses poids sur ces axes, ses centres d'intérêt et ses caractéristiques (encadrement, durée, coût, sélection, alternance, part de maths, de physique, de biologie…). Le score combine les affinités, puis les contraintes (budget, concours, durée, mobilité, ce que l'élève veut éviter) font monter ou descendre.
- Garde-fous : au plus 2 pistes du même type dans le top 5 ; une voie très thématique (santé, armée, design…) n'y entre jamais sans un signal pour son thème ; tant qu'une école privée n'est pas « envisageable », au plus 3 écoles payantes dans les 12 premières.
- Les idées de départ (« ESTACA », « une généraliste », « ingénieur dans l'aéro »…) sont reconnues par les noms d'écoles, les sigles, les métiers, les domaines et les types d'études, puis situées dans les pistes. Elles ne changent pas le classement.

Le détail des règles est dans [`DESIGN.md`](DESIGN.md).

## Contenu vérifié

Les fiches ont été vérifiées le **5 octobre 2026**, chacune avec un lien officiel (Onisep, Parcoursup, sites des écoles et des concours). Les sources et les points incertains sont dans `dev/facts_*.md`. Le calendrier officiel de Parcoursup 2027 n'était pas encore publié : la page affiche des dates prévisionnelles et le dit. À revérifier en décembre 2026.

## Développement

Tout tient dans **`index.html`** (HTML, CSS et JavaScript, sans dépendance ni étape de construction), servi par GitHub Pages depuis la branche `main`.

Tests, avec Node :

```
node dev/check_cat.js        # catalogue : clés, axes, liens, chaque centre d'intérêt mène à au moins 2 fiches
node dev/test_profils.js     # moteur : 8 profils fictifs, attentes ciblées, idées de départ, lien de partage
node dev/test_navigateur.js  # parcours complet dans Chromium en vue téléphone (npm i playwright pdfmake@0.2.23)
```

À respecter quand on modifie les questions :

- les réponses sont enregistrées sous la clé `boussole-maths-physique-v1` ; augmenter `SCHEMA` si une question change de sens ;
- le lien de partage suit un ordre figé (`ORDER_V1`) : une nouvelle question s'ajoute **à la fin**, dans une version 2 de l'ordre, sans jamais réordonner, pour que les liens déjà envoyés restent lisibles.

## Versions

- **1.0 (5 octobre 2026)** : première version.
