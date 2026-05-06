import "./globals.css";

import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finly",
  description: "App to manager the finances",
};

import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex">
        <SideBar />

        {children}
      </body>
    </html>
  );
}
