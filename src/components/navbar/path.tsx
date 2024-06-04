import Link from "next/link";

type PathProps = {
  href: string;
  name: string;
};

export function Path({ href, name }: PathProps) {
  return (
    <Link
      href={href}
      className="flex items-center text-sm md:text-[0.75rem] hover:bg-[#4f46e5] transition-all ease-linear duration-300 p-2 rounded-full"
    >
      {name}
    </Link>
  );
}
