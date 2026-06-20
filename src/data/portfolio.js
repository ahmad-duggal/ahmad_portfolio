// ─── Portfolio Data — Single Source of Truth ─────────────────────────────────
// Edit this file to update all portfolio content.

export const personalInfo = {
  name: 'Muhammad Ahmad Duggal',
  shortName: 'Ahmad Duggal',
  title: 'Backend Developer',
  tagline: 'I build scalable backend systems, REST APIs, database-driven applications, and intelligent software solutions using Node.js, Express.js, MongoDB, SQL, and Python.',
  bio: `I'm a Backend Developer specializing in scalable systems, efficient REST APIs, and database engineering. I thrive at solving complex problems, architecting robust data models, and bridging the gap between business logic and high-performance server-side solutions.`,
  bioExtended: `With expertise in Node.js, Express.js, MongoDB, and Python, I focus on creating reliable backend infrastructure. My recent work includes building a comprehensive Trading Intelligence System powered by machine learning, and I am actively seeking opportunities to contribute my backend engineering skills to impactful teams.`,
  email: 'ahmadduggal@example.com',
  location: 'Pakistan',
  available: true,
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
    url: 'mailto:ahmadduggal@example.com',
    icon: 'Mail',
  },
]

export const navLinks = [
  { id: 'hero',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'projects',   label: 'Projects' },
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
      'A multi-component AI-powered trading platform combining Smart Money Concepts (SMC), market structure analysis, XGBoost machine learning models, and a RAG-based trading knowledge engine.',
    longDescription:
      'Built a robust backend to ingest and process real-time market data from Binance. The system engineers 50+ features, detects BOS and CHoCH market structures, and runs them through an XGBoost model for trade probability scoring.',
    techStack: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Binance API', 'RAG'],
    category: 'Backend / ML',
    featured: true,
    status: 'Completed',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'violet',
    emoji: '📈',
    highlights: ['Real-time Binance monitoring', '50+ engineered features', 'BOS & CHoCH detection', 'XGBoost probability scoring'],
  },
  {
    id: 'ecommerce-backend',
    title: 'E-Commerce Backend API',
    description:
      'A scalable e-commerce RESTful API handling complex relationships between users, products, orders, and payment processing integrations.',
    longDescription:
      'Architected with Node.js and Express.js using a PostgreSQL database. Implements robust data validation, JWT authentication, role-based access control, and advanced query filtering.',
    techStack: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Sequelize'],
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
    id: 'inventory-system',
    title: 'Inventory Management System',
    description:
      'Backend system designed for real-time inventory tracking, warehouse management, and low-stock automated alerts.',
    longDescription:
      'Utilizing Node.js and MongoDB to manage thousands of SKUs. Features include transaction logging, supplier management, and aggregate reporting pipelines.',
    techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    category: 'Backend Architecture',
    featured: false,
    status: 'Planned',
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'emerald',
    emoji: '📦',
    highlights: ['Aggregation pipelines', 'Real-time alerts', 'Supplier modeling'],
  },
  {
    id: 'chat-backend',
    title: 'Real-Time Chat Backend',
    description:
      'A high-performance real-time messaging backend supporting private rooms, group chats, and message history persistence.',
    longDescription:
      'Built with Node.js, Socket.io, and Redis for pub/sub messaging. Uses MongoDB to persist chat history and handle offline message delivery.',
    techStack: ['Node.js', 'WebSockets', 'Socket.io', 'MongoDB', 'Redis'],
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
    year: '2024 – Present',
    title: 'Trading Intelligence System',
    type: 'project',
    icon: '📈',
    description:
      'Developed a sophisticated backend and ML pipeline integrating the Binance API, market structure algorithms, and XGBoost to predict and validate trades based on Smart Money Concepts.',
    tags: ['Python', 'XGBoost', 'Machine Learning', 'API Integration'],
  },
  {
    id: 2,
    year: '2023 – 2024',
    title: 'Machine Learning for Trading',
    type: 'learning',
    icon: '🧠',
    description:
      'Explored data science and ML to optimize trading strategies. Learned Pandas, Scikit-learn, feature engineering, and the RAG architecture for intelligent assistants.',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'RAG'],
  },
  {
    id: 3,
    year: '2023',
    title: 'API Engineering & Database Systems',
    type: 'learning',
    icon: '⚙️',
    description:
      'Deepened knowledge of backend architectures. Mastered RESTful API design, JWT authentication, and complex database modeling using MongoDB, MySQL, and PostgreSQL.',
    tags: ['REST APIs', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    id: 4,
    year: '2022 – 2023',
    title: 'MERN Stack Backend Development',
    type: 'learning',
    icon: '🚀',
    description:
      'Transitioned into server-side programming. Built scalable backend services using Node.js and Express.js, learning the intricacies of asynchronous programming and request handling.',
    tags: ['Node.js', 'Express.js', 'JavaScript'],
  },
  {
    id: 5,
    year: '2022',
    title: 'Web Development Foundations',
    type: 'education',
    icon: '📚',
    description:
      'Started the programming journey with foundational web technologies, moving quickly into core Computer Science concepts like Data Structures and Algorithms.',
    tags: ['HTML/CSS', 'JavaScript', 'DSA', 'C++'],
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { label: 'APIs Designed',     value: '10+', icon: '🔗' },
  { label: 'Databases',         value: '3',   icon: '🗄️' },
  { label: 'GitHub Commits',    value: '200+',icon: '📦' },
  { label: 'System Uptime',     value: '99%', icon: '⚡' },
]
