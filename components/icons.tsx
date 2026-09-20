import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

export const techIcons: Record<string, { Icon: IconType; color: string; label: string }> = {
  html: { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
  css: { Icon: FaCss3Alt, color: "#1572B6", label: "CSS3" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  typescript: { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  react: { Icon: FaReact, color: "#61DAFB", label: "React" },
  next: { Icon: SiNextdotjs, color: "#FFFFFF", label: "Next.js" },
  node: { Icon: FaNodeJs, color: "#5FA04E", label: "Node.js" },
  express: { Icon: SiExpress, color: "#FFFFFF", label: "Express" },
  mongodb: { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
  git: { Icon: FaGitAlt, color: "#F05032", label: "Git" },
};