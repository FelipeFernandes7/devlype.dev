import mySecrets from "@/assets/mysecrets-refactored.jpeg";
import iGames from "@/assets/igames.jpeg";
import systemControl from "@/assets/system-control.jpg";
import webTasks from "@/assets/web-tasks.jpg";
import gameCard from "@/assets/gameCard.jpg";

import { StaticImageData } from "next/image";

export interface Projects {
  id: number;
  title: string;
  image: StaticImageData;
  stacks: string[];
  repo: string;
  url?: string;
}

export const project: Projects[] = [
  {
    id: 1,
    title: "My Secrets",
    image: mySecrets,
    repo: "https://github.com/FelipeFernandes7/my-secrets",
    url: "https://my-secrets2.vercel.app/",
    stacks: ["ReactJs", "TypeScript", "Tailwind", "Vercel", "Firebase"],
  },
  {
    id: 2,
    title: "IGames",
    image: iGames,
    repo: "https://github.com/FelipeFernandes7/Igames",
    url: "https://igames-nine.vercel.app/",
    stacks: [
      "ReactJs",
      "NextJs",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Server-Side",
    ],
  },
  {
    id: 3,
    title: "Game List",
    image: gameCard,
    repo: "https://github.com/FelipeFernandes7/game-list-react-native",
    url: "",
    stacks: ["React Native", "ExpoGO", "TypeScript", "Styled-Components"],
  },
  {
    id: 4,
    title: "System Control",
    image: systemControl,
    repo: "https://github.com/FelipeFernandes7/system-control",
    url: "",
    stacks: [
      "ReactJs",
      "NextJs",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Prisma",
      "MongoDB",
    ],
  },
  {
    id: 5,
    title: "Web Tasks",
    image: webTasks,
    repo: "https://github.com/FelipeFernandes7/todo-list",
    url: "https://tasks-bice.vercel.app/",
    stacks: ["ReactJs", "NextJs", "TypeScript", "Tailwind", "Vercel"],
  },
];
