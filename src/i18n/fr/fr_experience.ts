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
      company: 'ISIMM Coding Night',
      position: 'Extracteur de CV Structuré – FastAPI',
      url: '#',
      startDate: '2025-04',
      endDate: '2025-04',
      highlights: [
        'Développement d’une application FastAPI pour extraire les données des CV via OCR et LLMs.',
        'Intégration de Tesseract OCR avec fallback Hugging Face.',
        'Utilisation d’OpenAI et de schémas JSON pour la génération de profils.',
        'Ajout de validation automatique et mécanismes de relance.'
      ],
      description:
        'Création d’un outil intelligent pour l’extraction automatisée et la génération de profils à partir de CV, en utilisant des bibliothèques Python modernes et des API cloud.'
    },
        {
      company: 'Yes2Dev',
      position: 'Stagiaire Développeur Web',
      url: '#',
      startDate: '2024-07',
      endDate: '2024-08',
      highlights: [
        'Développement d’un système de gestion de restaurant (Laravel, MySQL, Bootstrap).',
        'Tableau de bord administrateur avec opérations CRUD, gestion des rôles et statistiques de ventes.',
        'Interface responsive pour commande en ligne, réservation et suivi en temps réel.',
        'Gestion des migrations, seeders et configuration locale (Laragon).'
      ],
      description:
        'Participation au développement d’une plateforme complète de gestion de restaurant, couvrant le backend et le frontend, avec déploiement local et optimisation de l’expérience utilisateur.'
    }
  ]
}

export default experience