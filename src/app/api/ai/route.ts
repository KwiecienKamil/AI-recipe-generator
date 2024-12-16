// import openai from "@/app/utils/openai";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         { role: "system", content: "You are a helpful assistant." },
//         {
//           role: "user",
//           content:
//             "Generate three recipes for pasta, chicken, tomato souce, garlic dish. Output should be in JSON array and each object should contain field name named 'name', description field named 'description' and array of step by step instructions",
//         },
//       ],
//     });

//     return NextResponse.json({
//       completion: completion.choices[0].message.content,
//     });
//   } catch (error: any) {
//     return NextResponse.json({
//       error: "Error processing the request",
//       message: error.message,
//     });
//   }
// }

import openai from "@/app/utils/openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse the JSON body from the incoming request
    const body = await req.json();

    // Extract the user-provided prompt or any other values from the body
    const { userPrompt } = body;

    // Make an API call to OpenAI with the user input
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Generate three recipes for ${userPrompt} dish. Output should be in JSON array and each object should contain field name named 'name', description field named 'description' and array of step by step instructions`, // Use the prompt provided by the frontend
        },
      ],
    });

    // Return the OpenAI response as JSON
    return NextResponse.json({
      completion: completion.choices[0].message.content,
    });
  } catch (error: any) {
    // Return a JSON response for any errors
    return NextResponse.json({
      error: "Error processing the request",
      message: error.message,
    });
  }
}
