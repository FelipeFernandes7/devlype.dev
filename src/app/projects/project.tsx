"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

interface ProjectsProps {
  title: string;
  image: StaticImageData;
  stacks: string[];
  repo: string;
  url?: string;
}
export function Project({ image, repo, stacks, title, url }: ProjectsProps) {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-300 w-full md:max-w-[350px] border-[1px] border-slate-600 rounded-2xl flex flex-col">
      <div className="w-full h-full relative">
        <Image
          src={image}
          className="rounded-t-2xl w-full h-36 object-cover"
          alt="My Projects"
          quality={100}
        />
        <div className="flex absolute top-3 right-3 gap-2 ">
          {url && (
            <Link
              href={url}
              target="_blank"
              className="hover:bg-slate-800 active:scale-95 transition-all duration-300 text-white p-2 rounded-full bg-slate-700"
            >
              <FaEye size={24} />
            </Link>
          )}
          <Link
            href={repo}
            target="_blank"
            className="hover:bg-slate-800 active:scale-95 transition-all duration-300 text-white p-2 rounded-full bg-slate-700"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
      <section className="p-4 w-full flex flex-col items-center justify-center">
        <h1 className="w-full font-bold text-xl bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="font-bold text-medium w-full py-2">Stacks:</p>
        <div className="w-full flex flex-wrap justify-center items-center gap-2">
          {stacks.map((item) => (
            <p
              key={item}
              className="font-bold text-xs border-[1px] border-slate-600 px-1 rounded-full flex items-center"
            >
              {item}
              <MdOutlineVerified className="text-[#34d399] text-xs ml-2" />
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
