import { OpenAI } from "openai"; // Correct import for newer versions

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key
});

export default openai;
