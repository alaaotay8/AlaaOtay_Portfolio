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
