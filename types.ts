export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

export interface Education {
  semester: number;
  subjects: string[];
  projects: { name: string; description: string }[];
}

export interface Skill {
  name: string;
  icon: any;
  color: string;
}