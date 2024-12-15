"use client";
import axios from "axios";
import { useState } from "react";
import Recipes from "./components/Recipes";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const handleClick = () => {
    axios.get("http://localhost:3000/api/ai").then((res) => {
      let rawData = res.data.completion;

      rawData = rawData.replace(/```json|```/g, "").trim();

      try {
        const cleanedData = JSON.parse(rawData);

        console.log("Cleaned JSON:", cleanedData);
        setRecipes(cleanedData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  };
  return (
    <div className="h-full w-full justify-center rounded-xl">
      <Recipes />
    </div>
  );
}
