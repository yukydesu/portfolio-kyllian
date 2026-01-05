// 📝 Fichier de configuration de votre portfolio
// Personnalisez toutes ces informations avec vos vraies données

export const portfolioData = {
  // Informations personnelles
  name: "Kyllian Delbauche",
  title: "Développeur Web Full Stack",
  bio: "Passionné par le développement web moderne, je crée des applications performantes et élégantes avec React et les technologies modernes.",

  // URL du CV (placez votre CV dans le dossier public/)
  cvUrl: "/portfolio-kyllian/DELBAUCHE_CV.pdf",

  // Liens sociaux
  social: {
    github: "https://github.com/yukydesu",
    linkedin: "https://linkedin.com/in/kyllian-delbauche-45b489286",
    email: "kylliandelbauchep@example.com",
    instagram: "https://instagram.com/kylliandelbauche" // Optionnel
  },

  // Section À propos
  about: {
    description: "Je suis un développeur passionné par la création d'expériences web modernes et performantes. J'aime apprendre de nouvelles technologies et relever des défis techniques.",

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
      "Développement Frontend",
      "UI/UX Design",
      "Architecture logicielle",
      "Open Source"
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

  // Compétences BUT 3 - Bilan d'apprentissage
  competences: [
    {
      title: "Réaliser une application",
      apprentissages: [
        "Développer des applications informatiques simples",
        "Partir des exigences et aller jusqu'à une application complète",
        "Utiliser des approches de développement adaptées",
        "Maîtriser la qualité en développement"
      ],
      composantes: [
        "Concevoir et développer des applications sécurisées et robustes",
        "Utiliser des frameworks et bibliothèques modernes",
        "Optimiser les performances des applications",
        "Implémenter des tests unitaires et d'intégration"
      ],
      projets: ["SAÉ 5.01", "Projet personnel", "Stage BUT 3"]
    },
    {
      title: "Travailler dans une équipe informatique",
      apprentissages: [
        "Identifier ses aptitudes pour travailler dans une équipe",
        "Situer son rôle et ses missions au sein d'une équipe informatique",
        "Manager une équipe informatique",
        "Acquérir, développer et exploiter les aptitudes pour travailler en équipe"
      ],
      composantes: [
        "Gérer un projet avec une méthodologie agile",
        "Collaborer efficacement avec Git et les outils de versioning",
        "Communiquer et documenter son travail",
        "Participer aux revues de code et code reviews"
      ],
      projets: ["SAÉ en équipe", "Nuit de l'Info", "Projet collaboratif"]
    },
    {
      title: "[Votre compétence de spécialité]",
      apprentissages: [
        "Apprentissage critique 1 de votre parcours",
        "Apprentissage critique 2 de votre parcours",
        "Apprentissage critique 3 de votre parcours",
        "Apprentissage critique 4 de votre parcours"
      ],
      composantes: [
        "Composante essentielle 1",
        "Composante essentielle 2",
        "Composante essentielle 3",
        "Composante essentielle 4"
      ],
      projets: ["SAÉ spécialité", "Projet BUT 3"]
    }
  ],

  // Projets avec détails complets
  projects: [
    {
      id: 1,
      title: "Pacman",
      description: "Un jeu Pacman développé en C mettant en avant les appels système et la gestion de la mémoire.",
      tags: ["C"],
      github: "https://github.com/votre-username/portfolio",
      demo: "https://votre-portfolio.com",
      image: null,

      // Détails du projet
      type: "Projet personnel",
      duration: "2 semaines",
      team: "Individuel",
      context: "Création d'un portfolio personnel pour valoriser mes compétences et projets réalisés durant mon BUT Informatique.",
      constraints: "Respecter les bonnes pratiques React, créer un design moderne et responsive, optimiser les performances.",
      methodology: "Développement itératif avec focus sur l'UX/UI. Utilisation de Vite pour un développement rapide et d'un design system cohérent.",
      results: [
        "Site web responsive et performant",
        "Temps de chargement < 2 secondes",
        "Interface intuitive et moderne",
        "Code structuré et maintenable"
      ],
      technologies: ["React", "Vite", "CSS3", "JavaScript ES6+"],
      skillsWorked: [
        {
          category: "Développement Frontend",
          details: [
            "Composants React réutilisables",
            "Gestion du state avec hooks",
            "CSS moderne avec variables CSS",
            "Responsive design mobile-first"
          ]
        },
        {
          category: "Bonnes pratiques",
          details: [
            "Architecture de projet claire",
            "Code lisible et documenté",
            "Optimisation des performances",
            "Accessibilité web (WCAG)"
          ]
        }
      ],
      visuals: [
        // Ajoutez vos captures d'écran/vidéos plus tard
        // { type: "image", url: "/projects/portfolio-1.png", caption: "Page d'accueil" },
        // { type: "image", url: "/projects/portfolio-2.png", caption: "Section projets" }
      ]
    },
    {
      id: 2,
      title: "Projet SAÉ 5.01",
      description: "Description de votre projet SAÉ. Expliquez le contexte académique et les objectifs.",
      tags: ["React", "API", "CSS", "Node.js"],
      github: "https://github.com/votre-username/sae-501",
      demo: null,
      image: null,

      type: "Projet académique (SAÉ)",
      duration: "6 semaines",
      team: "Équipe de 4 étudiants",
      context: "Projet réalisé dans le cadre du BUT 3. Objectif : développer une application web complète avec backend et frontend.",
      constraints: "Délais serrés, travail en équipe, méthodologie Agile imposée, technologies spécifiques à utiliser.",
      methodology: "Méthode Agile Scrum avec sprints de 2 semaines. Daily meetings, rétrospectives et démonstrations régulières.",
      results: [
        "Application fonctionnelle livrée dans les délais",
        "API REST documentée avec Swagger",
        "Interface utilisateur intuitive",
        "Tests unitaires et d'intégration"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Jest"],
      skillsWorked: [
        {
          category: "Développement Full Stack",
          details: [
            "Création d'une API REST avec Node.js/Express",
            "Intégration frontend/backend",
            "Gestion de base de données MongoDB",
            "Authentification et sécurité"
          ]
        },
        {
          category: "Travail en équipe",
          details: [
            "Méthodologie Agile/Scrum",
            "Utilisation de Git en équipe",
            "Code reviews et pair programming",
            "Communication et documentation"
          ]
        }
      ],
      visuals: []
    },
    {
      id: 3,
      title: "CAE Projet d'entreprise",
      description: "Projet de groupe",
      tags: ["JavaScript", "React", "Git"],
      github: null,
      demo: null,
      image: null,

      type: "CAE Projet d'entreprise",
      duration: "10 semaines",
      team: "Équipe de développement (5 personnes)",
      context: "Stage réalisé chez [Nom de l'entreprise] dans le cadre du BUT 3. Mission : participer au développement de [projet].",
      constraints: "Environnement professionnel, respect des standards de l'entreprise, travail sur un projet en production.",
      methodology: "Intégration dans une équipe de développement existante. Participation aux daily meetings, code reviews et sprints.",
      results: [
        "Fonctionnalités développées et mises en production",
        "Intégration réussie dans l'équipe",
        "Acquisition de compétences professionnelles",
        "Rapport de stage rédigé"
      ],
      technologies: ["À compléter selon votre stage"],
      skillsWorked: [
        {
          category: "Compétences professionnelles",
          details: [
            "Travail en environnement professionnel",
            "Communication avec le client/PO",
            "Respect des délais et livrables",
            "Collaboration en équipe de développement"
          ]
        },
        {
          category: "Compétences techniques",
          details: [
            "À compléter selon votre stage",
            "Technologies utilisées en entreprise",
            "Bonnes pratiques professionnelles",
            "Outils de l'entreprise"
          ]
        }
      ],
      visuals: []
    }
  ]
}
