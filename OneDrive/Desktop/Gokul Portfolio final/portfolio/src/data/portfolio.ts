import {
  SiPython, SiTensorflow, SiMysql, SiMongodb, SiGit, SiGithub,
  SiSalesforce, SiGooglecolab,
  SiPandas, SiNumpy, SiJupyter, SiJavascript,
  SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiReact,
  SiNodedotjs, SiExpress, SiFlask, SiScikitlearn, SiPostman,
  SiAmazonwebservices, SiC, SiOpencv, SiKeras, SiTableau, SiNvidia
} from 'react-icons/si'
import {
  FaBrain, FaChartBar, FaJava, FaCode,
  FaLeaf, FaGraduationCap, FaBaseballBall, FaBuilding,
  FaBook, FaBookOpen, FaBriefcase, FaGlobe, FaDatabase, FaLayerGroup
} from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
]

export interface Skill {
  name: string
  icon: IconType
  color: string
  category: 'language' | 'framework' | 'tool' | 'database'
}

export const skills: Skill[] = [
  // Core Expertise
  { name: 'Machine Learning', icon: FaBrain, color: '#FF6F61', category: 'framework' },
  { name: 'Deep Learning', icon: FaBrain, color: '#e044a5', category: 'framework' },
  { name: 'Data Analytics', icon: FaChartBar, color: '#00d4ff', category: 'framework' },
  { name: 'Full Stack Development', icon: FaLayerGroup, color: '#6c63ff', category: 'framework' },
  
  // Languages
  { name: 'C', icon: SiC, color: '#A8B9CC', category: 'language' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'language' },
  { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'language' },
  { name: 'SQL', icon: FaDatabase, color: '#336791', category: 'language' },
  
  // Frontend
  { name: 'HTML', icon: SiHtml5, color: '#E34F26', category: 'framework' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6', category: 'framework' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', category: 'framework' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'framework' },
  { name: 'React.js', icon: SiReact, color: '#61DAFB', category: 'framework' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'framework' },
  { name: 'Express.js', icon: SiExpress, color: '#353535', category: 'framework' },
  { name: 'Flask', icon: SiFlask, color: '#00838F', category: 'framework' },
  
  // Databases
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'database' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'database' },
  
  // AI/ML Libraries
  { name: 'NumPy', icon: SiNumpy, color: '#013243', category: 'framework' },
  { name: 'Pandas', icon: SiPandas, color: '#150458', category: 'framework' },
  { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', category: 'framework' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', category: 'framework' },
  { name: 'Keras', icon: SiKeras, color: '#D00000', category: 'framework' },
  { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', category: 'framework' },
  
  // Tools
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'tool' },
  { name: 'GitHub', icon: SiGithub, color: '#333333', category: 'tool' },
  { name: 'VS Code', icon: VscVscode, color: '#007ACC', category: 'tool' },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626', category: 'tool' },
  { name: 'Google Colab', icon: SiGooglecolab, color: '#F9AB00', category: 'tool' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37', category: 'tool' },
  
  // Cloud & CRM
  { name: 'Salesforce', icon: SiSalesforce, color: '#00A1E0', category: 'tool' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900', category: 'tool' },
]

export interface Project {
  title: string
  description: string
  tools: string[]
  gradient: string
  icon: IconType
}

export const projects: Project[] = [
  {
    title: 'Plant Disease Detection Using CNN',
    description:
      'A deep-learning model that detects plant leaf diseases from images using Convolutional Neural Networks and provides precautionary solutions.',
    tools: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Jupyter Notebook'],
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    icon: FaLeaf,
  },
  {
    title: 'StudentConnect & StaffConnect',
    description:
      'A unified Salesforce application where staff manage attendance, tests, and materials, while students view their records through a connected StudentConnect portal.',
    tools: ['Salesforce Platform', 'Apex', 'SOQL', 'Visualforce Pages', 'Lightning Experience'],
    gradient: 'linear-gradient(135deg, #00A1E0, #6c63ff)',
    icon: FaGraduationCap,
  },
  {
    title: 'Cricket Player Performance Analytics',
    description:
      'A data analytics project that retrieves batting and bowling statistics and visualizes insights from ODI cricket datasets for performance evaluation.',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'MySQL', 'Google Colab'],
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    icon: FaBaseballBall,
  },
  {
    title: 'Hostel Management System',
    description:
      'A desktop application that manages hostel student records, room allocation, fee tracking, and admin operations using a Java Swing interface.',
    tools: ['Java', 'Swing', 'MySQL'],
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    icon: FaBuilding,
  },
]

export interface Education {
  degree: string
  institution: string
  period: string
  grade: string
  icon: IconType
}

export const education: Education[] = [
  {
    degree: 'B.Tech - Artificial Intelligence and Data Science',
    institution: 'Karunya Institute of Technology and Sciences',
    period: '08/2023 — Present (up to 4th Semester)',
    grade: '8.83 CGPA',
    icon: FaGraduationCap,
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'SCISM Matric Higher Secondary School',
    period: '06/2022 — 04/2023',
    grade: '78%',
    icon: FaBook,
  },
  {
    degree: 'Secondary School Leaving Certificate (10th)',
    institution: 'SCISM Matric Higher Secondary School',
    period: '06/2020 — 04/2021',
    grade: '',
    icon: FaBookOpen,
  },
]

export interface Certificate {
  title: string
  period: string
  icon: IconType
  pdfUrl?: string
}

export const certificates: Certificate[] = [
  {
    title: 'Internship — Maac Technologies (Web Development)',
    period: '06/2024 — 07/2024',
    icon: FaGlobe,
    pdfUrl: '/certificates/Intern-1.pdf',
  },
  {
    title: 'Internship — Kurinji Technology Solutions Private Limited',
    period: '06/2025 — 07/2025',
    icon: FaBriefcase,
    pdfUrl: '/certificates/Intern-2.pdf',
  },
  {
    title: 'Power BI Certification',
    period: '2024',
    icon: FaChartBar,
    pdfUrl: '/certificates/Power%20Bi.pdf',
  },
  {
    title: 'Full Stack Development Certification',
    period: '2024',
    icon: FaLayerGroup,
    pdfUrl: '/certificates/Full%20Stack.pdf',
  },
  {
    title: 'Mastering Tableau Certification',
    period: '2024',
    icon: SiTableau,
    pdfUrl: '/certificates/MASTERING%20TABLEAU.pdf',
  },
  {
    title: 'MongoDB Certification',
    period: '2024',
    icon: SiMongodb,
    pdfUrl: '/certificates/MongoDB.pdf',
  },
  {
    title: 'Getting Started with AI on Jetson Nano',
    period: '2024',
    icon: SiNvidia,
    pdfUrl: '/certificates/Nividia%20certificate.png',
  },
  {
    title: 'Programming in C Certificate',
    period: '2024',
    icon: SiC,
    pdfUrl: '/certificates/C-certificate.pdf',
  },
  {
    title: 'Python Certificate',
    period: '2024',
    icon: SiPython,
    pdfUrl: '/certificates/python-certificate.jpeg',
  },
]

export interface Interest {
  label: string
  icon: IconType
}

export const interests: Interest[] = [
  { label: 'Full-Stack Development', icon: FaCode },
  { label: 'Deep Learning & Neural Networks', icon: FaBrain },
  { label: 'Data Analytics & Visualization', icon: FaChartBar },
  { label: 'Salesforce Development', icon: SiSalesforce },
  { label: 'AI & Machine Learning', icon: FaBrain },
]

export const contactInfo = {
  email: 'gokulganesan444@gmail.com',
  phone: '9342035519',
  location: 'M.G.R Street Sillamarathupatti, Theni, India',
  linkedin: 'https://linkedin.com/in/gokuls-perfections',
  github: 'https://github.com/gokul44-goks',
}
