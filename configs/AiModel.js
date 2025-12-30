import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// UPDATED: Targeted 'gemini-2.5-flash' per user request.
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const chatSession = model.startChat({
  generationConfig: {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  },
  history: [
    {
      role: "user",
      parts: [
        { text: "You are an AI Logo Prompt Expert. Your job is to take basic user inputs (Brand Name, Description, Style, Colors) and generate a highly detailed, professional prompt that can be used by an image generation AI (like Stable Diffusion or Flux) to create a logo.\n\nOutput ONLY a JSON object with this format:\n{ \"prompt\": \"<The detailed image generation prompt>\", \"short_description\": \"<A 1-sentence summary of the logo idea>\" }" },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "`json\n{ \"prompt\": \"A modern, minimalist vector logo for a tech company named 'TechNova'. The logo features a stylized letter 'T' incorporating circuit board patterns, colored in electric blue and silver on a white background. Clean lines, geometric shapes, flat design.\", \"short_description\": \"Modern circuit-board style 'T' logo in blue and silver.\" }\n`" },
      ],
    },
  ],
});
