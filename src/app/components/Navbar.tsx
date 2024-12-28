import Link from "next/link";
import React from "react";
import { FaPlateWheat } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between py-8 px-[5%] text-white">
      <Link href="/" className="flex items-center cursor-pointer ">
        <FaPlateWheat className="text-3xl" />
        <h1 className="text-2xl font-DynaPuff">CoNaTalerz</h1>
      </Link>
      <div className="flex items-center gap-8 text-2xl">
        <Link href="/">Strona główna</Link>
        <Link href="/recipes">Generuj przepisy</Link>
        <Link href="#">O nas</Link>
        <Link href="#">Kontakt</Link>
      </div>
    </div>
  );
};

export default Navbar;
