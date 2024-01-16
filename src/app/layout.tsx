import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Fernandes",
  creator: "Felipe Fernandes",
  alternates: {
    canonical: "https://devlype.dev",
    languages: {
      en: "https://devlype.dev",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@devlype",
    creator: "@devlype",
  },
  authors: [
    {
      name: "Felipe Fernandes",
      url: "https://devlype.dev",
    },
  ],
  themeColor: "#08070b",
  colorScheme: "dark",
  keywords: ["Felipe Fernandes", "devlype", "devlypedotdev", "devlype.dev"],
  openGraph: {
    type: "website",
    title: "Felipe Fernandes",
    locale: "en_US",
    url: "https://devlype.dev",
  },
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
