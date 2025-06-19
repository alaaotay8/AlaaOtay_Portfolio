import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projets',
  source: 'GitHub',
  website: 'Site Web',
  main: [
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
      name: 'Générateur de Profils de Carrière',
      techstack: ['FastAPI', 'Python', 'Tesseract OCR', 'OpenAI', 'Hugging Face'],
      image: 'career_profile_generator.webp',
      description:
        "Application FastAPI alimentée par l'IA pour extraire des données structurées de CV grâce à l'OCR et aux LLMs. Intègre Tesseract OCR, fallback Hugging Face, OpenAI, schémas JSON et logique de validation robuste.",
      src: 'https://github.com/alaaotay8/career-profile-generator',
      url: 'https://cv-insight-extractor.onrender.com/',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_laravel-php-webdevelopment-activity-7339452060934852609-u4mZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACLQljUBfoH4EtVdvHXs51RwizxHpr7U45k'
    },
    {
      name: 'AlaaOtay Portfolio',
      techstack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      image: 'ao_portfolio.webp',
      description:
        "Mon site portfolio personnel, conçu et développé de A à Z pour présenter mes projets, compétences et expériences. Réalisé avec Vue.js et TypeScript, il offre une interface moderne, des animations fluides et une expérience totalement responsive.",
      src: 'https://github.com/alaaotay8/AO_Portfolio',
      url: ''
    }
  ],
  other: []
}

export default projects