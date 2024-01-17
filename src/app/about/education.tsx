import { Education as EducationProps } from "@/data/education";
import { ReactNode } from "react";
export function Education(education: EducationProps) {
  return (
    <article className="w-full flex flex-col p-4 border-2 border-slate-600 md:max-w-[300px] rounded-lg shadow-md min-h-[160px] hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex w-full gap-2 items-center h-full">
        <h1 className=" w-full text-lg font-bold bg-gradient-to-r from-[#db2777] to-[#e879f9] bg-clip-text text-transparent text-ellipsis truncate whitespace-nowrap overflow-hidden">
          {education.institution}
        </h1>
        <button className=" active:scale-95 transition-all duration-300">
          {education.icon as unknown as ReactNode}
        </button>
      </div>
      <section className="w-full flex items-center justify-between md:items-start md:flex-col mt-2">
        <h1 className="text-lg font-bold bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
          {education.course}
        </h1>
        <p className="text-xs font-medium">
          {education.startDate} -
          {!education.endDate ? "Until now" : education.endDate}
        </p>
      </section>
      {education.location && (
        <p className="w-full h-full flex flex-col justify-end font-bold text-sm mt-2">
          {education.location}
        </p>
      )}
      {education.languages && (
        <div className="w-full flex flex-wrap items-center mt-4 flex-grow gap-5 justify-center">
          {education.languages.map((LanguageIcon, index) => (
            <li className="list-none" key={index}>
              <LanguageIcon size={20} />
            </li>
          ))}
          ...
        </div>
      )}
    </article>
  );
}
