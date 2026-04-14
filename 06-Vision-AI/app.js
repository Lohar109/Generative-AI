

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function analyzeImage() {
    console.log("--- Project 06: Vision AI ---");
    console.log("Current Status: Paused (Model Decommissioned by Groq)");
    console.log("Check README.md for debugging details.\n");

    /* NOTE: The logic below is correct for Multimodal Vision.
    Models like 'llama-3.2-11b-vision-preview' are currently offline.
    This code will work as soon as Groq releases a new stable vision model.
    */
    
    /*
    const response = await client.chat.completions.create({
        model: "llama-3.2-11b-vision-preview", 
        messages: [
            {
                role: "user",
                content: [
                    { type: "text", text: "What's in this image?" },
                    { type: "image_url", image_url: { url: "IMAGE_URL_HERE" } },
                ],
            },
        ],
    });
    */
}

analyzeImage();