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
        items: ['PHP', 'Java', 'C', 'C#', 'Python']
      },
      {
        category: 'Développement Web',
        items: [
          'HTML/CSS',
          'JavaScript (jQuery, Ajax)',
          'Laravel',
          'Bootstrap',
          'Vue.js'
        ]
      },
      {
        category: 'Backend & Outils',
        items: [
          'REST API',
          'Git',
          'Laravel Mix',
          'MySQL (Laragon)',
          'PL/SQL (Oracle)',
          'packages Python (NumPy, OpenCV, JSON Schema)'
        ]
      },
      {
        category: 'Concepts',
        items: [
          'Programmation Orientée Objet (POO)',
          'UML',
          'Fondamentaux Cloud (AWS Academy)',
          'OCR',
          'Détection d’objets'
        ]
      }
    ]
  },
}

export default about