

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runReasoning() {
    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: "You are a logical reasoning assistant. Always show your step-by-step thinking process before providing the final answer." 
                },
                { 
                    role: "user", 
                    content: "A shirt costs $20. It's on sale for 25% off. After the discount, a 10% tax is added. What is the final price? Think step-by-step." 
                }
            ]
        });

        console.log("--- AI Reasoning & Final Answer ---");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.error("Reasoning Error:", error.message);
    }
}

runReasoning();