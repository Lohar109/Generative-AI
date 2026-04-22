

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runFewShot() {
    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "You convert boring sentences into Gen-Z slang with emojis." },
            
                { role: "user", content: "I am very tired today." },
                { role: "assistant", content: "Bruh, I'm literally ded 💀 low battery vibes frfr." },
                
                { role: "user", content: "The food was good." },
                { role: "assistant", content: "That meal was bussin' 🍔 no cap 🧢." },

                { role: "user", content: "I am going to the gym now." }
            ],
        });

        console.log("Gen-Z AI says:", response.choices[0].message.content);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

runFewShot();