"use client";
import Link from "next/link";
import { PiOvenBold } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="h-full w-full rounded-2xl  bg-[url('/bg.jpg')] bg-center bg-cover text-white font-montserrat px-[5%]">
      <div className="flex items-center justify-between mt-[2%]">
        <Link href="/" className="flex items-center cursor-pointer">
          <PiOvenBold className="text-4xl" />
          <h1 className="text-4xl font-DynaPuff">CoNaTalerz</h1>
        </Link>
        <div className="flex items-center gap-8 text-2xl">
          <Link href="/">Strona główna</Link>
          <Link href="/recipes">Generuj przepisy</Link>
          <Link href="#">O nas</Link>
          <Link href="#">Kontakt</Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-4 pt-32">
        <div>
          <h2 className="text-5xl font-DynaPuff">
            Ekspresowo wygeneruj przepisy<br></br> z każdych produktów!
          </h2>
          <p className="text-xl mt-2 text-gray-200">
            Wpisz produkty, kliknij przycisk i ciesz się z wygenerowanych
            przepisów
          </p>
          <div className="mt-8">
            <div className="w-[65%] flex items-center justify-between bg-white/40 text-white p-2 rounded-xl">
              <p className="cursor-default text-lg">Wpisz swoje składniki</p>
              <div className="flex items-center gap-1">
                <FiArrowRight className="text-xl animate-pulse" />
                <button className="px-4 py-2 bg-[#b8a225] rounded-xl font-semibold  cursor-default">
                  Generuj
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl">Przykładowe zapytania</h3>
            <div className="flex justify-between w-[65%] flex-wrap gap-4 bg-white/40 rounded-xl overflow-hidden mt-2 p-4">
              <div className="grid place-items-center bg-white/20 p-1 rounded-xl w-[30%]">
                kurczak, ryż, mix warzyw
              </div>
              <div className="grid place-items-center bg-white/20 p-2 rounded-xl w-[30%]">
                wołowina, tortilla, ser żółty
              </div>
              <div className="grid place-items-center bg-white/20 p-2 rounded-xl w-[30%]">
                kasza, schab, ogórek kiszony
              </div>
              <div className="grid place-items-center bg-white/20 p-2 rounded-xl w-[30%]">
                wieprzowina, ziemniaki, pomidor
              </div>
              <div className="grid place-items-center bg-white/20 p-2 rounded-xl w-[30%]">
                chleb, szynka, pieczarki
              </div>
              <div className="grid place-items-center bg-white/20 p-2 rounded-xl w-[30%]">
                Makaron, sos w proszku, ser żółty
              </div>
            </div>
            <div className="w-[65%] flex items-center justify-center mt-8">
              <Link
                href="/recipes"
                className="px-6 py-2 bg-[#b8a225] rounded-xl text-2xl"
              >
                Sprawdź teraz
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
