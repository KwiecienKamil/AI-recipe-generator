"use client";
import Link from "next/link";
import { PiOvenBold } from "react-icons/pi";

export default function Home() {
  return (
    <div className="h-full w-full rounded-2xl bg-[#1A1A1A] text-white font-montserrat px-[5%]">
      <div className="flex items-center justify-between mt-[2%]">
        <Link href="/" className="flex items-center cursor-pointer">
          <PiOvenBold className="text-4xl" />
          <h1 className="text-4xl font-DynaPuff">CoNaTalerz</h1>
        </Link>
        <div className="flex items-center gap-8 text-2xl">
          <a href="#">Strona główna</a>
          <a href="#">Generuj przepisy</a>
          <a href="#">O nas</a>
          <a href="#">Kontakt</a>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-4 pt-32">
        <div>
          <h2 className="text-5xl font-DynaPuff">
            Ekspresowo wygeneruj przepisy<br></br> z każdych produktów!
          </h2>
          <p className="text-xl mt-2 text-gray-400">
            Wpisz produkty, kliknij przycisk i ciesz się z wygenerowanych
            przepisów
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
