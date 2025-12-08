import { GraduationCap, Code, Database, Layout, Server, Cpu } from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Krish Zinzuvadiya",
  title: "Student • Developer • Tech Enthusiast",
  university: "LJ University",
  duration: "2023 – 2027",
  bio: "I am a passionate developer and learner currently pursuing my degree at LJ University. I love building modern web applications, exploring AI integrations, and solving real-world problems through code."
};

export const SOCIAL_LINKS = {
  email: "krishrami198@gmail.com",
  linkedin: "https://www.linkedin.com/in/krish-zinzuvadiya-449b70279",
  github: "https://github.com/Krish-zinzuvadiya",
  instagram: "https://www.instagram.com/krish_zinzuvadiya09/"
};

export const SKILLS = [
  { name: "React", icon: Code, color: "text-blue-400" },
  { name: "TypeScript", icon: Code, color: "text-blue-600" },
  { name: "Python", icon: Server, color: "text-yellow-400" },
  { name: "Flask", icon: Server, color: "text-gray-400" },
  { name: "MySQL", icon: Database, color: "text-orange-400" },
  { name: "UI/UX Design", icon: Layout, color: "text-pink-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-300" },
  { name: "ASP.NET", icon: Cpu, color: "text-purple-500" },
];

export const EDUCATION_DATA = [
  {
    semester: 1,
    subjects: ["Programming Fundamentals", "Web Development Basics", "Mathematics", "Communication Skills"],
    projects: [
      { name: "Basic Portfolio Website", description: "First HTML/CSS personal site" },
      { name: "Calculator App", description: "JS based calculator logic" },
      { name: "Mini Blogging Page", description: "Static blog layout" }
    ]
  },
  {
    semester: 2,
    subjects: ["Object Oriented Programming", "Database Management Systems", "Data Structures", "Digital Logic"],
    projects: [
      { name: "Library Management CLI", description: "C++ console application" },
      { name: "Student Record System", description: "Basic CRUD with file handling" }
    ]
  },
  {
    semester: 3,
    subjects: ["Advanced Web Dev", "Python Programming", "Operating Systems", "Software Engineering"],
    projects: [
      { name: "Weather Dashboard", description: "API integration using Python" },
      { name: "Task Manager", description: "React based todo app" }
    ]
  },
  {
    semester: 4,
    subjects: ["Computer Networks", "Java Programming", "Algorithm Analysis", "Cloud Computing Basics"],
    projects: [
      { name: "Chat Application", description: "Socket programming basics" },
      { name: "E-commerce UI Prototype", description: "Figma to React conversion" }
    ]
  },
  {
    semester: 5,
    subjects: ["Artificial Intelligence", "Cyber Security", "Mobile App Dev", "Advanced Java"],
    projects: [
      { name: "AI Chatbot", description: "NLP basics" },
      { name: "Secure Login System", description: "Encryption implementation" }
    ]
  },
  {
    semester: 6,
    subjects: ["Machine Learning", "Big Data Analytics", "DevOps", "Compiler Design"],
    projects: [
      { name: "Predictive Model", description: "Stock price prediction" },
      { name: "CI/CD Pipeline Demo", description: "Automated deployment setup" }
    ]
  },
  {
    semester: 7,
    subjects: ["Blockchain Technology", "Internet of Things", "Project Management", "Elective I"],
    projects: [
      { name: "Smart Home System", description: "IoT simulation" },
      { name: "Decentralized Voting", description: "Blockchain basics" }
    ]
  },
  {
    semester: 8,
    subjects: ["Industrial Training", "Major Project", "Elective II"],
    projects: [
      { name: "Capstone Project", description: "Full stack enterprise solution" }
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Face Login System",
    description: "A secure authentication system using facial recognition technology.",
    tools: ["React", "Flask", "MongoDB", "OpenCV"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "ATM Finder App",
    description: "Locates nearby ATMs with real-time status updates and navigation.",
    tools: ["React Native", "Google Maps API", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "Medical Store Locator",
    description: "Helps users find essential medicines in nearby pharmacies.",
    tools: ["Vue.js", "Firebase", "Leaflet JS"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: 4,
    title: "Birthday Animation Site",
    description: "A fun, interactive website generating custom birthday greetings.",
    tools: ["HTML5 Canvas", "GSAP", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    id: 5,
    title: "Django Music App",
    description: "Streaming platform allowing users to upload and listen to tracks.",
    tools: ["Django", "Python", "SQLite"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=5"
  },
  {
    id: 6,
    title: "Student Management System",
    description: "Comprehensive ERP for managing university student records.",
    tools: ["ASP.NET Core", "PostgreSQL", "Bootstrap"],
    liveLink: "#",
    githubLink: "#",
    image: "https://picsum.photos/600/400?random=6"
  }
];