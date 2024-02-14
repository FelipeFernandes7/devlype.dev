import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  className?: string;
}

export function Icon({ icon, className }: IconProps) {
  return (
    <span
      className={`${className} text-center flex justify-center items-center`}
    >
      {icon}
    </span>
  );
}
