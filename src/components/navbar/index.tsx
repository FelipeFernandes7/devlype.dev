"use client";

import Link from "next/link";
import { BiCommand } from "react-icons/bi";
import { BsSnow2 } from "react-icons/bs";
import { Path } from "./path";

export function Navbar() {
  const pages = ["about", "projects", "contact"] as const;

  return (
    <header className="w-full z-10 h-16 bg-[#151515] bg-opacity-60 shadow-md md:mb-0">
      <nav className="w-full h-full flex items-center md:px-6 px-2">
        <Link href="/" className="flex items-center text-3xl">
          <BsSnow2 />
        </Link>
        <div className="w-full flex justify-center items-center gap-2 ">
          {pages.map((page) => (
            <Path href={page} name={page.toUpperCase()} />
          ))}
        </div>
        <Link href="/" className="flex items-center text-3xl">
          <BiCommand />
        </Link>
      </nav>
    </header>
  );
}
