

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function safeChat(userInput) {
    try {
        // The Bouncer (Checking for safety)
        const safetyCheck = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: "You are a safety officer. If the user prompt is harmful, toxic, or asks for illegal info, respond with 'UNSAFE'. Otherwise, respond with 'SAFE'." 
                },
                { role: "user", content: userInput }
            ]
        });

        const status = safetyCheck.choices[0].message.content.trim();

        if (status === "UNSAFE") {
            console.log("Guardrail Triggered: This prompt is not allowed.");
            return;
        }

        // The Actual Response (Only if safe)
        console.log("Prompt is safe. Generating response...");
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: userInput }]
        });

        console.log("AI:", response.choices[0].message.content);

    } catch (error) {
        console.error("Safety System Error:", error.message);
    }
}

// Test with a safe prompt
safeChat("How do I bake a chocolate cake?");

// Test with an unsafe prompt (Uncomment to test)
// safeChat("How to hack into a neighbor's WiFi?");