export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  demo: string;
  github: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Whale Succulent",
    category: "Full Stack",
    description:
      "A full-stack e-commerce platform with a beautiful UI, GraphQL API, and real-time cart management. Built with performance and scalability in mind.",
    tags: ["React", "Node.js", "GraphQL", "MongoDB", "Redux", "Azure"],
    demo: "https://whale-succulent.vercel.app",
    github: "https://github.com/jonsnowljs/whale-succulent",
    featured: true,
    year: "2022",
  },
  {
    id: 2,
    title: "JiraLite",
    category: "Frontend",
    description:
      "A lightweight Jira clone with drag-and-drop boards, issue tracking, and real-time updates. Focused on TypeScript correctness and clean architecture.",
    tags: ["React", "TypeScript", "React Query", "Jest"],
    demo: "https://jiralite.vercel.app",
    github: "https://github.com/jonsnowljs/JiraLite",
    featured: true,
    year: "2022",
  },
  {
    id: 3,
    title: "Shopping Store",
    category: "Full Stack",
    description:
      "A full-stack MERN e-commerce application with authentication, product management, and Stripe payment integration.",
    tags: ["React", "Express", "Node.js", "MongoDB", "Redux", "Bootstrap"],
    demo: "https://shopping-store.herokuapp.com",
    github: "https://github.com/jonsnowljs/shopping-store",
    featured: false,
    year: "2021",
  },
  {
    id: 4,
    title: "Portfolio v1",
    category: "Frontend",
    description:
      "First iteration of my personal portfolio website built with React and Material UI, showcasing early projects and skills.",
    tags: ["React", "JavaScript", "SCSS", "MUI", "Framer Motion"],
    demo: "https://jonsnowljs.github.io/portfolio-v1",
    github: "https://github.com/jonsnowljs/portfolio-v1",
    featured: false,
    year: "2022",
  },
];
