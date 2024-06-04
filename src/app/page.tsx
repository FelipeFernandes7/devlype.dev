"use client";

import picture from "@/assets/picture-profile.jpg";
import { Skills } from "@/components/skills";
import { home } from "@/data/home";
import { skills } from "@/data/skills";
import saveAs from "file-saver";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  const router = useRouter();
  const handleContact = () => {
    router.push("/contact");
  };

  function handleDownloadPdf() {
    const pdfURL = "/pdfs/cv-code.pdf";

    fetch(pdfURL)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Felipe Dev CV.pdf");
      })
      .catch((error) => console.error("Erro ao baixar o PDF:", error));
  }

  return (
    <div className="w-full flex flex-col items-center md:max-w-7xl">
      <div className="w-full items-center flex flex-col my-5">
        <h1 className="my-5 text-4xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent">
          Software Engineer
        </h1>
        <div className="gap-4 w-full flex flex-col justify-center mt-5 md:flex-row ">
          <Image
            src={picture}
            alt={"Myself"}
            quality={100}
            className="w-full md:max-w-[500px] md:max-h-[500px] rounded-lg"
            objectFit="cover"
          />
          <div className="w-full h-full flex flex-col">
            <h1>{home.description}</h1>
            <div className="w-full h-full flex flex-col md:flex-row md:justify-start justify-end items-center">
              <button className="w-full flex items-center justify-center bg-red-200 p-4 rounded-xl my-5 bg-gradient-to-r from-[#4f46e5] to-[#c026d3] cursor-pointer active:scale-95 transition-all duration-300 md:max-w-[300px]">
                Download Cv
                <FiDownload className="ml-2" />
              </button>
            </div>
          </div>
        </div>
        <h1 className="mt-5 text-4xl font-bold bg-gradient-to-r from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent">
          My Skills
        </h1>
      </div>
      <section className="w-full flex flex-wrap items-center justify-center gap-4">
        {skills.map((item) => (
          <Skills
            key={item.programmingLanguage}
            icon={item.languageIcon}
            programmingLanguage={item.programmingLanguage}
            rating={item.rating}
          />
        ))}
      </section>
    </div>
  );
}
