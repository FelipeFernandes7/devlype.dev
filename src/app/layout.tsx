import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { LayoutPage } from "@/components/layoutPage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Fernandes",
  description: "Meu Portfólio",
  keywords: ["Felipe Fernandes", "devlype", "devlypedotdev", "devlype.dev"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
