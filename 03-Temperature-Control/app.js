

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function main() {
    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile", 
            messages: [
                { role: "system", content: "You are a creative storyteller." },
                { role: "user", content: "Tell me a 1-line story about a cat who found a time machine." }
            ],

            temperature: 0.1 
        });

        console.log("Creative Story:", response.choices[0].message.content);
        
    } catch (err) {
        console.log("Error :", err.message);
    }
}

main();