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
];

export const promptExamples = [
  {
    id: 1,
    content: "Kurczak, ryż, mix warzyw",
  },
  {
    id: 2,
    content: "Wołowina, tortilla, ser żółty",
  },
  {
    id: 3,
    content: "Kasza, schab, brokół",
  },
  {
    id: 4,
    content: "Wieprzowina, ziemniaki",
  },
  {
    id: 5,
    content: "Banan, nutella, chleb",
  },
  {
    id: 6,
    content: "Parówki, jajka",
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
