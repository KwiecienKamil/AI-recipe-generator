import { GiChickenLeg } from "react-icons/gi";
import { BiBowlRice } from "react-icons/bi";
import { LuBeef } from "react-icons/lu";
import { FaSpaghettiMonsterFlying } from "react-icons/fa6";

export const navLinks = [
  {
    name: "Strona Główna",
    href: "/",
  },
  {
    name: "Generuj przepisy",
    href: "/recipes",
  },
  {
    name: "O nas",
    href: "/about",
  },
  {
    name: "Kontakt",
    href: "/contact",
  },
];

export const promptExamples = [
  {
    id: 1,
    content: "kurczak, ryż, mix warzyw",
  },
  {
    id: 2,
    content: "wołowina, tortilla, ser żółty",
  },
  {
    id: 3,
    content: "kasza, schab, brokół",
  },
  {
    id: 4,
    content: "wieprzowina, ziemniaki",
  },
  {
    id: 5,
    content: "chleb, szynka, pieczarki",
  },
  {
    id: 6,
    content: "Makaron, mleko",
  },
];

export const defaultIngredients = [
  {
    id: 1,
    name: "Chicken",
    icon: <GiChickenLeg />,
  },
  {
    id: 2,
    name: "Rice",
    icon: <BiBowlRice />,
  },
  {
    id: 3,
    name: "Beef",
    icon: <LuBeef />,
  },
  {
    id: 4,
    name: "Pasta",
    icon: <FaSpaghettiMonsterFlying />,
  },
];
