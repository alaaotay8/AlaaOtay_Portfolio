import type { Projects } from '@/types'

const projects: Projects = {
  title: 'Projects',
  source: 'GitHub',
  website: 'Website',
  main: [
    {
      name: 'ComptaHub — Backend Microservices Accounting Platform',
      techstack: ['FastAPI', 'Python', 'PostgreSQL', 'Docker', 'WebSockets', 'Microservices'],
      image: 'comptahub.webp',
      description:
        'A production-ready SaaS accounting platform backend designed for SMEs and accounting firms, built with a scalable microservices architecture. Designed and implemented backend-only microservices (frontend handled by other team members). Built secure authentication with JWT & OAuth2 (Google / LinkedIn) and RBAC. Developed asynchronous Excel export with real-time progress tracking via WebSockets. Implemented real-time accounting dashboards using event-driven architecture (PostgreSQL LISTEN/NOTIFY). Containerized services with Docker and prepared CI/CD-ready deployment. Applied OWASP security best practices, rate limiting, and code quality checks (SonarQube, PEP8). Status: Production-ready (PFA project at 5DS).',
      src: '',
      url: '',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_attestation-de-stage-activity-7406450727046311936-3oi8'
    },
    {
      name: 'Taxini — Full-Stack Ride-Hailing Platform',
      techstack: ['FastAPI', 'Vue 3', 'PostgreSQL', 'Supabase', 'WebSockets'],
      image: 'taxini.webp',
      description:
        'A modern, real-time taxi booking platform built for the Tunisian market, focusing on performance, scalability, and security. Developed a FastAPI backend with REST APIs and WebSocket real-time features. Built a Vue 3 frontend with role-based dashboards (Rider / Driver / Admin). Implemented live trip tracking, pricing logic, and RBAC. Optimized performance (lazy loading, async APIs, DB pooling). Applied security best practices (JWT auth, input sanitization, secure CORS). Used a hybrid repository strategy (private production repo + public portfolio repo).',
      src: 'https://github.com/alaaotay8/taxini-app-public.git',
      url: 'https://taxini-app.vercel.app/',
      linkedin: 'https://www.linkedin.com/posts/alaa-otay8_fastapi-supabase-vuejs-activity-7406454416943366145-ga2s'
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
      name: 'Student Performance Predictor',
      techstack: ['FastAPI', 'Python', 'scikit-learn', 'XGBoost', 'HTML5', 'CSS3', 'JavaScript'],
      image: 'student_performance_predictor.webp',
      description:
        'An AI-powered web application that predicts student academic performance with 97% accuracy using machine learning. Features an interactive form with real-time sliders, ensemble methods (Random Forest, XGBoost), and advanced data processing including SMOTE for class imbalance handling.',
      src: 'https://github.com/alaaotay8/student-performance-ai',
      url: 'https://student-performance-predictor-ai-live.onrender.com/',
      linkedin: 'https://www.linkedin.com/in/alaa-otay8/'
    },
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
      name: 'AlaaOtay Portfolio',
      techstack: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'i18n'],
      image: 'ao_portfolio.webp',
      description:
        'My personal portfolio website, designed and developed from scratch to showcase my projects, skills, and experience. Built with Vue.js and TypeScript, it features a modern UI, smooth animations, and full responsiveness.',
      src: 'https://github.com/alaaotay8/AlaaOtay_Portfolio',
      url: 'https://alaaotay.netlify.app/',
      linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:7341585422969421825/'
    }
  ],
  other: []
}

export default projects