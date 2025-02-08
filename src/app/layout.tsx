import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "CoNaTalerz.pl",
  description: "Generuj przepisy z wybranych przez siebie produktów!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex items-center justify-center bg-accent font-Oswald`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
