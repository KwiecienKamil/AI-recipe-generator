import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`flex flex-col font-Oswald`}>
        {children}
      </body>
    </html>
  );
}
