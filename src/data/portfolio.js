// ─── Portfolio Data — Single Source of Truth ─────────────────────────────────
// Edit this file to update all portfolio content.

export const personalInfo = {
  name: 'Muhammad Ahmad Duggal',
  shortName: 'Ahmad Duggal',
  title: 'MERN Stack Developer',
  tagline: 'Building fast, scalable full-stack web applications.',
  bio: `I'm a passionate MERN Stack Developer focused on crafting elegant, performant web applications from the ground up. I love turning complex problems into clean, intuitive digital experiences — whether that's a lightning-fast REST API, a pixel-perfect React UI, or a robust MongoDB schema.`,
  bioExtended: `Currently deepening my expertise in full-stack development, I thrive at the intersection of beautiful design and solid engineering. My goal is to contribute to impactful products while growing as a developer — open to internships, collaborations, and exciting freelance opportunities.`,
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
    id: 'frontend',
    label: 'Frontend',
    emoji: '🎨',
    color: 'indigo',
    skills: [
      { name: 'React.js',    level: 90, icon: '⚛️'  },
      { name: 'JavaScript',  level: 88, icon: '🟨'  },
      { name: 'TypeScript',  level: 72, icon: '🔷'  },
      { name: 'HTML5',       level: 95, icon: '🌐'  },
      { name: 'CSS3',        level: 90, icon: '🎨'  },
      { name: 'Tailwind CSS',level: 88, icon: '💨'  },
      { name: 'Vite',        level: 82, icon: '⚡'  },
      { name: 'Framer Motion',level: 75,icon: '🎭'  },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    emoji: '⚙️',
    color: 'violet',
    skills: [
      { name: 'Node.js',     level: 85, icon: '🟢'  },
      { name: 'Express.js',  level: 85, icon: '🚀'  },
      { name: 'REST APIs',   level: 88, icon: '🔗'  },
      { name: 'JWT Auth',    level: 82, icon: '🔐'  },
      { name: 'Mongoose',    level: 80, icon: '🍃'  },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    emoji: '🗄️',
    color: 'green',
    skills: [
      { name: 'MongoDB',     level: 83, icon: '🍃'  },
      { name: 'MySQL',       level: 70, icon: '🐬'  },
      { name: 'Firebase',    level: 68, icon: '🔥'  },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    emoji: '🛠️',
    color: 'orange',
    skills: [
      { name: 'Git & GitHub',level: 88, icon: '🐙'  },
      { name: 'VS Code',     level: 95, icon: '💻'  },
      { name: 'Postman',     level: 85, icon: '📬'  },
      { name: 'Figma',       level: 65, icon: '🖌️'  },
      { name: 'npm / pnpm',  level: 85, icon: '📦'  },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    emoji: '🚀',
    color: 'pink',
    skills: [
      { name: 'Vercel',      level: 88, icon: '▲'   },
      { name: 'Netlify',     level: 80, icon: '🌐'  },
      { name: 'Render',      level: 75, icon: '🔧'  },
      { name: 'Railway',     level: 70, icon: '🚂'  },
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'job-portal',
    title: 'Job Portal & Hiring Platform',
    description:
      'A full-stack hiring platform connecting job seekers with employers. Features role-based auth, real-time job listings, application tracking, and admin dashboard for managing users and postings.',
    longDescription:
      'Built with the full MERN stack — React frontend with Tailwind, Express.js REST API, MongoDB Atlas database, and JWT-based authentication with separate dashboards for admins, employers, and job seekers.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: true,
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'indigo',
    emoji: '💼',
    highlights: ['Role-based authentication', 'Admin dashboard', 'Real-time job listings'],
  },
  {
    id: 'university-ms',
    title: 'University Management System',
    description:
      'A comprehensive university management system handling student enrollment, course registration, grade management, attendance tracking, and faculty administration.',
    longDescription:
      'Modular MERN application with separate portals for students, faculty, and administrators. Includes academic scheduling, result processing, and report generation.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Chart.js'],
    category: 'Full Stack',
    featured: true,
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'violet',
    emoji: '🎓',
    highlights: ['Multi-role portal', 'Academic scheduling', 'Grade management'],
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant App',
    description:
      'Modern restaurant web application with dynamic menu browsing, cart management, online ordering, and real-time order status tracking. Clean and appetizing UI.',
    longDescription:
      'React + Node.js application with MongoDB for menu/order data, Express API for CRUD operations, and a responsive UI designed for seamless ordering on any device.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
    category: 'Full Stack',
    featured: true,
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'orange',
    emoji: '🍽️',
    highlights: ['Dynamic menu', 'Cart system', 'Order tracking'],
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description:
      'Real-time weather application powered by the OpenWeather API. Displays current conditions, 5-day forecasts, humidity, wind speed, and UV index with a stunning UI.',
    longDescription:
      'Built with React and the OpenWeather API. Features city search with autocomplete, geolocation support, dynamic weather icons, and unit conversion between Celsius and Fahrenheit.',
    techStack: ['React', 'OpenWeather API', 'Axios', 'CSS3', 'Vite'],
    category: 'Frontend',
    featured: false,
    github: 'https://github.com/ahmad-duggal',
    live: null,
    color: 'cyan',
    emoji: '🌤️',
    highlights: ['OpenWeather API', 'Geolocation', '5-day forecast'],
  },
]

// ─── Experience / Journey ─────────────────────────────────────────────────────

export const timeline = [
  {
    id: 1,
    year: '2024 – Present',
    title: 'Full Stack Developer (Learning & Building)',
    type: 'self',
    icon: '🚀',
    description:
      'Dedicated to mastering the MERN stack through hands-on project building. Completed 4+ full-stack projects, sharpened REST API design skills, and developed a strong foundation in modern React patterns.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 2,
    year: '2024',
    title: 'Job Portal & Hiring Platform',
    type: 'project',
    icon: '💼',
    description:
      'Designed and developed a complete hiring platform with role-based auth, job management, and applicant tracking using the MERN stack.',
    tags: ['MERN Stack', 'JWT', 'REST API'],
  },
  {
    id: 3,
    year: '2023 – 2024',
    title: 'University Management System',
    type: 'project',
    icon: '🎓',
    description:
      'Built a comprehensive university management system with multi-role portals, academic scheduling, and grade management.',
    tags: ['React', 'Express', 'MongoDB'],
  },
  {
    id: 4,
    year: '2023',
    title: 'Frontend Development Foundations',
    type: 'learning',
    icon: '📚',
    description:
      'Mastered HTML5, CSS3, JavaScript ES6+, and React.js fundamentals. Built several mini-projects and developed a strong understanding of modern web development.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    id: 5,
    year: '2022 – 2023',
    title: 'Computer Science Studies',
    type: 'education',
    icon: '🎒',
    description:
      'Began formal CS education — studied data structures, algorithms, databases, and programming fundamentals. Developed curiosity for web development.',
    tags: ['DSA', 'Databases', 'Programming'],
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const stats = [
  { label: 'Projects Built',    value: '4+',  icon: '🚀' },
  { label: 'Technologies',      value: '15+', icon: '⚡' },
  { label: 'GitHub Commits',    value: '200+',icon: '📦' },
  { label: 'Cups of Coffee',    value: '∞',   icon: '☕' },
]
