import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaCss3,
  FaDocker,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiCsharp,
  SiJavascript,
  SiMariadb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

interface skillsAssessmentProps {
  programmingLanguage: string;
  languageIcon: IconType;
  rating: number;
}

export const skills: skillsAssessmentProps[] = [
  {
    languageIcon: FaReact,
    programmingLanguage: "ReactJS",
    rating: 5,
  },
  {
    languageIcon: FaReact,
    programmingLanguage: "React Native",
    rating: 3.5,
  },
  {
    languageIcon: SiNextdotjs,
    programmingLanguage: "NextJS",
    rating: 5,
  },
  {
    languageIcon: SiVite,
    programmingLanguage: "Vite",
    rating: 5,
  },
  {
    languageIcon: SiTypescript,
    programmingLanguage: "Typescript",
    rating: 5,
  },
  {
    languageIcon: SiTailwindcss,
    programmingLanguage: "Tailwindcss",
    rating: 5,
  },
  {
    languageIcon: SiStyledcomponents,
    programmingLanguage: "Styled-Components",
    rating: 5,
  },
  {
    languageIcon: FaSass,
    programmingLanguage: "Sass",
    rating: 5,
  },
  {
    languageIcon: FaCss3,
    programmingLanguage: "CSS",
    rating: 5,
  },
  {
    languageIcon: FaHtml5,
    programmingLanguage: "Html",
    rating: 5,
  },
  {
    languageIcon: SiTypescript,
    programmingLanguage: "Typescript",
    rating: 5,
  },
  {
    languageIcon: SiJavascript,
    programmingLanguage: "Javascript",
    rating: 5,
  },
  {
    languageIcon: FaNodeJs,
    programmingLanguage: "NodeJs",
    rating: 4,
  },
  {
    languageIcon: SiCsharp,
    programmingLanguage: "C#",
    rating: 3,
  },
  {
    languageIcon: SiPrisma,
    programmingLanguage: "Prisma",
    rating: 4,
  },
  {
    languageIcon: BiLogoPostgresql,
    programmingLanguage: "PostgreSQL",
    rating: 4,
  },
  {
    languageIcon: SiMysql,
    programmingLanguage: "MySQL",
    rating: 5,
  },
  {
    languageIcon: FaDocker,
    programmingLanguage: "Docker",
    rating: 3,
  },
  {
    languageIcon: SiMariadb,
    programmingLanguage: "MariaDB",
    rating: 4,
  },
];
