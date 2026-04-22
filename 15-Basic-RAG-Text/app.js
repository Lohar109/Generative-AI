

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runBasicRAG() {
    try {
        // Read the local knowledge base
        const myData = fs.readFileSync("15-Basic-RAG-Text/knowledge.txt", "utf8");

        const userQuery = "How much does the Universal Translator Chip cost and where is the office?";

        // Inject the data into the System Prompt (The RAG Part)
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: `You are a helpful assistant. Use the following context to answer the user's questions: \n\n ${myData}` 
                },
                { role: "user", content: userQuery }
            ]
        });

        console.log("--- AI Response based on your file ---");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.error("RAG Error:", error.message);
    }
}

runBasicRAG();