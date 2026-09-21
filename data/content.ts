
export const profile = {
  name: "Sichan",
  badge: "I'm a MERN Stack Developer",
  headline: "I build things for the web.",
  intro:
    "MERN stack developer and third-year computing student in Nepal. I build fast, responsive web apps with React, Next.js, Node and MongoDB, and ship real client projects.",
  email: "sichanstha1@gmail.com",
  phone: "9704587202",
  github: "https://github.com/sichanstha",
  linkedin: "https://www.linkedin.com/in/sichan-shrestha-7a1a87337/",
  twitter: "",
  instagram: "https://www.instagram.com/sichanshrestha0/?hl=en",
  resumeUrl: "", 
  photo: "/portfolio.png",
  
  formEndpoint: "https://formspree.io/f/mdekeodp",
};

export const heroTech = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "node",
  "mongodb",
  "tailwind",
  "git",
];

export const codeCard = {
  name: "Sichan",
  skills: ["React", "Node", "MongoDB"],
  passion: "Building things for the web",
};

export const about = {
  title: "I'm passionate about creating digital solutions",
  text: "I'm a third-year BSc (Hons) Computing student at Itahari International College, affiliated with London Metropolitan University. At YouthIT I work in the MERN stack: clean React interfaces on the front, Node and MongoDB behind them. Before that I interned at Code IT, building admin panels and APIs with Laravel and Filament.",
  stats: [
    { icon: "calendar", value: 2, suffix: "", label: "Internships: YouthIT and Code IT" },
    { icon: "code", value: 5, suffix: "", label: "Projects built or planned" },
    { icon: "users", value: 2, suffix: "", label: "Client websites" },
    { icon: "layers", value: 6, suffix: "", label: "Core technologies" },
  ],
};

// Levels are placeholders. Set your own honest levels (0 to 100).
export const skills = [
  { name: "React.js", level: 85, icon: "react" },
  { name: "Next.js", level: 70, icon: "next" },
  { name: "TypeScript", level: 75, icon: "typescript" },
  { name: "JavaScript", level: 85, icon: "javascript" },
  { name: "Tailwind CSS", level: 90, icon: "tailwind" },
  { name: "Node.js", level: 70, icon: "node" },
  { name: "Express.js", level: 70, icon: "express" },
  { name: "MongoDB", level: 70, icon: "mongodb" },
  { name: "PHP", level: 60, icon: "php" },
  { name: "Laravel", level: 60, icon: "laravel" },
  { name: "MySQL", level: 65, icon: "mysql" },
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
  image: string; // screenshot in /public, e.g. "/Projects/dhakal.jpeg". Empty shows a placeholder.
  color: string; // colour of the placeholder thumbnail
  fit?: "cover" | "contain"; // cover fills the card (crops). contain shows the whole image (good for logos).
};

export const projects: Project[] = [
  {
    name: "Sajilo Webs",
    status: "Live product",
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
    description:
      "A community and genealogy platform. I built the About and Contact pages, history, timeline, branches and team sections, and a split-panel login.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zod"],
    live: "",
    code: "",
    image: "/Projects/Dhakal.jpeg",
    color: "#2057bd",
    fit: "cover",
  },
  {
    name: "Ritz College of Hotel Management",
    status: "Client project",
    description:
      "A website for a hotel management college. I built the internship partners page and the photo gallery.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    live: "",
    code: "",
    image: "/Projects/Ritiz.jpeg",
    color: "#0e9f8e",
    fit: "contain",
  },
    {
    name: "Amazon Clone",
    status: "Practice project",
    description:
      "My first Git repository: a clone of the Amazon website built with HTML and CSS.",
    stack: ["HTML", "CSS"],
    live: "",
    code: "https://github.com/sichanstha/Amozon-clone",
    image: "/Projects/Amazon.webp",
    color: "#ff9900",
    fit: "cover",
  },
    {
    name: "Shoot Sync",
    status: "[Client project / Company project / Personal project]",
    description:
      "[One or two sentences: what Shoot Sync does, and what YOU built in it.]",
    stack: ["[React]", "[TypeScript]", "[Tailwind CSS]"],
    live: "", 
    code: "", 
    image: "/Projects/blogimage.png",
    color: "#7c5cff",
    fit: "cover",
  },
  {
  name: "Bus Management System",
  status: "Personal project",
  description:
    "A web app for managing buses, built with React and Vite.",
  stack: ["React", "Vite"],
  live: "",
  code: "https://github.com/sichanstha/Bus-Managemenet-System",
  image: "/Projects/OIP.webp",
  color: "#0ea5e9",
  fit: "cover",
},
  {
    name: "Manakamana Hardware",
    status: "Family business, upcoming",
    upcoming: true,
    description:
      "A full-stack website for my family's hardware company in Dharan, with an admin dashboard for managing the site.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    live: "",
    code: "",
    image: "/Projects/Manakamana.png",
    color: "#d97706",
    fit: "contain",
  },
  {
    name: "Nepal Smart Accident and Emergency Response System",
    status: "Final year project, upcoming",
    upcoming: true,
    description:
      "A web platform connecting citizens, ambulances and hospitals in emergencies, with dashboards for five roles.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "Vite"],
    live: "",
    code: "",
    image: "/Projects/NS-AERS.jpg",
    color: "#dc2626",
    fit: "cover",
  },
];

export const experience = [
  {
    icon: "briefcase",
    title: "MERN Stack Developer Intern",
    org: "YouthIT",
    period: "2026 to present", // set your real start date
    points: [
      "Built responsive React, TypeScript and Tailwind CSS pages for client projects.",
      "Worked on the backend of Sajilo Webs, a hotel website builder.",
    ],
  },
  {
    icon: "briefcase",
    title: "Full Stack Developer Intern (Laravel and Filament)",
    org: "Code IT, Dharan",
    period: "Feb 2026 to Apr 2026",
    points: [
      "Built admin panels and resource management with Laravel and FilamentPHP.",
      "Worked with MySQL and Eloquent ORM, and developed RESTful APIs.",
      "Integrated the frontend, debugged issues and worked in a team.",
    ],
  },
  {
    icon: "graduation",
    title: "BSc (Hons) Computing",
    org: "Itahari International College, London Metropolitan University",
    period: "Third year",
    points: [
      "Coursework in software engineering, Java web technologies and data analysis with Power BI.",
    ],
  },
];

// Leave quote empty to show an availability card instead.
export const testimonial = {
  quote: "",
  name: "",
  role: "",
};