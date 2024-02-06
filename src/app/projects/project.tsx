import Image from "next/image";

export function Project() {
  return (
    <div className="w-full border-slate-600 md:max-w-[500px]">
      <article className="w-full flex ">
        <Image src={""} alt={""} width={100} objectFit="cover" quality={100} />
      </article>
    </div>
  );
}
