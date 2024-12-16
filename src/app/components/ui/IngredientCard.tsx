import React from "react";

type IngredientProps = {
  key: number;
  name: string;
  icon: JSX.Element;
};

const IngredientCard = ({ name, icon }: IngredientProps) => {
  return (
    <div className="px-4 py-2 rounded-xl bg-white/20 text-black flex flex-col items-center justify-center gap-1 cursor-pointer mt-4">
      <span>{icon}</span>
      <h3>{name}</h3>
    </div>
  );
};

export default IngredientCard;
