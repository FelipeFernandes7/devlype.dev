import { Wrapper } from "@/components/wrapper";
import { Project } from "./project";
import { project } from "@/data/projects";

export default function Projects() {
  return (
    <Wrapper>
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent mt-5">
          Welcome to my Projects
        </h1>
        <section className="w-full flex flex-wrap items-center mt-4 flex-grow gap-5 justify-center mb-4">
          {project.map((item) => {
            const { id, background, repo, stacks, title, url } = item;
            return (
              <Project
                key={id}
                title={title}
                background={background}
                stacks={stacks}
                repo={repo}
                url={url}
              />
            );
          })}
        </section>
      </div>
    </Wrapper>
  );
}
