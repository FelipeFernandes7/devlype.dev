import { Job } from "@/data/career";
import { ReactNode } from "react";

export function Career({
  company,
  jobTitle,
  location,
  startDate,
  endDate,
  icon,
}: Job) {
  return (
    <article className="w-full flex flex-col p-4 border-2 border-slate-600 md:max-w-[300px] rounded-3xl shadow-md min-h-[160px] hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex w-full gap-2 items-center h-full">
        <h1 className=" w-full text-lg font-bold bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent whitespace-pre-wrap">
          {jobTitle}
        </h1>
        <button className=" active:scale-95 transition-all duration-300">
          {icon as unknown as ReactNode}
        </button>
      </div>
      <section className="w-full flex items-center justify-between md:items-start md:flex-col mt-2">
        <h1 className="text-lg font-bold bg-gradient-to-r from-[#0ea5e9] to-[#22d3ee] bg-clip-text text-transparent">
          {company}
        </h1>
        <p className="text-xs font-medium">
          {startDate} - {!endDate ? "Until now" : endDate}
        </p>
      </section>
      <p className="w-full h-full flex flex-col justify-end font-bold text-sm mt-2">
        {location}
      </p>
    </article>
  );
}
