import { ReactNode } from "react";

interface LayoutPageProps {
  children: ReactNode;
}

export function LayoutPage({ children }: LayoutPageProps) {
  return (
    <main className="w-full flex justify-center items-center h-full max-w-7xl mx-auto px-4">
      {children}
    </main>
  );
}
