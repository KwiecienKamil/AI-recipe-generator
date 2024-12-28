"use client";
import axios from "axios";
import { useState } from "react";

const page = () => {
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleOpenAiCall = (userInput: any) => {
    axios
      .post("http://localhost:3000/api/ai", {
        userPrompt: userInput,
      })
      .then((res) => {
        let rawData = res.data.completion;

        rawData = rawData.replace(/```json|```/g, "").trim();

        try {
          const cleanedData = JSON.parse(rawData);

          console.log("Cleaned JSON:", cleanedData);
          setRecipes(cleanedData);
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
    <div className="h-full font-montserrat pt-8">
      <div className="flex flex-col justify-center">
        <h1>Recipe Generator</h1>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your recipe prompt here..."
          className="p-4"
        />
        <button
          onClick={handleGenerateRecipes}
          className="px-4 py-2 bg-blue-500 hover:brightness-75 duration-300"
        >
          Generate Recipes
        </button>
        {recipes && (
          <div>
            <h2>Generated Recipes:</h2>
            <div className="grid grid-cols-3 gap-2">
              {recipes.map((recipe: any) => (
                <div className="p-2 bg-white/40 max-w-96 rounded-xl ">
                  <h4>{recipe.name}</h4>
                  <p>{recipe.description}</p>
                  <p>{recipe.instructions}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
