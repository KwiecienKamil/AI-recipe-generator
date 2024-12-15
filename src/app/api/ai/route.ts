import openai from "@/app/utils/openai";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content:
            "Generate three recipes for pasta, chicken, tomato souce, garlic dish. Output should be in JSON array and each object should contain field name named 'name', description field named 'description' and array of step by step instructions",
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
