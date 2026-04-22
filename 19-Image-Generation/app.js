

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

async function generateImage() {
    try {
        console.log("Generating a creative image... please wait.");

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: "A futuristic cyberpunk city with neon lights, 8k resolution, highly detailed, cinematic lighting, coding symbols floating in the air.",
            n: 1,
            size: "1024x1024",
        });

        const imageUrl = response.data[0].url;
        console.log("\n--- Image Successfully Generated ---");
        console.log(`View your image here: ${imageUrl}`);

    } catch (error) {
        console.error("Image Generation Error:", error.message);
    }
}

generateImage();