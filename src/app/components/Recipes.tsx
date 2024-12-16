import React, { useState } from "react";
import DefaultIngredients from "./DefaultIngredients";

type RecipesProps = {
  handleApiCall: () => void;
};

const Recipes = ({ handleApiCall }: RecipesProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
          className="text-black py-3 px-2 rounded-lg w-[20%] bg-white/70 backdrop-blur-md"
        />
        <button
          onClick={handleApiCall}
          className="px-4 py-3 bg-slate-400 font-semibold"
        >
          Search
        </button>
      </div>
      <DefaultIngredients />
    </>
  );
};

export default Recipes;
