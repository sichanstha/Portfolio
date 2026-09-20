/**
 * All portfolio content lives here. Edit this file, nothing else.
 *
 * DRAFT = written for you from your project notes. Check it.
 * Empty strings ("") hide the matching button, link or card.
 */

export const profile = {
  name: "Sichan",
  badge: "I'm a MERN Stack Developer",
  headline: "I build things for the web.",
  // DRAFT
  intro:
    "MERN stack developer and third-year computing student in Nepal. I build fast, responsive web apps with React, Next.js, Node and MongoDB, and ship real client projects.",
  email: "sichanstha1@gmail.com",
  phone: "", // e.g. "+977 98XXXXXXXX"
  github: "https://github.com/sichanstha",
  linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle"
  twitter: "",
  instagram: "",
  resumeUrl: "", // put resume.pdf in /public, then set "/resume.pdf"
  photo: "", // put profile.png in /public, then set "/profile.png"
  // Free form at https://formspree.io. Paste your endpoint here.
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// Icon keys come from components/icons.tsx
export const heroTech = ["html", "css", "javascript", "typescript", "react", "node", "mongodb", "tailwind", "git"];

// Shown in the floating code card in the hero
export const codeCard = {
  name: "Sichan",
  skills: ["React", "Node", "MongoDB"],
  passion: "Building things for the web",
};

export const about = {
  title: "I'm passionate about creating digital solutions",
  // DRAFT
  text: "I'm a third-year BSc (Hons) Computing student at Itahari International College, affiliated with London Metropolitan University. At YouthIT I work in the MERN stack: clean React interfaces on the front, Node and MongoDB behind them.",
  // DRAFT: adjust the numbers to your real ones. icon: calendar | code | users | layers
  stats: [
    { icon: "calendar", value: 1, suffix: "", label: "Internship at YouthIT" },
    { icon: "code", value: 5, suffix: "", label: "Projects built or planned" },
    { icon: "users", value: 2, suffix: "", label: "Client websites" },
    { icon: "layers", value: 6, suffix: "", label: "Core technologies" },
  ],
};

// DRAFT: levels are placeholders. Set your own honest levels (0 to 100).
export const skills = [
  { name: "React.js", level: 85, icon: "react" },
  { name: "Next.js", level: 70, icon: "next" },
  { name: "TypeScript", level: 75, icon: "typescript" },
  { name: "JavaScript", level: 85, icon: "javascript" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "Node.js", level: 70, icon: "node" },
  { name: "Express.js", level: 70, icon: "express" },
  { name: "MongoDB", level: 70, icon: "mongodb" },
  { name: "Git", level: 80, icon: "git" },
];

export type Project = {
  name: string;
  status: string;
  upcoming?: boolean;
  description: string;
  stack: string[];
  live: string;
  code: string;
  image: string; // screenshot in /public, e.g. "/projects/sajilo.png". Empty shows a placeholder.
  color: string; // colour of the placeholder thumbnail
};

export const projects: Project[] = [
  {
    name: "Sajilo Webs",
    status: "Live product",
    // DRAFT
    description:
      "A website builder for hotels, built at YouthIT. Hotels create and manage their own sites without writing code. I work on the backend.",
    stack: ["Node.js", "Express", "MongoDB"],
    live: "https://sajilows.com",
    code: "",
    image: "",
    color: "#7c5cff",
  },
  {
    name: "Dhakal Samaj",
    status: "Client project",
    // DRAFT
    description:
      "A community and genealogy platform. I built the About and Contact pages, history, timeline, branches and team sections, and a split-panel login.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    live: "",
    code: "",
    image: "",
    color: "#2057bd",
  },
  {
    name: "Ritz College of Hotel Management",
    status: "Client project",
    // DRAFT
    description:
      "A website for a hotel management college. I built the internship partners page and the photo gallery.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    live: "",
    code: "",
    image: "",
    color: "#0e9f8e",
  },
  {
    name: "Manakamana Hardware",
    status: "Family business",
    // DRAFT
    description:
      "A full-stack website for my family's hardware company in Dharan, with an admin dashboard for managing the site.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    live: "",
    code: "",
    image: "",
    color: "#d97706",
  },
  {
    name: "Nepal Smart Accident and Emergency Response System",
    status: "Final year project, upcoming",
    upcoming: true,
    // DRAFT
    description:
      "A web platform connecting citizens, ambulances and hospitals in emergencies, with dashboards for five roles.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    live: "",
    code: "",
    image: "",
    color: "#dc2626",
  },
];

export const experience = [
  {
    icon: "briefcase",
    title: "MERN Stack Developer Intern",
    org: "YouthIT",
    period: "2026 to present", // DRAFT: use your real dates
    points: [
      "Built responsive React, TypeScript and Tailwind CSS pages for client projects.",
      "Worked on the backend of Sajilo Webs, a hotel website builder.",
    ],
  },
  {
    icon: "graduation",
    title: "BSc (Hons) Computing",
    org: "Itahari International College, London Metropolitan University",
    period: "Third year",
    points: ["Coursework in software engineering, Java web technologies and data analysis with Power BI."],
  },
];

// Leave quote empty to show an availability card instead.
export const testimonial = {
  quote: "",
  name: "",
  role: "",
};