"use client";
import axios from "axios";
import { useState } from "react";
import { CgShapeHalfCircle } from "react-icons/cg";

const page = () => {
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpenAiCall = (userInput: any) => {
    setLoading(true);
    axios
      .post("http://localhost:3000/api/ai", {
        userPrompt: userInput,
      })
      .then((res) => {
        let rawData = res.data.completion;
        rawData = rawData.replace(/```json|```/g, "").trim();
        try {
          const cleanedData = JSON.parse(rawData);
          setRecipes(cleanedData);
          setLoading(false);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        console.error("Error making the API call:", error);
      });
  };

  const handleGenerateRecipes = () => {
    handleOpenAiCall(userInput);
  };

  return (
    <div className="h-full font-montserrat pt-24">
      <div className="flex flex-col justify-center">
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your recipe prompt here..."
          className="p-4"
        />
      </div>
      {recipes && (
        <div>
          {recipes && (
            <div className="grid grid-cols-3 gap-2">
              {recipes.map((recipe: any) => (
                <div className="p-2 bg-white/40 max-w-96 rounded-xl ">
                  <h4>{recipe.name}</h4>
                  <p>{recipe.description}</p>
                  <p>{recipe.instructions}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <button
        onClick={handleGenerateRecipes}
        className="px-4 py-2 bg-black text-white hover:brightness-75 duration-300 text-center"
      >
        {loading ? (
          <CgShapeHalfCircle className="animate-spin" />
        ) : (
          <span>Generate recipes</span>
        )}
      </button>
    </div>
  );
};

export default page;
