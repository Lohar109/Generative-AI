

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function main() {
    
    try {
        const stream = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "system", content: "You are a poetic storyteller." },
                { role: "user", content: "Write a short poem about the sunset in Mumbai." }
            ],
            
            // Enabling stream mode
            stream: true, 
        });

        console.log("AI Typing...\n");

        // Reading the stream chunk by chunk
        for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            
            // process.stdout.write is used to print on the same line without extra spaces
            process.stdout.write(content);
        }

        console.log("\n\n--- Stream Completed ---");

    } catch (error) {
        console.error("Streaming error:", error.message);
    }
}

main();