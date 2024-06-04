import { ReactNode } from "react";

interface LayoutPageProps {
  children: ReactNode;
}

export function LayoutPage({ children }: LayoutPageProps) {
  return (
    <main className="w-full flex justify-center items-center h-full mx-auto px-4 md:px-0">
      {children}
    </main>
  );
}
