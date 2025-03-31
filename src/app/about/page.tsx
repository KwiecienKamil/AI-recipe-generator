import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-[5%] min-h-screen w-full bg-[url('/bg.jpg')] bg-center bg-cover flex flex-col items-center text-white">
      <Navbar />
      <div className="flex items-center justify-center flex-col max-w-[40rem] mt-2 mb-12">
        <h2 className="text-3xl text-accent font-bold">Kim jesteśmy?</h2>
        <p className="pt-4 text-xl">
          Jesteśmy zespołem pasjonatów, którzy wierzą, że gotowanie powinno być
          proste, przyjemne i dostępne dla każdego. Naszym celem jest ułatwianie
          codziennego życia. Pomagamy Ci szybko znaleźć pomysły na pyszne
          posiłki, wykorzystując składniki, które już masz. Nie musisz być
          szefem kuchni ani spędzać godzin na planowaniu - nasza aplikacja zrobi
          to za Ciebie! Chcemy, aby każdy mógł jeść smacznie, zdrowo i bez
          marnowania żywności.
        </p>
      </div>
      <div className=" w-full flex items-center justify-center gap-8">
        <div className="max-w-[28rem]">
          <h1 className="text-2xl">
            Stoisz przed lodówką i nie wiesz, co ugotować?{" "}
            <span className="font-bold text-accent">CoNaTalerz</span> rozwiąże
            ten problem! Nasz inteligentny generator przepisów zamieni
            składniki, które masz w domu, w pyszne i łatwe do przygotowania
            dania.
          </h1>
          <p className="pt-2 text-xl">
            🥕 Zero marnowania żywności – Wykorzystaj to, co masz, i ogranicz
            niepotrzebne zakupy.<br></br> 🍳 Łatwe gotowanie – Szybkie i smaczne
            przepisy dostosowane do Twoich składników.<br></br> 🌍 Mądrze i
            ekologicznie – Wykorzystaj każdy produkt, ciesząc się domowymi
            posiłkami.
          </p>
        </div>
        <Image
          src="https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="robot with wine"
          className="max-w-[600px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default page;
