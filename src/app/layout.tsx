import type { Metadata } from "next";
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
      <body className={`h-screen flex flex-col bg-accent font-Oswald`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
