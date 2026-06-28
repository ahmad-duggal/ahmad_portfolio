// ─── Portfolio Data — Single Source of Truth ─────────────────────────────────
// Edit this file to update all portfolio content.

// We import the image so vite processes it correctly when building
import profilePicture from '../assets/profile.png'

export const personalInfo = {
  name: 'Muhammad Ahmad Duggal',
  shortName: 'Ahmad Duggal',
  title: 'Backend Developer',
  tagline: 'I build scalable backend systems, REST APIs, database-driven applications, and intelligent software solutions using Node.js, Express.js, MongoDB, SQL, and Python.',
  bio: `I'm a Backend Developer specializing in scalable systems, REST APIs, and database engineering using the MERN stack and Python.`,
  bioExtended: `With a strong focus on backend architecture, I build reliable data models, write efficient queries, and ensure applications perform at scale.`,
  email: 'duggalmuhammadahmad@gmail.com',
  location: 'Pakistan',
  available: true,
  profileImg: profilePicture,
}

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/ahmad-duggal',
    icon: 'Github',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-ahmad-duggal',
    icon: 'Linkedin',
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:duggalmuhammadahmad@gmail.com',
    icon: 'Mail',
  },
]

export const navLinks = [
  { id: 'hero',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'experience', label: 'Journey' },
  { id: 'contact',    label: 'Contact' },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories = [
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: 'indigo',
    skills: [
      { name: 'Node.js',      level: 85, icon: '🟢'  },
      { name: 'Express.js',   level: 85, icon: '🚀'  },
      { name: 'REST APIs',    level: 90, icon: '🔗'  },
      { name: 'JWT Auth',     level: 85, icon: '🔐'  },
      { name: 'WebSockets',   level: 75, icon: '⚡'  },
      { name: 'Python',       level: 80, icon: '🐍'  },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    color: 'emerald',
    skills: [
      { name: 'MongoDB',          level: 85, icon: '🍃'  },
      { name: 'MySQL',            level: 75, icon: '🐬'  },
      { name: 'PostgreSQL',       level: 75, icon: '🐘'  },
      { name: 'Database Design',  level: 85, icon: '📐'  },
      { name: 'Query Optimization',level: 80,icon: '⚡'  },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: 'cyan',
    skills: [
      { name: 'React',        level: 90, icon: '⚛️'  },
      { name: 'Tailwind CSS', level: 88, icon: '💨'  },
      { name: 'JavaScript',   level: 88, icon: '🟨'  },
      { name: 'HTML',         level: 95, icon: '🌐'  },
      { name: 'CSS',          level: 90, icon: '🎨'  },
    ],
  },
  {
    id: 'programming',
    label: 'Programming',
    emoji: '💻',
    color: 'violet',
    skills: [
      { name: 'JavaScript',  level: 88, icon: '🟨'  },
      { name: 'Python',      level: 85, icon: '🐍'  },
      { name: 'SQL',         level: 80, icon: '💾'  },
      { name: 'C++',         level: 70, icon: '⚙️'  },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🛠️',
    color: 'orange',
    skills: [
      { name: 'Git',         level: 88, icon: '🐙'  },
      { name: 'GitHub',      level: 88, icon: '☁️'  },
      { name: 'Postman',     level: 90, icon: '📬'  },
      { name: 'Render',      level: 80, icon: '🔧'  },
      { name: 'Vercel',      level: 85, icon: '▲'   },
      { name: 'Docker',      level: 65, icon: '🐳'  },
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'trading-intelligence',
    title: 'Trading Intelligence System',
    description:
      'Built a multi-component AI-powered trading platform combining Smart Money Concepts (SMC), market structure analysis, XGBoost machine learning models, and a RAG-based trading knowledge engine.',
    longDescription:
      'Engineered a robust backend to ingest and process real-time market data from Binance. The system engineers 50+ features, detects BOS and CHoCH market structures, and runs them through an XGBoost model for trade probability scoring.',
    techStack: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Binance API', 'RAG'],
    category: 'Backend / ML',
    featured: true,
    status: 'Completed',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'violet',
    emoji: '📈',
    highlights: ['BOS & CHoCH detection', 'Real-time Binance monitoring', '50+ engineered features', 'XGBoost probability scoring', 'Trade validation pipeline', 'Trading knowledge assistant'],
  },
  {
    id: 'restaurant-platform',
    title: 'Restaurant Food Ordering Platform',
    description:
      'Production-ready MERN platform featuring secure JWT authentication, role-based access control, and automated testing via GitHub Actions.',
    longDescription:
      'Developed a full-stack restaurant platform with React and Express.js. Built RESTful APIs for food management and order processing. Implemented automated testing (Vitest, React Testing Library, Supertest, Playwright) and CI/CD pipelines via GitHub Actions, alongside comprehensive architecture documentation.',
    techStack: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Axios', 'Vitest', 'React Testing Library', 'Supertest', 'Playwright', 'GitHub Actions', 'Render', 'Vercel'],
    category: 'Full Stack',
    featured: true,
    status: 'Completed',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'orange',
    emoji: '🍽️',
    highlights: ['JWT & Role-based access', 'RESTful APIs with Mongoose', 'Automated testing (Vitest/Playwright)', 'CI/CD with GitHub Actions', 'Comprehensive API documentation'],
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    description:
      'C++ based inventory management solution utilizing Object-Oriented Programming and robust Data Structures for efficient stock tracking and product management.',
    longDescription:
      'A console-based application built entirely in C++ that demonstrates strong fundamentals in OOP. It implements custom sorting and searching algorithms to manage inventory tracking efficiently without relying on an external database.',
    techStack: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
    category: 'Software Engineering',
    featured: false,
    status: 'Completed',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'emerald',
    emoji: '📦',
    highlights: ['Object-Oriented Design', 'Custom searching & sorting', 'Memory management'],
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend API',
    description:
      'A scalable e-commerce RESTful API handling complex relationships between users, products, orders, and payment processing integrations.',
    longDescription:
      'Architected with Node.js and Express.js using a PostgreSQL database. Implements robust data validation, JWT authentication, role-based access control, and advanced query filtering.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    category: 'Backend API',
    featured: false,
    status: 'Planned',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'indigo',
    emoji: '🛒',
    highlights: ['Role-based authentication', 'Advanced filtering', 'Payment gateway mock'],
  },
  {
    id: 'chat-backend',
    title: 'Real-Time Chat Backend',
    description:
      'A high-performance real-time messaging backend supporting private rooms, group chats, and message history persistence.',
    longDescription:
      'Built with Node.js, Socket.io, and Redis for pub/sub messaging. Uses MongoDB to persist chat history and handle offline message delivery.',
    techStack: ['Node.js', 'WebSockets', 'Socket.io', 'MongoDB'],
    category: 'Real-Time Systems',
    featured: false,
    status: 'Planned',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'cyan',
    emoji: '💬',
    highlights: ['WebSockets', 'Group chats', 'Message persistence'],
  },
]

// ─── Experience / Journey ─────────────────────────────────────────────────────

export const timeline = [
  {
    id: 1,
    year: '2025',
    title: 'Inventory Management System',
    type: 'project',
    icon: '📦',
    description: 'C++ based inventory management application utilizing Object-Oriented Programming, custom data structures, and searching algorithms for efficient stock tracking.',
    tags: ['C++', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    id: 2,
    year: '2026',
    title: 'Sentiment Analysis Project',
    type: 'project',
    icon: '🧠',
    description: 'Machine Learning project focused on sentiment classification and text analysis using Python and ML techniques.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────

export const certifications = [
  {
    title: 'Google AI App Building',
    issuer: 'Google',
    credentialPlatform: 'Credly',
    date: '28 Jun, 2026',
    certificateUrl: 'https://www.credly.com/badges/9dae7708-aeef-4feb-b64e-1a5401636e88/public_url',
    badgeUrl: 'https://images.credly.com/images/7e854d65-d59d-45ad-9d4d-89d627087c08/linkedin_thumb_blob',
    status: 'Completed',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '17 May, 2026',
    credentialId: 'AC16F88EA108',
    certificateUrl: 'https://www.hackerrank.com/certificates/AC16F88EA108',
    status: 'Completed',
  },
]
