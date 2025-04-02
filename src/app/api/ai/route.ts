import openai from "@/app/utils/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { userPrompt } = body;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Generate 6 recipes for ${userPrompt} dish. Recipes need to contain most of these ingredients. Output should be a **valid JSON array** and each object should have fields: 'name' (string), 'description' (string), and 'instructions' (array of strings). Ensure the JSON is properly formatted. If you don't know the ingredient, generate a random dish. Write them in Polish.`,
        },
      ],
      max_tokens: 800,
    });

    return NextResponse.json({
      completion: completion.choices[0].message.content,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({
        error: "Error processing the request",
        message: error.message,
      });
    }
    return NextResponse.json({
      error: "Unknown error occurred",
    });
  }
}
