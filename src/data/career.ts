import { IconType } from "react-icons";
import { FaCity, FaStore } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";

export interface Job {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  icon: any;
}

export const job: Job[] = [
  {
    company: "Supermercado Grandi",
    jobTitle: "General Services",
    startDate: "Feb 2021",
    endDate: "May 2022",
    location: "Brodowski-SP",
    icon: FaStore,
  },
  {
    company: "Santuário Digital",
    jobTitle: "Volunteer Work Developer",
    startDate: "Mar 2021",
    endDate: "Apr 2021",
    location: "Batatais-SP",
    icon: FaCity,
  },
  {
    company: "MazzaFC",
    jobTitle: "Software Engineer",
    startDate: "May 2022",
    endDate: "Jul 2023",
    location: "Franca-SP",
    icon: FaHotel,
  },
  {
    company: "99Freelas",
    jobTitle: "Junior Frontend Engineer Freelance",
    startDate: "Oct 2023",
    location: "Brasil",
    icon: SiFreelancer,
  },
];
