import { Wrapper } from "@/components/wrapper";
import { Project } from "./project";

export default function Projects() {
  return (
    <Wrapper>
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#22d3ee] bg-clip-text text-transparent mt-5">
          Welcome to my Projects
        </h1>
        <section className="w-full flex flex-col flex-wrap items-center justify-center mt-5 ">
          <Project />
        </section>
      </div>
    </Wrapper>
  );
}
