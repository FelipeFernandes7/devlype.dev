import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <main className="w-full max-w-7xl mx-auto px-4">{children}</main>;
}
