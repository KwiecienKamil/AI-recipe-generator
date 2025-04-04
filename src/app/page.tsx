"use client";
import Link from "next/link";
import homepageImage2 from "./assets/homepage2.png";
import Image from "next/image";
import { promptExamples } from "./utils/Helpers";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full bg-[url('/bg.jpg')] bg-center bg-cover text-white bg-black font-montserrat px-[5%]">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 pt-4">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl xl:text-6xl font-DynaPuff pt-8 xl:pt-2">
            Ekspresowo wygeneruj przepisy z każdych produktów!
          </h2>
          <p className="text-xl mt-2 text-gray-200">
            Wpisz produkty, kliknij przycisk i ciesz się z wygenerowanych
            przepisów
          </p>
          <div className="mt-2 flex justify-center lg:justify-start"></div>
          <div className="mt-8 lg:text-left flex flex-col items-center lg:items-start">
            <h3 className="text-2xl">Przykładowe składniki</h3>
            <div className="flex justify-center lg:justify-between w-[65%] flex-wrap gap-2 bg-white/40 rounded-xl overflow-hidden mt-2 p-4">
              {promptExamples.map((prompt) => (
                <div
                  key={prompt.id}
                  className="grid place-items-center bg-white/20 p-2 rounded-xl"
                >
                  {prompt.content}
                </div>
              ))}
            </div>
            <div className="w-[65%] flex items-center justify-center mt-8">
              <Link
                href="/recipes"
                className="px-8 py-4 bg-accent rounded-full text-md lg:text-2xl hover:brightness-75 duration-300"
              >
                Wypróbuj teraz!
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <Image
            src={homepageImage2}
            alt="Food"
            className="max-w-[500px] xl:max-w-[700px]"
          />
        </div>
      </div>
    </section>
  );
}
