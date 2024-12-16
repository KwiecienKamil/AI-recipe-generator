import React from "react";
import IngredientCard from "./ui/IngredientCard";
import { defaultIngredients } from "../utils/Helpers";

const DefaultIngredients = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center gap-2 ">
        {defaultIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient.id}
            name={ingredient.name}
            icon={ingredient.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DefaultIngredients;
