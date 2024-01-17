import { Career } from "@/components/career";
import { Wrapper } from "@/components/wrapper";
import { job } from "@/data/career";

export default function About() {
  return (
    <Wrapper>
      <div className="w-full flex md:items-center justify-center flex-col max-w-5xl mx-auto">
        <h1 className="flex justify-start text-4xl font-bold bg-gradient-to-r from-[#db2777] to-[#e879f9] bg-clip-text text-transparent mt-5">
          Who am I?
        </h1>
        <span className="w-full flex items-center text-left mt-4 md:text-center ">
          My name is Felipe Fernandes, I'm from the interior of São Paulo, I've
          been in contact with programming since 2020, when I realized it would
          be the ideal path to follow, since I've always loved technology.
        </span>
        <section className="w-full flex flex-col items-center justify-center mt-5 mb-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#db2777] to-[#e879f9] bg-clip-text text-transparent mt-5">
            My Journey
          </h1>
          <div className="w-full flex flex-wrap items-center mt-4 flex-grow gap-5 justify-center">
            {job.map((job) => (
              <Career
                key={job.company}
                jobTitle={job.jobTitle}
                company={job.company}
                startDate={job.startDate}
                endDate={job.endDate}
                location={job.location}
                icon={<job.icon size={24} color="#ffff" />}
              />
            ))}
          </div>
        </section>
      </div>
    </Wrapper>
  );
}
