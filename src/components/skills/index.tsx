import { IconType } from "react-icons";
import { StartRating } from "../starRating";

interface SkillsComponentProps {
  icon: IconType;
  programmingLanguage: string;
  rating: number;
}

export function Skills({
  icon,
  programmingLanguage,
  rating,
}: SkillsComponentProps) {
  const Icon = icon;
  return (
    <div className="h-[150px] w-[150px] md:w-[250px] md:h-[200px] flex flex-col items-center justify-center bg-neutral-900 shadow-md rounded-lg cursor-pointer hover:scale-105 duration-300 ease-linear">
      <Icon className="text-[2.5rem]" />
      <p className="mt-2 text-center text-sm md:tex-xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent">
        {programmingLanguage}
      </p>
      <div className="w-full flex items-center justify-center mt-5">
        <StartRating rating={rating} />
      </div>
    </div>
  );
}
