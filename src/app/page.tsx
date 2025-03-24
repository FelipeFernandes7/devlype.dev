"use client";

import development from "@/lottie/development.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";

export default function Home() {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  return (
    <main className="w-full flex flex-col items-center justify-center h-screen">
      <h1 className="text-[50px] text-center leading-2">
        Felipe <span className="text-[50px] text-indigo-500">Fernandes</span>
      </h1>
      <h1 className=" text-slate-300">Portfólio em desenvolvimento...</h1>

      <Lottie
        className="w-96 h-96"
        lottieRef={lottieRef}
        animationData={development}
        loop={true}
        autoplay={true}
      />
    </main>
  );
}
