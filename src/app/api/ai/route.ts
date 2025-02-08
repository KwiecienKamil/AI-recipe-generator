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
          content: `Generate 6 recipes for ${userPrompt} dish. Recipes need to contain most of these ingredients. Output should be in JSON array and each object should contain field name named 'name', description field named 'description' and array of step by step instructions. After dot add space. If you don't know the ingredient just generate random dish. Write them in polish language.`,
        },
      ],
    });

    return NextResponse.json({
      completion: completion.choices[0].message.content,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "Error processing the request",
      message: error.message,
    });
  }
}
