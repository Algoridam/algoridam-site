import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algoridam",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/algoridam-favicon.svg" />
      </head>
      <body className="bg-gradient-custom from-custom-start to-custom-endbg-gradient-custom to-custom-end">
        <SiteHeader/>
        {children}
        </body>
    </html>
  );
}
