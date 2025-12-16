import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'Restaurant Management System',
      techstack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
      image: 'restaurant_management.webp',
      description:
        'A comprehensive restaurant management platform featuring an admin dashboard, CRUD operations, RBAC, sales analytics, and a responsive UI for ordering, booking, and tracking. Includes database migrations and local setup with Laragon.',
      src: 'https://github.com/alaaotay8/restaurant-management-system',
      url: '',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_laravel-php-webdevelopment-activity-7339452060934852609-u4mZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACLQljUBfoH4EtVdvHXs51RwizxHpr7U45k'
    },
    {
      name: 'Career Profile Generator',
      techstack: ['FastAPI', 'Python', 'Tesseract OCR', 'OpenAI', 'Hugging Face'],
      image: 'career_profile_generator.webp',
      description:
        'An AI-powered FastAPI application that extracts structured CV data using OCR and LLMs. Integrates Tesseract OCR, Hugging Face fallback, OpenAI, JSON Schema, and robust validation logic.',
      src: 'https://github.com/alaaotay8/career-profile-generator',
      url: 'https://cv-insight-extractor.onrender.com/',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_ai-fastapi-cvparser-activity-7340349242932125700-fsR1?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACLQljUBfoH4EtVdvHXs51RwizxHpr7U45k'
    },
    {
      name: 'AlaaOtay Portfolio',
      techstack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      image: 'ao_portfolio.webp',
      description:
        'My personal portfolio website, designed and developed from scratch to showcase my projects, skills, and experience. Built with Vue.js and TypeScript, it features a modern UI, smooth animations, and full responsiveness.',
      src: 'https://github.com/alaaotay8/AlaaOtay_Portfolio',
      url: 'https://alaaotay.netlify.app/',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7341585422969421825/'
    },
    {
      name: 'Student Performance Predictor',
      techstack: ['FastAPI', 'Python', 'scikit-learn', 'XGBoost', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'student_performance_predictor.webp',
      description:
        'An AI-powered web application that predicts student academic performance with 97% accuracy using machine learning. Features an interactive form with real-time sliders, ensemble methods (Random Forest, XGBoost), and advanced data processing including SMOTE for class imbalance handling.',
      src: 'https://github.com/alaaotay8/student-performance-predictor',
      url: '',
      linkedin: ''
    }
  ],
  other: []
}

export default projects