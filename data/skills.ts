export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: Skill[];
}

export interface Stat {
  value: string;
  label: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "Python", level: 65 },
    ],
  },
  {
    id: "database",
    label: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 60 },
      { name: "Azure", level: 65 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    id: "tools",
    label: "Tools & Testing",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jest", level: 75 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
      { name: "Webpack / Vite", level: 72 },
    ],
  },
];

export const stats: Stat[] = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "20+", label: "Technologies" },
  { value: "∞", label: "Lines of Code" },
];
