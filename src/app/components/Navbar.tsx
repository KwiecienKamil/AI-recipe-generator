"use client";
import Link from "next/link";
import React from "react";
import { FaPlateWheat } from "react-icons/fa6";
import { navLinks } from "../utils/Helpers";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between py-8 px-[5%] text-white">
      <Link href="/" className="flex items-center cursor-pointer ">
        <FaPlateWheat className="text-3xl" />
        <h1 className="text-2xl font-DynaPuff">CoNaTalerz</h1>
      </Link>
      <div className="flex items-center gap-8 text-2xl">
        {navLinks.map((link) => {
          const isActive =
            pathname === new URL(link.href, window.location.origin).pathname;
          return (
            <Link
              href={link.href}
              key={link.name}
              className={
                isActive
                  ? "font-bold"
                  : "text-[#F1F1F1] font-thin hover:font-semibold duration-200"
              }
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
