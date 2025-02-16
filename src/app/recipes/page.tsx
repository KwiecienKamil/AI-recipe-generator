"use client";
import axios from "axios";
import { useState } from "react";
import { SiCircleci } from "react-icons/si";
import Navbar from "../components/Navbar";

const page = () => {
  const [userInput, setUserInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOpenAiCall = (userInput: string) => {
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
    <div className="relative h-screen bg-[url('/bg.jpg')] bg-center bg-cover flex flex-col items-center font-montserrat  bg-black px-[5%]">
      <Navbar />
      <div className=" pb-8">
        <div className="flex flex-col text-xl">
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Wpisz składniki"
            className="p-4 rounded-t-xl bg-white/20 text-white focus:outline-none"
          />
          <button
            onClick={handleGenerateRecipes}
            className="px-4 py-2 bg-white/50 text-white rounded-b-xl hover:brightness-75 duration-300 text-center"
          >
            {loading ? (
              <span className="flex justify-center text-2xl">
                <SiCircleci className="animate-spin" />
              </span>
            ) : (
              <span className="text-xl">Generuj przepisy</span>
            )}
          </button>
        </div>
      </div>
      {recipes && (
        <div>
          {recipes && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {recipes.map((recipe: any) => (
                <div
                  className="p-2 bg-white/40 max-w-96 rounded-xl"
                  key={recipe.name}
                >
                  <h4 className="font-semibold text-accent text-xl">
                    {recipe.name}
                  </h4>
                  <p>{recipe.description}</p>
                  <div className="pt-4 flex flex-col text-[#1d1d1d]">
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
