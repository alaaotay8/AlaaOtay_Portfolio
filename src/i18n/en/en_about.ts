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
          items: ['PHP', 'Java', 'C', 'C#', 'Python']
        },
        {
          category: 'Web Development',
          items: [
            'HTML/CSS',
            'JavaScript (jQuery, Ajax)',
            'Laravel',
            'Bootstrap',
            'Vue.js'
          ]
        },
        {
          category: 'Backend & Tools',
          items: [
            'REST APIs',
            'Git',
            'Laravel Mix',
            'MySQL (Laragon)',
            'PL/SQL (Oracle)',
            'Python packages (NumPy, OpenCV, JSON Schema)'
          ]
        },
        {
          category: 'Concepts',
          items: [
            'Object-Oriented Programming (OOP)',
            'UML',
            'Cloud Fundamentals (AWS Academy)',
            'OCR',
            'Object Detection'
          ]
        }
      ]
    },
}

export default about
