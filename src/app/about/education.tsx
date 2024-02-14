import { Icon } from "@/components/icon";
import { Education as EducationProps } from "@/data/education";

export function Education({
  institution,
  course,
  location,
  icon,
  startDate,
  endDate,
}: EducationProps) {
  return (
    <div className="w-full md:max-w-[400px] relative h-24 flex items-center bg-neutral-800 rounded-r-xl rounded-l-xl cursor-pointer hover:scale-105 transition-all duration-300 shadow-lg">
      <div className="absolute h-full w-2 rounded-l-2xl bg-gradient-to-b from-[#4f46e5] to-[#c026d3]"></div>
      <section className="w-full px-5 md:px-6 h-full flex flex-col py-3">
        <div className="w-full flex items-center gap-2">
          <h1 className="text-lg font-bold text-ellipsis truncate whitespace-nowrap overflow-hidden bg-gradient-to-r from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent">
            {course}
          </h1>
          <Icon className="w-4 h-4 text-white " icon={icon} />
        </div>
        <span className="w-full text-sm font-bold whitespace-pre-wrap text-ellipsis truncate whitespace-nowrap overflow-hidden">
          {institution} {location && "- " + location}
        </span>

        <p className="font-medium text-xs mt-2 mr-4">
          {startDate} - {!endDate ? "Until now" : endDate}
        </p>
      </section>
    </div>
  );
}
