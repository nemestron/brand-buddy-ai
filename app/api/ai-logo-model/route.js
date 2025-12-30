import { chatSession } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    
    // DEBUG: Log the prompt to ensure we received data
    console.log("SERVER: Received Prompt:", prompt);

    // DEBUG: Check if AI Session is ready
    if (!chatSession) {
        throw new Error("AI Chat Session is not initialized. Check API Keys.");
    }

    // Send the user's inputs to Gemini
    const result = await chatSession.sendMessage(prompt);
    
    // Get the text response
    const responseText = result.response.text();
    console.log("SERVER: Gemini Raw Response:", responseText);

    const cleanJson = responseText.replace(/`json|`/g, '').trim();

    return NextResponse.json(JSON.parse(cleanJson));
  } catch (e) {
    // DEBUG: Log the actual error to the terminal
    console.error("SERVER ERROR:", e);
    return NextResponse.json({ error: e.message }, { status: 400 });
  }
}
