import type { About } from '@/types'

const about: About = {
  title: 'À propos',
  summary:
    "Étudiant en génie logiciel, passionné par le développement web moderne et l’intelligence artificielle. Solide maîtrise de la programmation orientée objet, avec une expertise en PHP, Laravel, Vue.js et en gestion de bases de données. Expérimenté dans l'intégration de modèles d’IA (LLMs, GenAI) pour enrichir les fonctionnalités. Motivé par les environnements techniques innovants.",
  education: {
    title: 'Formation Académique',
    list: [
      {
        title: "Diplôme d’ingénieur en Génie Logiciel",
        institution: 'ISIMM, Monastir',
        url: 'https://isimm.rnu.tn/',
        description: "Programme complet axé sur le génie logiciel, les algorithmes et les technologies web modernes.",
        startDate: '2021-09',
        endDate: '2026-07',
        courses: [
          'POO & UML',
          'Gestion de bases de données',
          'Développement web',
          'IA & Machine Learning'
        ]
      },
      {
        title: 'Baccalauréat en Sciences Techniques',
        institution: 'Lycée Technique de Médenine',
        url: '#',
        description: 'Diplômé avec mention. Moyenne : 16,65 / 20.',
        startDate: '2017-09',
        endDate: '2021-07',
        courses: ['Sciences Techniques', 'Mathématiques', 'Physique']
      }
    ]
  },
  achievements: {
    title: 'Formations & Certifications',
    list: [
      {
        title: 'Formation Laravel complète',
        date: '2023-01',
        awarder: 'Brightcoding',
        summary: 'Formation approfondie sur Laravel et le développement backend avancé.'
      },
      {
        title: 'Formation Vue.js',
        date: '2023-06',
        awarder: 'Étude indépendante',
        summary: 'Interfaces interactives et architecture composants avec Vue.js.'
      },
      {
        title: 'Machine Learning',
        date: '2024-03',
        awarder: 'Google Cloud',
        summary: 'IA générative, LLMs, projets pratiques.'
      }
    ]
  },
  languages: {
    title: 'Langues Parlées',
    list: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Français', level: 'Courant' }
    ]
  },
  skills: {
    title: 'Compétences Clés',
    list: [
      {
        category: 'Langages de programmation',
        items: [
          'Python (FastAPI, programmation asynchrone, services backend)',
          'PHP (développement backend Laravel)',
          'Java',
          'C',
          'C#'
        ]
      },
      {
        category: 'Développement Web',
        items: [
          'HTML / CSS',
          'JavaScript (jQuery, Ajax)',
          'Laravel (MVC, authentification, CRUD, RBAC)',
          'Bootstrap (UI responsive)',
          'Vue.js (intégration frontend & concepts SPA)'
        ]
      },
      {
        category: 'Backend, Bases de données & Outils',
        items: [
          'FastAPI (APIs asynchrones, microservices)',
          'REST APIs (conception & intégration)',
          'WebSockets (tableaux de bord temps réel, mises à jour live)',
          'PostgreSQL (requêtes avancées, LISTEN/NOTIFY, indexation)',
          'MySQL (Laragon)',
          'Supabase (PostgreSQL, Auth, Storage, services backend)',
          'PL/SQL (Oracle)',
          'SQLAlchemy (ORM)',
          'Git & GitLab (contrôle de version, CI/CD)',
          'Docker & Docker Compose (conteneurisation)',
          'Laravel Mix',
          'Packages Python : NumPy, OpenCV, Pandas, OpenPyXL, JSON Schema',
          'Documentation API : Swagger / OpenAPI',
          'Qualité du code : SonarQube, PEP8'
        ]
      },
      {
        category: 'DevOps & Cloud',
        items: [
          'Pipelines CI/CD (GitLab CI)',
          'Monitoring & observabilité (Grafana)',
          'Environnements conteneurisés',
          'Fondamentaux Cloud (AWS Academy)',
          'Environnements serveurs distants & bases du déploiement'
        ]
      },
      {
        category: 'Sécurité & Authentification',
        items: [
          'Authentification JWT',
          'OAuth2 (Google & LinkedIn)',
          'Contrôle d\'accès basé sur les rôles (RBAC)',
          'Bonnes pratiques de sécurité OWASP',
          'Rate limiting & conception d\'API sécurisées'
        ]
      },
      {
        category: 'Concepts & Pratiques d\'ingénierie',
        items: [
          'Programmation Orientée Objet (POO)',
          'Architecture Microservices',
          'Systèmes asynchrones & événementiels',
          'Modélisation UML',
          'Méthodologie Agile Scrum',
          'Documentation technique & reporting',
          'Optimisation & indexation de bases de données'
        ]
      },
      {
        category: 'IA & Vision par ordinateur',
        items: [
          'OCR (Tesseract OCR)',
          'Détection d\'objets (OpenCV)',
          'Extraction & validation de données basées sur LLM'
        ]
      },
      {
        category: 'Pratiques d\'ingénierie logicielle',
        items: [
          'Architecture propre & conception modulaire',
          'Conception & versioning d\'API',
          'Gestion des erreurs & résilience',
          'Optimisation des performances',
          'Revues de code & refactoring',
          'Logging, monitoring & observabilité',
          'Développement orienté documentation',
          'Mentalité production-ready'
        ]
      },
      {
        category: 'Compétences professionnelles & collaboration',
        items: [
          'Collaboration en équipe Agile',
          'Communication inter-équipes (Backend ↔ Frontend)',
          'Travail à distance & communication asynchrone',
          'Priorisation des tâches & gestion du temps',
          'Travail sous pression et deadlines',
          'Adaptabilité dans des environnements dynamiques',
          'Reporting technique & documentation claire'
        ]
      }
    ]
  },
}

export default about