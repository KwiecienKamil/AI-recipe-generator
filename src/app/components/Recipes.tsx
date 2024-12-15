import React from "react";

const Recipes = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-2">
        <input
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="Search"
          className="text-black py-3 px-2 rounded-lg w-[20%] bg-white/70 backdrop-blur-md"
        />
      </div>
      <div className=""></div>
    </>
  );
};

export default Recipes;
