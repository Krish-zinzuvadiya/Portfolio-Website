import { GraduationCap, Code, Database, Layout, Server, Cpu } from 'lucide-react';

export const PERSONAL_DETAILS = {
  name: "Krish Zinzuvadiya",
  title: "Student • Developer • Tech Enthusiast",
  university: "LJ University",
  duration: "2023 – 2027",
  bio: "I am a passionate developer and learner currently pursuing my degree at LJ University. I love building modern web applications, exploring AI integrations, and solving real-world problems through code.",
  resume: "https://drive.google.com/file/d/1Fp_-4D4331L52OuKgBp_NUMB0zL609Li/view?usp=sharing"
};

export const SOCIAL_LINKS = {
  email: "krishrami198@gmail.com",
  linkedin: "https://www.linkedin.com/in/krish-zinzuvadiya-449b70279",
  github: "https://github.com/Krish-zinzuvadiya",
  instagram: "https://www.instagram.com/krish_zinzuvadiya09/"
};

export const SKILLS = [
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "Express.js", icon: Server, color: "text-gray-400" },
  { name: "React", icon: Code, color: "text-blue-400" },
  { name: "MongoDB", icon: Database, color: "text-green-600" },
  { name: "HTML", icon: Code, color: "text-orange-500" },
  { name: "CSS", icon: Layout, color: "text-blue-500" },
  { name: "JavaScript", icon: Code, color: "text-yellow-400" },
  { name: "Bootstrap", icon: Layout, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: Layout, color: "text-cyan-400" },
  { name: "Django", icon: Server, color: "text-green-800" },
  { name: "Angular", icon: Code, color: "text-red-500" },
  { name: "Java", icon: Code, color: "text-red-600" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-400" },
  { name: "SQLite", icon: Database, color: "text-blue-300" },
  { name: "ASP.NET", icon: Cpu, color: "text-purple-500" },
  { name: "Python", icon: Server, color: "text-yellow-500" },
  { name: "TypeScript", icon: Code, color: "text-blue-600" },
  { name: "Postman", icon: Server, color: "text-orange-500" },
  { name: "Git and Github", icon: Code, color: "text-gray-600" },
  { name: "Figma", icon: Layout, color: "text-pink-500" },
];

export const EDUCATION_DATA = [
  {
    semester: 1,
    subjects: ["Java-I", "Physics-I", "Mathematics-I", "Software Engineering", "IOT"],
    projects: [
      { name: "Library Management System", description: "Basic Java Programming" },
      { name: "Car Showroom System", description: "Basic Java Programming" },
      { name: "Weather Tracking System", description: "IOT- ESP8266 NodeMCU Wifi Arduino" }
    ]
  },
  {
    semester: 2,
    subjects: ["Java-II", "Fundamentals of Electrical and Electronics", "Mathematics-II", "Data Structure Using Java", "DBMS"],
    projects: [
      { name: "Pharmacy Management System", description: "Advanced Java Programming" },
      { name: "Railway Booking System", description: "Advanced Java Programming" },
      { name: "Automated street lighting system", description: "LDR and IR Sensor" }
    ]
  },
  {
    semester: 3,
    subjects: ["Python-I", "Full Stack Development-I", "Probability and Stochastics", "Digital Electronic"],
    projects: [
      { name: "Student Management System", description: "Basic Python Programming" },
      { name: "Railway Booking System", description: "Basic Python Programming" },
      { name: "Volti Electric Bike Website", description: "Basic HTML, CSS, JavaScript Website" },
      { name: "Spacelink", description: "Basic HTML, CSS, JavaScript Website" },
      { name: "1-bit Binary Comparator", description: "Digital Electronic Project" }
    ]
  },
  {
    semester: 4,
    subjects: ["Python-II", "Full Stack Development-II", "Discrete Mathematics", "Theory of Computation", "Computer Organization and Architecture"],
    projects: [
      { name: "Smart Attendance System", description: "Python+Django Programming" },
      { name: "Edu Analytics", description: "Python+Django Programming" },
      { name: "NyteHawk", description: "Fully MERN Stack Project Based on Maps+24/7 Services" },
      { name: "Advanced Spacelink", description: "Fully MERN Stack Project based on Spacelink" }
    ]
  },
  {
    semester: 5,
    subjects: ["Engineering Aptitude", "DOTNET", "Computer Network", "Design and Analysis of Algorithms", "TE-I", "EEF"],
    projects: [
      { name: "Upcoming...", description: "In Progress" }
    ]
  },
  {
    semester: 6,
    subjects: [],
    projects: [],
    isUpcoming: true
  },
  {
    semester: 7,
    subjects: [],
    projects: [],
    isUpcoming: true
  },
  {
    semester: 8,
    subjects: [],
    projects: [],
    isUpcoming: true
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "NyteHawk",
    description: "It helps users explore nearby services such as ATMs, pharmacies, and food outlets.",
    tools: ["React", "Node.js", "Express.js", "MongoDB Atlas"],
    liveLink: "https://nytehawk.vercel.app/",
    githubLink: "https://github.com/Krish-zinzuvadiya/NyteHawk",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
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