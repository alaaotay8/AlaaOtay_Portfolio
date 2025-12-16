import type { Experience } from '@/types'

const experience: Experience = {
  title: 'Experience',
  description: 'You can download my resume below.',
  download_button: 'Download CV',
  present: 'Present',
  month: 'month | months',
  year: 'year | years',
  list: [
    {
      company: 'Novalize (Nexilan Agency) – Switzerland',
      position: 'Backend Engineer Intern – Remote',
      url: '#',
      startDate: '2025-07',
      endDate: '2025-09',
      highlights: [
        'Developed and maintained backend features for client-oriented applications.',
        'Worked with Supabase (PostgreSQL, Auth, Storage) for backend services and data management.',
        'Integrated REST APIs and optimized backend performance.',
        'Collaborated with distributed teams in Agile workflows.',
        'Strengthened DevOps practices and production-oriented development.',
        'Managed responsibilities during a 2-week overlap with another internship, improving time management, prioritization, and adaptability.'
      ],
      description:
        'Contributed to backend development within a Swiss full-service digital agency delivering tailor-made solutions worldwide. Focus: Backend engineering, Supabase, APIs, DevOps fundamentals, professional project delivery.'
    },
    {
      company: '5DS – France',
      position: 'Backend Engineer Intern – PFA',
      url: '#',
      startDate: '2025-06',
      endDate: '2025-08',
      highlights: [
        'Designed and developed scalable FastAPI microservices with PostgreSQL.',
        'Implemented secure authentication using JWT & OAuth2 (Google / LinkedIn) with RBAC.',
        'Built asynchronous Excel export services with real-time progress tracking via WebSockets.',
        'Developed real-time accounting dashboards using event-driven architecture (PostgreSQL LISTEN / NOTIFY).',
        'Containerized services using Docker & Docker Compose and integrated CI/CD pipelines.',
        'Ensured code quality and security using SonarQube, PEP8, and OWASP best practices.',
        'Worked in an Agile Scrum environment using Jira & Confluence.'
      ],
      description:
        'Worked on ComptaHub, a production-ready SaaS accounting platform, focusing exclusively on backend microservices architecture. Tech stack: FastAPI, Python, PostgreSQL, SQLAlchemy, REST, WebSockets, Docker, GitLab CI, Grafana.'
    },
    {
      company: 'ISIMM Coding Night',
      position: 'FastAPI Career Profile Generator',
      url: '#',
      startDate: '2025-04',
      endDate: '2025-04',
      highlights: [
        'Developed a FastAPI app for extracting structured CV data using OCR and LLMs.',
        'Integrated Tesseract OCR with Hugging Face fallback.',
        'Used OpenAI & JSON Schema for profile generation.',
        'Added validation logic, retry systems, and modular structure.'
      ],
      description:
        'Built an AI-powered tool for automated CV parsing and profile generation, leveraging modern Python libraries and cloud APIs.'
    },
    {
      company: 'Yes2Dev',
      position: 'Web Developer Intern',
      url: '#',
      startDate: '2024-07',
      endDate: '2024-08',
      highlights: [
        'Developed a full Restaurant Management System using Laravel, MySQL, and Bootstrap.',
        'Built an admin dashboard with CRUD, RBAC, and sales analytics.',
        'Created a responsive UI for ordering, booking, and tracking.',
        'Managed database migrations, seeds, and local setup (Laragon).'
      ],
      description:
        'Worked on a comprehensive restaurant management platform, handling both backend and frontend tasks, and ensuring smooth deployment and usability.'
    }
  ]
}

export default experience
