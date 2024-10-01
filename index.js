require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize the API client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function runGemini() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "What are the top 10 campsites that take reservations in Arizona?";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("Gemini says:", text);
  } catch (error) {
    console.error("Error calling Gemini API:", error);
  }
}

runGemini();