"use client";
import axios from "axios";
import { useState } from "react";
import { SiCircleci } from "react-icons/si";

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
    if (userInput.length == 0) {
    } else {
      handleOpenAiCall(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="flex flex-col items-center font-montserrat pt-24">
      <div className="w-[20rem] pb-8">
        <div className="flex flex-col justify-between">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter your ingredients"
            className="p-4"
          />
          <button
            onClick={handleGenerateRecipes}
            className="px-4 py-2 bg-black text-white hover:brightness-75 duration-300 text-center"
          >
            {loading ? (
              <span className="flex justify-center">
                <SiCircleci className="animate-spin" />
              </span>
            ) : (
              <span>Generate recipes</span>
            )}
          </button>
        </div>
      </div>
      {recipes && (
        <div>
          {recipes && (
            <div className="grid grid-cols-3 gap-2">
              {recipes.map((recipe: any) => (
                <div
                  className="p-2 bg-white/40 max-w-96 rounded-xl"
                  key={Math.floor(Math.random() * 999)}
                >
                  <h4 className="font-semibold">{recipe.name}</h4>
                  <p className="py-2 text-gray-400">{recipe.description}</p>
                  <div className="flex flex-col">
                    {recipe.instructions.map((str: string, index: number) => (
                      <p key={index}>{str}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
