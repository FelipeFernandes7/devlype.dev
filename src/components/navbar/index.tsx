"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGripfire } from "react-icons/fa6";
export function Navbar() {
  const pages = ["about", "projects", "contact"] as const;
  const pathname = usePathname();
  const [hovered, setHovered] = useState("");
  return (
    <header className=" z-30 mt-3 flex min-h-[3.75rem] w-full flex-wrap items-center text-xs text-white md:mt-0">
      <Link
        href="/"
        className="order-1 ml-3 flex cursor-pointer appearance-none items-center justify-center rounded-lg border-none bg-transparent p-2 font-heading font-bold text-white transition-colors duration-200 ease-in-out hover:bg-hover"
      >
        <FaGripfire
          size={44}
          color="#fff"
          className="hover:opacity-60 transition-all duration-300"
        />
      </Link>
      <nav className="order-3 flex-1 basis-full overflow-x-auto overflow-y-hidden text-center md:order-2 md:basis-[initial]">
        <ul className="relative top-[5px] inline-flex list-none justify-around">
          {pages.map((page) => {
            const path = `/${page.toLowerCase()}`;
            const isHovered = hovered === page;
            return (
              <li key={page}>
                <Link
                  href={path}
                  className="border-0 hover:opacity-100 focus:opacity-100"
                >
                  <motion.span
                    className={cn(
                      "relative inline-block cursor-pointer p-5 text-xs font-medium uppercase tracking-[0.075em] text-secondary transition-colors duration-200 ease-in-out hover:text-primary",
                      pathname === path && "text-primary after:opacity-100",
                      "after:absolute after:left-0 after:right-0 after:top-[1.125rem] after:mx-auto after:h-px after:w-5 after:bg-white after:opacity-0 after:transition-opacity after:duration-200 after:ease-in-out after:content-['']",
                    )}
                    onHoverStart={() => setHovered(page)}
                    onHoverEnd={() => setHovered("")}
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="nav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute left-0 right-0 top-[7px] -z-10 rounded-lg bg-gradient-to-r from-[#18181b] to-[#334155] p-5"
                      />
                    )}
                    {page}
                  </motion.span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <aside className="order-2 ml-auto mr-3 flex items-center">
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-transparent p-2 ease-in-out hover:bg-hover text-3xl font-medium hover:opacity-60 transition-all duration-300">
          ⌘
        </div>
      </aside>
    </header>
  );
}
