import { IoSchool } from "react-icons/io5";

export interface Education {
  institution: string;
  course: string;
  startDate: string;
  endDate?: string;
  icon: any;
  location?: string;
}

export const education: Education[] = [
  {
    institution: "Prime Cursos",
    course: "Programming logic",
    startDate: "Oct 2020",
    endDate: "Dec 2020",
    icon: IoSchool,
  },
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
  },
  {
    institution: "Udemy",
    course: "Software Engineer",
    startDate: "Oct 2023",
    endDate: "Until now",
    icon: IoSchool,
  },
];
