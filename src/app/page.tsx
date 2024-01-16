"use client";

import { Wrapper } from "@/components/wrapper";
import profileImg from "../../public/picture-profile.jpg";
import saveAs from "file-saver";
import Image from "next/image";
import { useState } from "react";
import { FiLoader } from "react-icons/fi";

export default function Home() {
  const [loading, setLoading] = useState(false);

  function handleDownloadPdf() {
    setLoading(true);
    const pdfURL = "/pdfs/cv-code.pdf";

    fetch(pdfURL)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Felipe CV.pdf");
      })
      .catch((error) => console.error("Erro ao baixar o PDF:", error));
    setLoading(false);
  }

  return (
    <Wrapper>
      <section className="w-full items-center justify-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#1d4ed8] bg-clip-text text-transparent mt-5">
          Software Engineer
        </h1>
        <div className="w-full flex items-center justify-center flex-col">
          <Image
            src={profileImg}
            alt={"my profile picture"}
            quality={100}
            objectFit="cover"
            className="rounded-full h-56 w-56  "
          />
          <span className="w-full flex items-center text-center mt-4 font-bold text-lg max-w-5xl">
            I am a software developer with a predominant focus on the front-end,
            but I also have extensive knowledge of the back-end. I am looking
            for an opportunity that allows me to face challenges and continue to
            evolve with the company. I am ambitious and want to advance in my
            professional career. I have a passion for programming and look
            forward to contributing significantly to the team's success.
          </span>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row mt-4">
          <button
            onClick={handleDownloadPdf}
            className="hover:opacity-65 bg-gradient-to-r from-[#4f46e5] to-[#1d4ed8] p-3 text-lg font-bold rounded-full w-full md:max-w-52 text-center active:scale-95 transition-all duration-300"
          >
            {loading ? (
              <FiLoader className="animate-spin" size={26} color={"#fff"} />
            ) : (
              "Download CV"
            )}
          </button>
          <button className=" hover:opacity-65 bg-transparent border-2 border-[#1d4ed8] text-[#1d4ed8] p-3 text-lg font-bold rounded-full w-full md:max-w-52 text-center active:scale-95 transition-all duration-300">
            Contato
          </button>
        </div>
      </section>
    </Wrapper>
  );
}
