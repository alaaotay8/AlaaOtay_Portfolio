import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Expérience',
  description: 'Vous pouvez télécharger mon CV ci-dessous.',
  download_button: 'Télécharger le CV',
  present: 'Présent',
  month: 'mois | mois',
  year: 'an | ans',
  list: [
    {
      company: 'Novalize (Nexilan Agency) – Suisse',
      position: 'Stagiaire Ingénieur Backend – Télétravail',
      url: '#',
      startDate: '2025-07',
      endDate: '2025-09',
      highlights: [
        'Développement et maintenance de fonctionnalités backend pour des applications orientées client.',
        'Travail avec Supabase (PostgreSQL, Auth, Storage) pour les services backend et la gestion des données.',
        "Intégration d'APIs REST et optimisation des performances backend.",
        'Collaboration avec des équipes distribuées dans des workflows Agile.',
        'Renforcement des pratiques DevOps et développement orienté production.',
        "Gestion des responsabilités pendant un chevauchement de 2 semaines avec un autre stage, améliorant la gestion du temps, la priorisation et l'adaptabilité."
      ],
      description:
        "Contribution au développement backend au sein d'une agence digitale suisse offrant des solutions sur mesure à l'international. Focus : Ingénierie backend, Supabase, APIs, fondamentaux DevOps, livraison de projets professionnels."
    },
    {
      company: '5DS – France',
      position: 'Stagiaire Ingénieur Backend – PFA',
      url: '#',
      startDate: '2025-06',
      endDate: '2025-08',
      highlights: [
        'Conception et développement de microservices FastAPI scalables avec PostgreSQL.',
        "Implémentation d'une authentification sécurisée avec JWT & OAuth2 (Google / LinkedIn) et RBAC.",
        "Construction de services d'export Excel asynchrones avec suivi de progression en temps réel via WebSockets.",
        'Développement de tableaux de bord comptables en temps réel utilisant une architecture événementielle (PostgreSQL LISTEN / NOTIFY).',
        'Conteneurisation des services avec Docker & Docker Compose et intégration de pipelines CI/CD.',
        'Assurance qualité et sécurité du code avec SonarQube, PEP8 et les bonnes pratiques OWASP.',
        'Travail en environnement Agile Scrum avec Jira & Confluence.'
      ],
      description:
        "Travail sur ComptaHub, une plateforme SaaS de comptabilité prête pour la production, en se concentrant exclusivement sur l'architecture microservices backend. Stack technique : FastAPI, Python, PostgreSQL, SQLAlchemy, REST, WebSockets, Docker, GitLab CI, Grafana."
    },
    {
      company: 'ISIMM Coding Night',
      position: 'Extracteur de CV Structuré – FastAPI',
      url: '#',
      startDate: '2025-04',
      endDate: '2025-04',
      highlights: [
        "Développement d'une application FastAPI pour extraire les données des CV via OCR et LLMs.",
        'Intégration de Tesseract OCR avec fallback Hugging Face.',
        "Utilisation d'OpenAI et de schémas JSON pour la génération de profils.",
        'Ajout de validation automatique et mécanismes de relance.'
      ],
      description:
        "Création d'un outil intelligent pour l'extraction automatisée et la génération de profils à partir de CV, en utilisant des bibliothèques Python modernes et des API cloud."
    },
    {
      company: 'Yes2Dev',
      position: "Stagiaire Développeur Web",
      url: '#',
      startDate: '2024-07',
      endDate: '2024-08',
      highlights: [
        "Développement d'un système de gestion de restaurant (Laravel, MySQL, Bootstrap).",
        'Tableau de bord administrateur avec opérations CRUD, gestion des rôles et statistiques de ventes.',
        'Interface responsive pour commande en ligne, réservation et suivi en temps réel.',
        'Gestion des migrations, seeders et configuration locale (Laragon).'
      ],
      description:
        "Participation au développement d'une plateforme complète de gestion de restaurant, couvrant le backend et le frontend, avec déploiement local et optimisation de l'expérience utilisateur."
    }
  ]
}

export default experience