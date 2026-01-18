// 📝 Fichier de configuration de votre portfolio
// Personnalisez toutes ces informations avec vos vraies données

export const portfolioData = {
  // Informations personnelles
  name: "Kyllian Delbauche",
  title: "Étudiant en Informatique | Développement Logiciel",
  bio: "Passionné par le développement logiciel et les technologies modernes. Du web au système, j'aime concevoir des solutions techniques robustes et apprendre de nouveaux paradigmes de programmation.",

  // URL du CV (placez votre CV dans le dossier public/)
  cvUrl: "/portfolio-kyllian/DELBAUCHE_CV.pdf",

  // Liens sociaux
  social: {
    github: "https://github.com/yukydesu",
    linkedin: "https://linkedin.com/in/kyllian-delbauche-45b489286",
    email: "kylliandelbauchep@gmail.com",
    instagram: "https://instagram.com/kylliandelbauche" // Optionnel
  },

  // Section À propos
  about: {
    description: "Je suis un développeur passionné par la création de solutions modernes et performantes. Au-delà de la technique, je m'intéresse particulièrement à l'informatique dans sa dimension éthique et sociale. Mon objectif est de participer à quelque chose de plus grand, créer des outils qui aident réellement les gens et contribuent à la société. Je souhaite m'investir dans des projets porteurs de sens, loin d'une logique de surproduction consumériste, pour faire de l'informatique un vecteur d'amélioration sociale.",

    // Parcours de formation
    education: [
      {
        year: "2023 - 2026",
        degree: "Bachelier en Informatique",
        school: "Haute École Léonard de Vinci - Woluwe",
        description: "Spécialisation en développement d'applications"
      },
      {
        year: "2025",
        degree: "Erasmus en BUT Informatique - 1 semestre",
        school: "IUT de Montpellier",
        description: "Management et développement d'applications"
      },
      {
        year: "2021",
        degree: "Diplôme de fin d'études secondaires",
        school: "Providence - Woluwe",
        description: "Marketing"
      }
    ],

    // Projets professionnels après le BUT
    careerGoals: [
      {
        title: "Insertion professionnelle",
        description: "Intégrer une entreprise en tant que Développeur Full Stack pour travailler sur des projets innovants."
      }
    ],

    interests: [
      "Project Management",
      "UI/UX Design",
      "Architecture logicielle",
      "Open Source",
      "AI et automatisation",
      "Social Tech"
    ]
  },

  // Compétences techniques
  skills: [
    { name: "Java", level: "avancé" },
    { name: "SQL", level: "intermédiaire" },
    { name: "React", level: "intermédiaire" },
    { name: "JavaScript", level: "intermédiaire" },
    { name: "HTML/CSS", level: "avancé" },
    { name: "C", level: "intermédiaire" },
    { name: "Git", level: "intermédiaire" },
    { name: "Symfony", level: "débutant" },
  ],

  // Section IA dans le workflow de développement
  aiWorkflow: {
    title: "L'IA dans mon workflow de développement",
    subtitle: "Une compétence essentielle pour 2026 et au-delà",
    summary: "Aujourd'hui, l'intelligence artificielle est devenue un outil incontournable pour tout développeur. J'utilise quotidiennement des agents IA pour optimiser mon workflow, du prototypage rapide à la supervision de code complexe.",
    badge: {
      text: "Site créé avec Claude Code",
      icon: "🤖",
      link: "https://claude.ai/code"
    },
    keyPoints: [
      "Supervision d'agents IA pour accélérer le développement",
      "Prototypage rapide d'idées et de maquettes",
      "Compréhension approfondie du fonctionnement des modèles"
    ],
    philosophy: {
      intro: "Ma vision de l'IA en développement repose sur trois piliers fondamentaux :",
      pillars: [
        {
          title: "L'IA comme accélérateur",
          description: "Les modèles d'IA deviennent de plus en plus intelligents et fiables. Ils permettent d'accomplir des tâches complexes avec une précision croissante. En 2026, savoir superviser efficacement ces agents est une compétence hautement valorisée sur le marché."
        },
        {
          title: "Le rôle de superviseur",
          description: "Mon approche consiste à superviser les agents IA plutôt qu'à coder ligne par ligne. Je guide, je contrôle, je valide. Cette méthode me permet d'optimiser considérablement le développement d'applications et de sites web tout en maintenant un haut niveau de qualité."
        },
        {
          title: "Contrôle et validation",
          description: "La supervision ne signifie pas une confiance aveugle. Je relis systématiquement le code généré, je comprends les décisions prises par l'IA, et j'ajuste quand nécessaire. L'IA est un outil puissant, mais le développeur reste le maître d'œuvre."
        }
      ]
    },
    useCases: [
      {
        title: "Prototypage rapide",
        description: "Lorsqu'une idée me vient, je peux rapidement créer une maquette fonctionnelle avec l'aide de l'IA. Cela me permet de valider un concept sans me perdre dans les détails d'implémentation initiaux.",
        example: "Ce portfolio en est la preuve : entièrement développé avec Claude Sonnet 4.5 via Claude Code"
      },
      {
        title: "Développement assisté",
        description: "Pour les projets académiques et personnels, j'utilise l'IA comme un pair programming partner. Elle propose des solutions, je les évalue et je les adapte aux besoins spécifiques du projet.",
        example: "Architecture de composants React, optimisation de requêtes SQL, debugging de code complexe"
      },
      {
        title: "Apprentissage continu",
        description: "Chaque interaction avec l'IA est une opportunité d'apprentissage. Je comprends les patterns qu'elle utilise, j'analyse ses choix architecturaux, et j'enrichis mes propres compétences.",
        example: "Découverte de nouvelles bibliothèques, meilleures pratiques, patterns de design"
      }
    ],
    tools: [
      {
        name: "Claude Code (Sonnet 4.5)",
        usage: "Développement full-stack, architecture, debugging",
        performance: "⭐⭐⭐⭐⭐"
      },
      {
        name: "GitHub Copilot",
        usage: "Complétion de code, suggestions inline",
        performance: "⭐⭐⭐⭐"
      }
    ],
    futureVision: {
      title: "Vision pour le futur du métier",
      content: "Le développeur de demain ne sera pas celui qui code le plus vite, mais celui qui sait orchestrer et superviser intelligemment des systèmes d'IA. Les compétences en supervision d'agents, en validation de code généré, et en compréhension des limites de l'IA seront essentielles. Mon objectif est de me positionner comme un expert en collaboration homme-machine dans le développement logiciel."
    }
  },

  // Compétences BUT 3 - Bilan d'apprentissage
  competences: [
    {
      title: "Réaliser - Adapter des applications sur un ensemble de supports",
      apprentissages: [
        "Choisir et implémenter les architectures adaptées",
        "Faire évoluer une application existante",
        "Intégrer des solutions dans un environnement de production"
      ],
      composantes: [
        "Respecter les besoins décrits par le client",
        "Appliquer les principes algorithmiques",
        "Veiller à la qualité du code et à sa documentation",
        "Choisir les ressources techniques appropriées"
      ],
      projets: ["SAE 5.01", "Pacman", "CAE Projet d'entreprise"]
    },
    {
      title: "Conduire - Participer à la conception et à la mise en œuvre d'un projet SI",
      apprentissages: [
        "Mesurer les impacts économiques, sociétaux et technologiques d'un projet informatique",
        "Intégrer un projet informatique dans le système d'information d'une organisation",
        "Adapter un système d'information"
      ],
      composantes: [
        "Adopter une démarche proactive, créative et critique",
        "Respecter les règles juridiques et les normes en vigueur",
        "Communiquer efficacement avec les différents acteurs d'un projet",
        "Sensibiliser à une gestion éthique, responsable, durable et interculturelle"
      ],
      projets: ["CAE Projet d'entreprise", "SAE 5.01"]
    },
    {
      title: "Collaborer - Manager une équipe informatique",
      apprentissages: [
        "Organiser et partager une veille technologique et informationnelle",
        "Identifier les enjeux de l'économie de l'innovation numérique",
        "Guider la conduite du changement informatique au sein d'une organisation",
        "Accompagner le management de projet informatique"
      ],
      composantes: [
        "Inscrire sa démarche au sein d'une équipe pluridisciplinaire",
        "Accompagner la mise en œuvre des évolutions informatiques",
        "Veiller au respect des contraintes juridiques",
        "Développer une communication efficace et collaborative"
      ],
      projets: ["CAE Projet d'entreprise", "SAE 5.01"]
    }
  ],

  // Projets avec détails complets
  projects: [
    {
      id: 2,
      title: "Pas Cman - Jeu Pacman client-serveur",
      description: "Jeu Pacman multijoueur développé en C avec architecture client-serveur, mémoire partagée et sockets. Projet réalisé dans le cadre du cours de Langage C et Appels Système.",
      tags: ["C", "Sockets", "IPC", "Appels système"],
      github: "https://github.com/arthurdemurger/pas_cman_vinci",
      demo: null,
      image: null,

      // Détails du projet
      type: "Projet académique",
      duration: "6 semaines (Octobre - Novembre 2024)",
      team: "Équipe de 4 étudiants (Groupe 7)",
      context: "Projet réalisé en 2ème année de Bachelier Informatique à la Haute École Léonard de Vinci dans le cadre du cours BINV2181 - Langage C et Appels Système (S4). Objectif : créer un jeu Pacman multijoueur avec architecture client-serveur utilisant les concepts avancés de programmation système.",
      constraints: "Utilisation obligatoire du langage C, gestion de la communication inter-processus (IPC), synchronisation avec sémaphores, architecture client-serveur avec sockets, gestion de plusieurs clients simultanés.",
      methodology: "Architecture basée sur un serveur central (pas_server) gérant la mémoire partagée et les sémaphores. Utilisation de fork/exec pour la gestion des processus, communication via sockets TCP/IP, et envoi périodique des mises à jour via alarm(). Développement collaboratif en équipe de 4.",
      results: [
        "Serveur multi-client fonctionnel avec gestion de la mémoire partagée",
        "Interface graphique réactive avec mise à jour en temps réel",
        "Synchronisation correcte des accès concurrents via sémaphores",
        "Architecture client-serveur robuste documentée (diagrammes d'architecture et de séquence)",
        "Gestion efficace de la communication par sockets et pipes"
      ],
      technologies: ["C", "Sockets TCP/IP", "Mémoire partagée", "Sémaphores", "Fork/Exec", "IPC"],
      skillsWorked: [
        {
          category: "Programmation système",
          details: [
            "Gestion de la mémoire partagée (shm_open, mmap)",
            "Synchronisation avec sémaphores (sem_wait, sem_post)",
            "Utilisation des appels système (fork, exec, alarm)",
            "Communication par sockets TCP/IP (socket, bind, listen, accept)",
            "Communication inter-processus via pipes (dup2)"
          ]
        },
        {
          category: "Architecture logicielle",
          details: [
            "Conception d'une architecture client-serveur",
            "Gestion de multiples clients simultanés (client_handler)",
            "Séparation des responsabilités (serveur, client, interface graphique)",
            "Documentation technique (diagrammes UML)"
          ]
        },
        {
          category: "Travail en équipe",
          details: [
            "Collaboration en équipe de 4 étudiants",
            "Répartition des tâches et développement modulaire",
            "Gestion de version avec Git",
            "Rédaction de documentation technique commune"
          ]
        }
      ],
      visuals: [
        // TODO: Ajouter des captures d'écran du jeu et des diagrammes
        // { type: "image", url: "/portfolio-kyllian/projects/pacman-architecture.png", caption: "Diagramme d'architecture du système client-serveur" },
        // { type: "image", url: "/portfolio-kyllian/projects/pacman-sequence.png", caption: "Diagramme de séquence d'une partie" },
        // { type: "image", url: "/portfolio-kyllian/projects/pacman-gameplay.png", caption: "Interface graphique du jeu en action" },
        // { type: "gif", url: "/portfolio-kyllian/projects/pacman-demo.gif", caption: "Démonstration du gameplay multijoueur" }
      ]
    },
    {
      id: 1,
      title: "TerraBio - Plateforme de vente de produits locaux",
      description: "Plateforme web de gestion complète pour une coopérative locale de producteurs. Système de vente en circuit court avec workflow d'approbation des lots, gestion des réservations, et outils statistiques pour les gestionnaires.",
      tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Docker", "Azure"],
      github: "https://gitlab.com/e-vinci/cae-projects/2025-cae-projects/cae-group-07",
      demo: "https://terrabio-gxd4fhhnezexdzd4.centralus-01.azurewebsites.net",
      image: null,

      type: "Projet académique - CAE",
      duration: "12 semaines (Septembre - Décembre 2024)",
      team: "Équipe de 5 étudiants (Groupe 07)",
      context: "Projet réalisé en 3ème année de BUT Informatique dans le cadre du cours Conception d'Applications en Entreprise (S5). Mission : développer une plateforme digitale pour une coopérative locale regroupant producteurs, clients et gestionnaires. Finalité : présentation orale du site au client avec support slides démontrant les fonctionnalités développées.",
      constraints: "Architecture microservices containerisée, déploiement cloud Azure avec haute disponibilité, pipeline CI/CD automatisé GitLab, authentification sécurisée multi-rôles (Client, Producteur, Bénévole, Gestionnaire), stockage cloud des images produits, tests automatisés et qualité de code.",
      methodology: "Méthodologie Agile (sprints 2 semaines, daily stand-ups, retrospectives). Gestion GitLab complète : feature branches, merge requests avec code reviews, CI/CD pipeline automatisé (tests → build → deploy). Architecture 3-tier : Frontend React TypeScript, API REST Spring Boot, PostgreSQL. Collaboration en équipe de 5 avec répartition des rôles (backend, frontend, DevOps, documentation).",
      results: [
        "Plateforme déployée en production sur Azure",
        "Système de gestion de lots avec workflow producteur → gestionnaire → client",
        "Authentification JWT avec 4 rôles utilisateurs et permissions granulaires",
        "Dashboard statistiques temps réel (ventes, stocks, réservations, revenus)",
        "Pipeline CI/CD GitLab automatisé (tests, build Docker, deploy Azure)",
        "Architecture microservices : API + Frontend + DB + Nginx reverse proxy",
        "Présentation client réussie avec démonstration live des fonctionnalités"
      ],
      technologies: [
        "React 18",
        "TypeScript",
        "Material-UI (MUI)",
        "Spring Boot 3",
        "Java 21",
        "Spring Security",
        "PostgreSQL 16",
        "Docker Compose",
        "Azure Web App",
        "Azure Blob Storage",
        "GitLab CI/CD",
        "Nginx",
        "JPA/Hibernate",
        "Maven",
        "Vite"
      ],
      skillsWorked: [
        {
          category: "Développement Backend (Spring Boot)",
          details: [
            "Développement API REST 30+ endpoints (Controllers, Services, Repositories)",
            "Authentification JWT avec Spring Security et BCrypt",
            "Gestion des sessions avec tokens access et refresh",
            "Modélisation BDD relationnelle complexe (10+ entités, relations 1:N et N:M)",
            "ORM avec Spring Data JPA et Hibernate",
            "Validation des données et gestion des erreurs (custom validators)",
            "Intégration Azure Blob Storage pour upload d'images"
          ]
        },
        {
          category: "Développement Frontend (React + TypeScript)",
          details: [
            "Application React 18 avec TypeScript pour typage statique",
            "Gestion d'état globale avec Context API (Auth, Cart, Products, Reservations)",
            "Routing avec React Router et routes protégées par rôle",
            "Interface Material-UI (MUI) responsive et accessible",
            "Communication API avec Axios et gestion des erreurs",
            "Formulaires complexes avec validation côté client"
          ]
        },
        {
          category: "DevOps et Intégration Continue",
          details: [
            "Pipeline CI/CD GitLab automatisé : tests → build → deploy",
            "Containerisation avec Docker (multi-stage builds)",
            "Orchestration Docker Compose (4 services : API, Frontend, DB, Nginx)",
            "Déploiement automatique sur Azure Web App",
            "Configuration multi-environnements (.env dev/prod)",
            "Health checks et monitoring des conteneurs"
          ]
        },
        {
          category: "Architecture et Conception",
          details: [
            "Architecture microservices avec reverse proxy Nginx",
            "Modélisation domaine métier (workflows multi-étapes)",
            "Conception API RESTful avec bonnes pratiques HTTP",
            "RBAC : 4 rôles avec permissions granulaires",
            "Diagrammes UML (cas d'utilisation, entités-relations, séquence)"
          ]
        },
        {
          category: "Méthodologie Agile et Travail d'équipe",
          details: [
            "Sprints de 2 semaines avec daily stand-ups et retrospectives",
            "Utilisation GitLab : feature branches, merge requests, code reviews",
            "Répartition des tâches en équipe de 5 (backend, frontend, DevOps)",
            "Tests automatisés (JUnit backend, Vitest frontend, Playwright E2E)",
            "Préparation et présentation orale au client avec slides"
          ]
        }
      ],
      visuals: [
        // TODO: Ajouter des captures d'écran de l'application
        // { type: "image", url: "/portfolio-kyllian/projects/terrabio-home.png", caption: "Page d'accueil avec carrousel des produits" },
        // { type: "image", url: "/portfolio-kyllian/projects/terrabio-products.png", caption: "Catalogue de produits avec filtres et recherche" },
        // { type: "image", url: "/portfolio-kyllian/projects/terrabio-dashboard.png", caption: "Tableau de bord gestionnaire avec statistiques" },
        // { type: "image", url: "/portfolio-kyllian/projects/terrabio-architecture.png", caption: "Diagramme d'architecture microservices" },
        // { type: "gif", url: "/portfolio-kyllian/projects/terrabio-demo.gif", caption: "Démonstration du parcours utilisateur complet" }
      ]
    },
    {
      id: 3,
      title: "SAE 5.D.01 - Simulation de Gestion d'Entreprise 3D",
      description: "Jeu de simulation économique multijoueur combinant une API REST Symfony, une interface Vue.js et un monde Minecraft (Luanti). Les joueurs gèrent des entreprises virtuelles : achat de zones, construction d'usines, production de ressources et commerce sur une marketplace.",
      tags: ["Symfony", "Vue.js", "PHP", "Docker", "MySQL", "API Platform", "Tailwind"],
      github: null,
      demo: null,
      image: null,

      type: "Projet académique - SAE",
      duration: "12 semaines (Septembre - Décembre 2024)",
      team: "Équipe de 7 étudiants",
      context: "Projet réalisé en 3ème année Erasmus à l'IUT de Montpellier (S5). Objectif : développer une simulation de gestion d'entreprise intégrant un monde 3D Minecraft, une API REST complète et une interface web moderne. Les joueurs incarnent des chefs d'entreprise et doivent gérer zones, bâtiments, production et commerce.",
      constraints: "Architecture microservices avec Docker, backend Symfony obligatoire, base de données relationnelle complexe (11 tables), authentification JWT stateless, intégration d'un moteur de jeu 3D (Luanti/Minetest), documentation technique exhaustive requise.",
      methodology: "Architecture microservices avec 4 services Docker (Frontend Vue.js, Backend Symfony, MySQL, PHPMyAdmin). Modélisation de 16 entités Doctrine avec relations complexes et héritage JOINED. Développement API-first avec API Platform. Documentation de toutes les décisions architecturales (80,000+ lignes de documentation).",
      results: [
        "API REST complète avec 16 entités et 13 repositories",
        "Base de données relationnelle avec 11 tables et 3 migrations",
        "Authentification JWT fonctionnelle avec refresh tokens",
        "Interface Vue.js avec 10 composants et design Minecraft",
        "Infrastructure Docker Compose avec 4 services orchestrés",
        "Documentation technique exhaustive (7 fichiers, 80,000+ lignes)",
        "Système de gestion d'entreprises, bâtiments, employés et inventaire"
      ],
      technologies: [
        "Symfony 7.3",
        "PHP 8.2",
        "API Platform 4.2",
        "Doctrine ORM",
        "Vue.js 3",
        "Vite",
        "Tailwind CSS",
        "MySQL 8.0",
        "Docker",
        "Lexik JWT",
        "Axios",
        "Luanti (Minetest)"
      ],
      skillsWorked: [
        {
          category: "Backend & Architecture",
          details: [
            "Conception d'une API REST avec Symfony 7 et API Platform",
            "Modélisation de base de données complexe (11 tables avec héritage JOINED)",
            "Authentification stateless avec JWT et refresh tokens",
            "State Processors pour logique métier personnalisée",
            "Doctrine ORM avec relations complexes (OneToMany, ManyToOne)",
            "Migrations versionnées et gestion de schéma"
          ]
        },
        {
          category: "Frontend moderne",
          details: [
            "Développement avec Vue.js 3 Composition API",
            "Routing avec Vue Router et guards d'authentification",
            "Design responsive avec Tailwind CSS",
            "Intégration API avec Axios et gestion d'états",
            "Validation formulaires côté client",
            "Thématisation Minecraft cohérente"
          ]
        },
        {
          category: "DevOps & Infrastructure",
          details: [
            "Orchestration de 4 services avec Docker Compose",
            "Configuration multi-environnements (dev/staging/prod)",
            "Health checks et dépendances entre services",
            "Volumes persistants pour données",
            "Génération de certificats SSL auto-signés",
            "Configuration Nginx et reverse proxy"
          ]
        },
        {
          category: "Modélisation & Conception",
          details: [
            "Modélisation UML et diagrammes d'architecture",
            "Design patterns (Repository, Inheritance, State Processor)",
            "Système économique de jeu (production, commerce, marketplace)",
            "Gestion de complexité (16 entités interconnectées)",
            "Documentation de décisions architecturales",
            "Conception API RESTful avec OpenAPI/Swagger"
          ]
        },
        {
          category: "Travail collaboratif",
          details: [
            "Équipe de 7 développeurs",
            "Décisions architecturales collégiales",
            "Documentation technique pour partage de connaissances",
            "Gestion de version avec Git",
            "Répartition des tâches et coordination"
          ]
        }
      ],
      visuals: [
        // TODO: Ajouter des captures d'écran de l'application et diagrammes
        // { type: "image", url: "/portfolio-kyllian/projects/sae-architecture.png", caption: "Diagramme d'architecture microservices (4 services Docker)" },
        // { type: "image", url: "/portfolio-kyllian/projects/sae-database.png", caption: "Schéma relationnel de la base de données (11 tables)" },
        // { type: "image", url: "/portfolio-kyllian/projects/sae-dashboard.png", caption: "Tableau de bord Vue.js avec design Minecraft" },
        // { type: "image", url: "/portfolio-kyllian/projects/sae-companies.png", caption: "Interface de gestion des entreprises" },
        // { type: "image", url: "/portfolio-kyllian/projects/sae-swagger.png", caption: "Documentation API Swagger auto-générée" },
        // { type: "gif", url: "/portfolio-kyllian/projects/sae-demo.gif", caption: "Démonstration du système de création d'entreprise" }
      ]
    },
  ]
}
