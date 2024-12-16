"use client";
import axios from "axios";
import { useState } from "react";
import Recipes from "./components/Recipes";

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState(null);

  const handleOpenAiCall = (userInput: any) => {
    // Make sure to pass the user's input as an argument to the function
    axios
      .post("http://localhost:3000/api/ai", {
        userPrompt: userInput, // Include the user's input in the POST request body
      })
      .then((res) => {
        let rawData = res.data.completion;

        // Clean the raw response data (if necessary)
        rawData = rawData.replace(/```json|```/g, "").trim();

        try {
          const cleanedData = JSON.parse(rawData); // Parse JSON from the cleaned data

          console.log("Cleaned JSON:", cleanedData);
          setRecipes(cleanedData); // Update state with the cleaned data
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      })
      .catch((error) => {
        console.error("Error making the API call:", error);
      });
  };

  const handleGenerateRecipes = () => {
    handleOpenAiCall(userInput); // Call the function with user input
  };

  return (
    <div className="h-full w-full justify-center rounded-xl">
      <div>
        <h1>Recipe Generator</h1>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your recipe prompt here..."
        />
        <button onClick={handleGenerateRecipes}>Generate Recipes</button>
        {recipes && (
          <div>
            <h2>Generated Recipes:</h2>
            <div className="">
              {recipes.map((recipe: any) => (
                <p>{recipe.name}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
