"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FaEye, FaGithub } from "react-icons/fa";

interface ProjectsProps {
  title: string;
  background: StaticImageData;
  stacks: string[];
  repo: string;
  url?: string;
}
export function Project({
  background,
  repo,
  stacks,
  title,
  url,
}: ProjectsProps) {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full border-[1px] border-slate-600 h-full min-h-500 md:max-w-[350px] rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <section className="flex flex-col w-full">
        <Image
          src={background}
          alt={"my projects"}
          width={350}
          height={200}
          objectFit="cover"
          quality={100}
          className="rounded-t-2xl w-full"
        />
        <h1 className="text-lg font-bold text-white px-4 mt-1">{title}</h1>
      </section>
      <div className="w-full flex flex-wrap items-center mt-4 flex-grow gap-2 justify-center">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="rounded-xl text-slate-600 bg-transparent border-[1px] border-slate-600 px-2"
          >
            {stack}
          </span>
        ))}
      </div>
      <div className="w-full flex gap-4 items-center justify-end px-4 p-4">
        <Link href={repo} target="_blank">
          <FaGithub
            className="text-slate-600 active:scale-95 transition-all duration-300"
            size={24}
          />
        </Link>
        {url && (
          <Link href={url} target="_blank">
            <FaEye
              className="text-slate-600 active:scale-95 transition-all duration-300"
              size={24}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
