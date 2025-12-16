import type { About } from '@/types'

const about: About = {
  title: 'About',
  summary:
    "Software engineering student passionate about modern web development and AI integration. Proficient in object-oriented programming and experienced in building dynamic applications with PHP, Laravel, and Vue.js. Hands-on with database management and AI models (LLMs, GenAI). Eager to contribute to innovative projects and thrive in a forward-thinking tech environment.",
  education: {
      title: 'Education',
      list: [
        {
          title: 'Engineering Degree in Software Engineering',
          institution: 'Higher Institute of Computer Science and Mathematics of Monastir (ISIMM)',
          url: 'https://isimm.rnu.tn/',
          description: 'Comprehensive program focused on software engineering, algorithms, and modern web technologies.',
          startDate: '2021-09',
          endDate: '2026-07',
          courses: [
            'OOP & UML',
            'Database Management',
            'Web Development',
            'AI & Machine Learning'
          ]
        },
        {
          title: 'Baccalaureate in Technical Sciences',
          institution: 'Technical High School, Mednine',
          url: '#',
          description: 'Graduated with honors. Score: 16.65/20.',
          startDate: '2017-09',
          endDate: '2021-07',
          courses: ['Technical Sciences', 'Mathematics', 'Physics']
        }
      ]
  },
  achievements: {
    title: 'Certifications & Courses',
    list: [
      {
        title: 'Full Laravel Course',
        date: '2024-01',
        awarder: 'Brightcoding Platform',
        summary: 'Completed a comprehensive Laravel course covering advanced backend development.'
      },
      {
        title: 'Vue.js Course',
        date: '2024-09',
        awarder: 'Independent Study',
        summary: 'Focused on interactive UI integration and SPA development.'
      },
      {
        title: 'Machine Learning',
        date: '2025-02',
        awarder: 'Google Cloud',
        summary: 'Completed Generative AI Learning Path and Large Language Models courses.'
      }
    ]
  },
  languages: {
    title: 'languages',
    list: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Fluent' },
      { name: 'French', level: 'Fluent' }
    ]
  },
  skills: {
    title: 'Skills',
    list: [
        {
          category: 'Programming Languages',
          items: [
            'Python (FastAPI, async programming, backend services)',
            'PHP (Laravel backend development)',
            'Java',
            'C',
            'C#'
          ]
        },
        {
          category: 'Web Development',
          items: [
            'HTML / CSS',
            'JavaScript (jQuery, Ajax)',
            'Laravel (MVC, authentication, CRUD, RBAC)',
            'Bootstrap (responsive UI)',
            'Vue.js (frontend integration & SPA concepts)'
          ]
        },
        {
          category: 'Backend, Databases & Tools',
          items: [
            'FastAPI (async APIs, microservices)',
            'REST APIs (design & integration)',
            'WebSockets (real-time dashboards, live updates)',
            'PostgreSQL (advanced queries, LISTEN/NOTIFY, indexing)',
            'MySQL (Laragon)',
            'Supabase (PostgreSQL, Auth, Storage, backend services)',
            'PL/SQL (Oracle)',
            'SQLAlchemy (ORM)',
            'Git & GitLab (version control, CI/CD)',
            'Docker & Docker Compose (containerization)',
            'Laravel Mix',
            'Python packages: NumPy, OpenCV, Pandas, OpenPyXL, JSON Schema',
            'API Documentation: Swagger / OpenAPI',
            'Code Quality: SonarQube, PEP8'
          ]
        },
        {
          category: 'DevOps & Cloud',
          items: [
            'CI/CD pipelines (GitLab CI)',
            'Monitoring & observability (Grafana)',
            'Containerized environments',
            'Cloud Fundamentals (AWS Academy)',
            'Remote server environments & deployment basics'
          ]
        },
        {
          category: 'Security & Authentication',
          items: [
            'JWT authentication',
            'OAuth2 (Google & LinkedIn)',
            'Role-Based Access Control (RBAC)',
            'OWASP security best practices',
            'Rate limiting & secure API design'
          ]
        },
        {
          category: 'Concepts & Engineering Practices',
          items: [
            'Object-Oriented Programming (OOP)',
            'Microservices Architecture',
            'Asynchronous & Event-driven systems',
            'UML modeling',
            'Agile Scrum methodology',
            'Technical documentation & reporting',
            'Database optimization & indexing'
          ]
        },
        {
          category: 'AI & Computer Vision',
          items: [
            'OCR (Tesseract OCR)',
            'Object Detection (OpenCV)',
            'LLM-based data extraction & validation'
          ]
        },
        {
          category: 'Software Engineering Practices',
          items: [
            'Clean architecture & modular design',
            'API design & versioning',
            'Error handling & resilience',
            'Performance optimization',
            'Code reviews & refactoring',
            'Logging, monitoring & observability',
            'Documentation-driven development',
            'Production-readiness mindset'
          ]
        },
        {
          category: 'Professional & Collaboration Skills',
          items: [
            'Agile team collaboration',
            'Cross-team communication (Backend ↔ Frontend)',
            'Remote work & async communication',
            'Task prioritization & time management',
            'Working under deadlines',
            'Adaptability in fast-paced environments',
            'Technical reporting & clear documentation'
          ]
        }
      ]
    },
}

export default about
