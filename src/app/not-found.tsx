"use client";

import { Wrapper } from "@/components/wrapper";
import { useRouter } from "next/navigation";
import { IoIosReturnLeft } from "react-icons/io";

export default function NotFound() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <Wrapper>
      <div className="w-full h-[70vh] flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#2563eb] to-[#22d3ee] bg-clip-text text-transparent mt-5 text-center">
          Oops, it looks like this page doesn't exist :(
        </h1>
        <button
          onClick={handleRedirect}
          className=" flex items-center border-[1px] border-slate-600 p-4 md:p-3 rounded-xl text-sm font-bold mt-6 active:scale-95 transition-all duration-300"
        >
          Return to home
          <IoIosReturnLeft className="ml-2 text-slate-600" size={24} />
        </button>
      </div>
    </Wrapper>
  );
}
