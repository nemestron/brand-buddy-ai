import { HfInference } from "@huggingface/inference";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // 1. Initialize the Official SDK
    // This automatically handles the URL routing for us.
    const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

    // 2. Generate the Image using FLUX.1-schnell
    // The SDK knows exactly where to find this model.
    const responseBlob = await hf.textToImage({
      model: "black-forest-labs/FLUX.1-schnell",
      inputs: prompt,
      parameters: {
        // Flux doesn't use 'negative_prompt' or 'guidance_scale' in the same way,
        // but we keep it simple for the SDK.
      }
    });

    // 3. Convert the Raw Blob to Base64 for the Frontend
    const arrayBuffer = await responseBlob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = "data:image/png;base64," + buffer.toString("base64");

    return NextResponse.json({ image: base64Image });
  } catch (e) {
    console.error("SDK Generation Error:", e);
    
    // Better Error Logging
    let message = e.message;
    if (message.includes("404")) {
       message = "Model not found or Access denied. Ensure you accepted the license at https://huggingface.co/black-forest-labs/FLUX.1-schnell";
    }
    
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
