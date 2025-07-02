import type { ElementType } from "react";
import { IconCode, IconRocket } from "@tabler/icons-react";

type SkillItem = { icon: ElementType; label: string };

export type Section =
  | {
      id: "skills" | "projects";
      title: string;
      content: SkillItem[];
    }
  | {
      id: "about-me" | "experience" | "education" | "contact";
      title: string;
      content: string;
    };

export const sections: Section[] = [
  {
    id: "skills",
    title: "Skills",
    content: [
      { icon: IconCode, label: "React.js" },
      { icon: IconCode, label: "Node.js" },
      { icon: IconCode, label: "Python" },
      { icon: IconCode, label: "MongoDB" },
      { icon: IconCode, label: "Tailwind CSS" },
      { icon: IconCode, label: "TypeScript" },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    content: [
      { icon: IconRocket, label: "CarbonMitra" },
      { icon: IconRocket, label: "HackX" },
      { icon: IconRocket, label: "Portfolio Website" },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    content:
      "E-Cell Operations Head, led several tech & community initiatives.",
  },
  {
    id: "education",
    title: "Education",
    content: "B.Tech CSE — Data Science, Manipal University Jaipur",
  },
  {
    id: "contact",
    title: "Contact",
    content: "nirmalrajkumarofficial@gmail.com",
  },
];