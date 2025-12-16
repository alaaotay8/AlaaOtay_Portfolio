import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projets',
  source: 'GitHub',
  website: 'Site Web',
  main: [
    {
      name: 'ComptaHub — Plateforme de Comptabilité Microservices Backend',
      techstack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker', 'WebSockets', 'Microservices'],
      image: 'comptahub.webp',
      description:
        "Plateforme backend SaaS de comptabilité prête pour la production, conçue pour les PME et cabinets comptables, avec une architecture microservices scalable. Conception et implémentation des microservices backend uniquement (frontend géré par d'autres membres de l'équipe). Authentification sécurisée avec JWT & OAuth2 (Google / LinkedIn) et RBAC. Développement d'exports Excel asynchrones avec suivi de progression en temps réel via WebSockets. Implémentation de tableaux de bord comptables en temps réel utilisant une architecture événementielle (PostgreSQL LISTEN/NOTIFY). Conteneurisation des services avec Docker et déploiement CI/CD prêt. Application des bonnes pratiques de sécurité OWASP, rate limiting et contrôles qualité du code (SonarQube, PEP8). Statut : Prêt pour la production (projet PFA chez 5DS).",
      src: '',
      url: '',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_attestation-de-stage-activity-7406450727046311936-3oi8'
    },
    {
      name: 'Taxini — Plateforme Full-Stack de Réservation de Taxi',
      techstack: ['FastAPI', 'Vue 3', 'PostgreSQL', 'Supabase', 'WebSockets'],
      image: 'taxini.webp',
      description:
        "Plateforme moderne de réservation de taxi en temps réel construite pour le marché tunisien, axée sur la performance, la scalabilité et la sécurité. Développement d'un backend FastAPI avec APIs REST et fonctionnalités temps réel WebSocket. Construction d'un frontend Vue 3 avec tableaux de bord basés sur les rôles (Passager / Chauffeur / Admin). Implémentation du suivi de trajet en direct, logique de tarification et RBAC. Optimisation des performances (lazy loading, APIs async, pooling DB). Application des bonnes pratiques de sécurité (auth JWT, sanitisation des entrées, CORS sécurisé). Utilisation d'une stratégie de dépôt hybride (dépôt privé production + dépôt public portfolio).",
      src: 'https://github.com/alaaotay8/taxini-app-public.git',
      url: 'https://taxini-app.vercel.app/',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_fastapi-supabase-vuejs-activity-7406454416943366145-ga2s'
    },
    {
      name: 'Générateur de Profils de Carrière',
      techstack: ['FastAPI', 'Python', 'Tesseract OCR', 'OpenAI', 'Hugging Face'],
      image: 'career_profile_generator.webp',
      description:
        "Application FastAPI alimentée par l'IA pour extraire des données structurées de CV grâce à l'OCR et aux LLMs. Intègre Tesseract OCR, fallback Hugging Face, OpenAI, schémas JSON et logique de validation robuste.",
      src: 'https://github.com/alaaotay8/career-profile-generator',
      url: 'https://cv-insight-extractor.onrender.com/',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_ai-fastapi-cvparser-activity-7340349242932125700-fsR1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACLQljUBfoH4EtVdvHXs51RwizxHpr7U45k'
    },
    {
      name: 'Prédicteur de Performance Étudiante',
      techstack: ['FastAPI', 'Python', 'scikit-learn', 'XGBoost', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'student_performance_predictor.webp',
      description:
        "Application web alimentée par l'IA qui prédit les performances académiques des étudiants avec une précision de 97% grâce à l'apprentissage automatique. Propose un formulaire interactif avec curseurs en temps réel, méthodes d'ensemble (Random Forest, XGBoost), et traitement de données avancé incluant SMOTE pour gérer le déséquilibre des classes.",
      src: 'https://github.com/alaaotay8/student-performance-ai',
      url: 'https://student-performance-predictor-ai-live.onrender.com/',
      linkedin: 'https://www.linkedin.com/in/alaa-otay8/'
    },
    {
      name: 'Système de Gestion de Restaurant',
      techstack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
      image: 'restaurant_management.webp',
      description:
        "Plateforme complète de gestion de restaurant avec tableau de bord administrateur, opérations CRUD, gestion des rôles, statistiques de ventes et interface responsive pour la commande, la réservation et le suivi. Gestion des migrations et configuration locale avec Laragon.",
      src: 'https://github.com/alaaotay8/restaurant-management-system',
      url: '',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_laravel-php-webdevelopment-activity-7339452060934852609-u4mZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACLQljUBfoH4EtVdvHXs51RwizxHpr7U45k'
    },
    {
      name: 'AlaaOtay Portfolio',
      techstack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      image: 'ao_portfolio.webp',
      description:
        "Mon site portfolio personnel, conçu et développé de A à Z pour présenter mes projets, compétences et expériences. Réalisé avec Vue.js et TypeScript, il offre une interface moderne, des animations fluides et une expérience totalement responsive.",
      src: 'https://github.com/alaaotay8/AlaaOtay_Portfolio',
      url: 'https://alaaotay.netlify.app/',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7341585422969421825/'
    }
  ],
  other: []
}

export default projects