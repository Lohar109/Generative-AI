

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runWorkflow() {
    try {
        // Generate an Idea ---
        console.log("Step 1: Generating a unique startup idea...");
        const ideaResponse = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: "Give me a one-sentence unique startup idea for 2026." }]
        });

        const startupIdea = ideaResponse.choices[0].message.content;
        console.log(`Idea: ${startupIdea}\n`);

        // Create a Tagline for that Idea
        console.log("Step 2: Creating a catchy tagline for this idea...");
        const taglineResponse = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "You are a marketing expert." },
                { role: "user", content: `Create a 3-word catchy tagline for this startup: "${startupIdea}"` }
            ]
        });

        console.log(`Tagline: ${taglineResponse.choices[0].message.content}`);

    } catch (error) {
        console.error("Workflow Error:", error.message);
    }
}

runWorkflow();