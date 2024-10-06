**1. Cadrer un Projet et Conceptualiser une Solution Web**

Cahier des charges

**Introduction**

   Projet :

    le projet s'appelle portfoliov2 en comparaison au portfolio de la version 1 fait en html / css et javascript

    Description : portfolio contenant l'ensemble de mes compétences, , de tout ce que j'ai accompli durant mes 2 années à Epitech.

**Contexte**:

    Le projet répond au besoin des personnes voulant visualiser le portfolio , il contient toute ce que j'ai accomplie durant c'est 2 année sous forme de différent section permettant au personne d'en savoir plus sur mon parcours.

**Objectif généraux :**
 
    Les buts de ce projet est de présenter les compétences, les expériences , les centre d'intérêt , les hobbies , les langues , une courte description de qui je suis et ce que je fait actuellement , les projets fait à epitech durant mes 2 années

**2. Objectifs et Enjeux**
   
    Objectif spécifiques : L'objectif de ce portfolio est d'avoir des animation fait avec framer-motion pour avoir une bonne fluidité d'animation et un pilotage complet , de mettre en avant ses compétences et ses expériences
    Enjeux: Créer un portfolio en react , ajouter des animation avec framer-motion.

**Spécifications Fonctionnelles**

**Structure du site:**

    - Section Compétences : Cette section regroupe toute les compétences que j'ai acquis durant c'est 2 années.

    - Section Expériences : Cette section comporte toute les expérience que j'ai réaliser que ce soit en formation ou en stage , ou en entreprise.

    - Section Contact: Section permetttant de me contacter.

    - Section A propos de moi: Section contenant les informations de la personnes.

    - Section projet : Section contenant 6 de mes projets ainsi que le language associer et le lien github.
  
    -Section CV: Cv téléchargeable.

**Fonctionnalités :**
    
     Téléchargement de cv , implémentation d'un envoi de message via un formuaire de contact ,mise en place d'un modal permettant d'ajouter des projets à la section , utilisation de firebase

**Interface utilisateur:** 

    utilisation de figma

**4. Spécifications Techniques:**

    Technlogies à utiliser : J'utilise React pour le front-end et firebase pour le back-end , pour le design j'utilise tailwind css.
    Compatibilité: adaptabilité mobile (responsive design)
    Hébergement: Aucune pour l'instant
    Sécurité : Protection contre les failles de sécurité 5. Contraintes et Limites
    Budget: Aucun
    Délais : 20/30 min , 1H
    Contraintes techniques: Utilisation de React 6. Planification et Phases du Projet

**Phases du développement:**

    j'ai d'abord analyser quesqu'un portfolio doit contenir , j'ai créer différente section.
    Calendrier : Tous les jours je développe une fonctionnalités sur le portfolio , ça peut généralement me prendre 10/15/20 min selon la feature
    Répartition des tâches : Le projet est réaliser individuellement

**7.  Livrables Attendues**

    Portfolio final : 
    
    Le produit est un portfolio développer avec react et héberger en ligne sur une plateforme spécial , il est accessible en ligne.

    Documentation technique : 
    
    Le code est répartie en plusieurs composants , il y'a un composant qui permet de zoomer une compétence au survol , une detection d'image ou d'icone envoyé en props dans le composant , un systeme de gallerie permettant de visualiser les images lier au projet , boutton de suppression du projet 
    Les technologies sont React , Firebase , tailwindcss ,
    librairie utilisé : 
      - FontAwsomeIcon
      - sweetalert2
      - yet-another-react-lightbox
      - react-hot-toast
    Systeme de message via l'api web3form 
    
**Rapport de projet :**

    - Initialisation du portoflio-v2 avec npx create-react-app
    - Ajout de multiple section pour le portfolio
    - Ajout d'une homepage
    - Avancement du portfolio (Changement de couleur d'icone , ajout d'icone avec fontAwesome)
    - Ajout d'une section compétences contenant toute mes compétences
    - Ajout d'une icone svg pour la section compétence et ajout de multiple composant pour la hiérarchie.
    - Ajout d'une nouvelle methode pour faire en sorte qu'au survol des icones , elles se zoom (scale)
    - Refonte de plusieurs sections : contacte moi , centre d'intérêt , langues , project , diplome et expérience
    - Ajout de la configuration firebase , et du fichier .env
    - Ajout d'un .gitignore for ignorer ces fichiers (.env)
    - Ajout d'une variable d'environnement , et de la configuration pour firebase.
    - Ajout de deux librairie (@@headlessui/react et @heroicons/react)
    - Ajout d'un composant Projects permettant de créer un projet dynamique en mettant les information dans le formulaire
    - Création du fichier firebaseConfig.js (Object contant les configuration permettant d'interagir avec firebase)
    - Méthode permettant de lire tous les projets
    - Refonte de la section (ajout de style)
    - Modification du fichier README.md
    - Ajout de plusieurs icones provenant du site svgrepo.com (Modification de la taille des images)
    - Ajout du lien vers mon cv au clique du boutton.

**8. Critères de Réussite**

   Indicateurs de performance : Critères pour évaluer le succès du projet (vitesse de chargement, absence de bugs, satisfaction des utilisateurs).
   Tests à effectuer : Liste des tests à réaliser pour valider les fonctionnalités, la compatibilité, et les performances.

**9. Ressources Nécessaires**

   Équipement : Outils logiciels et matériels nécessaires (ordinateurs, éditeurs de code, accès internet).
   L'éditeur de code utilisé est VSCODE , nous somme connecté au réseaux epitech , le projet est développer en REACT
   Compétences : Connaissances requises (développement web, design UX/UI, gestion de projet).
   Temps : 1h / 2h

**10. Risques et Gestion des Risques**
   
    Risques identifiés : Difficultés possibles (retards, problèmes techniques, bugs).
    Plans de mitigation : Solutions prévues pour gérer les risques (tests réguliers, révisions de planning).

 - Rédaction des spécifications techniques :

 - Déploiement d'un environnement de travail avec des outils de versionnage, de partage et de collaboration/communication :

 - Réalisation d'une maquette :

 - Identification des fonctionnalités à développer pour structurer l'architecture de la solution web et de la base de données :

 - Rédaction d'une présentation pour présenter les choix techniques, les maquettes et le schéma de la solution web :

**2. Développer une Solution Web**

 * Développement du prototype de la solution web

 * Rédaction du code de la solution en transcrivant les fonctionnalités du Cahier des Charges

 * Intégration des différents éléments de la solution web

 * Implémentation de la partie "front-end"

 * Implémentation de la logique et de la base de données

 * Implémentation des règles d'authentification

 * Implémentation d'un plan de tests en concevant les différents tests unitaires et d’intégration

 * Déploiement d'une application web en utilisant un serveur

**3. Déployer un Système d’Assurance Qualité tout au long du Cycle de Vie d’une Solution Web**

 * Rédaction d'une documentation technique à destination des équipes parties prenantes :

 * Rédaction d'une documentation utilisateur pour apporter un support aux utilisateurs :

 * Monitoring du lancement d'une solution web, en recueillant les retours utilisateurs :

 * Identification des améliorations qualitatives et de performance d'une solution web :

 * Analyse de la qualité de l’ergonomie et de l’accessibilité de la solution :

 * Rédaction d'un document argumentatif en listant des propositions d'améliorations :
