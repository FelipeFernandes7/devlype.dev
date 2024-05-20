interface Home {
  name: string;
  career: string;
  description: string;
  links: { linkedin: string; email: string; github: string };
}

export const home: Home = {
  name: "Felipe Fernandes",
  career: "Software Engineer",
  description:
    "I am a software developer with a predominant focus on the front-end, but I also have extensive knowledge of the back-end. I am looking for an opportunity that allows me to face challenges and continue to evolve with the company. I am ambitious and want to advance in my professional career. I have a passion for programming and look forward to contributing significantly to the team's success.",
  links: {
    linkedin: "https://www.linkedin.com/in/felipe-fernandes-6a5a98215/",
    email: "/contact",
    github: "https://github.com/FelipeFernandes7",
  },
};
