import { IconType } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoSchool } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate?: string;
  icon: any;
  location?: string;
  languages?: IconType[];
}

export const education: Education[] = [
  {
    institution: "ETEC - Antônio de Pádua Cardoso",
    course: "Análise e Desenvolvimento de Sistemas",
    startDate: "Feb 2021",
    endDate: "Jul 2022",
    icon: IoSchool,
    location: "Batatais-SP",
  },
  {
    institution: "Rocketseat",
    course: "Software Engineer",
    startDate: "Feb 2020",
    endDate: "Apr 2020",
    icon: IoSchool,
    languages: [
      FaReact,
      BiLogoTypescript,
      FaNodeJs,
      SiExpress,
      TbBrandNextjs,
      IoLogoCss3,
    ],
  },
  {
    institution: "Udemy",
    course: "Software Engineer",
    startDate: "Oct 2023",
    endDate: "Until now",
    icon: IoSchool,
    languages: [
      FaReact,
      BiLogoTypescript,
      FaNodeJs,
      SiExpress,
      TbBrandNextjs,
      IoLogoCss3,
    ],
  },
];
