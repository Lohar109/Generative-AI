

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function trackUsage() {
    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { role: "user", content: "Explain Quantum Physics in 2 sentences." }
            ]
        });

        const usage = response.usage;

        console.log("--- AI Response ---");
        console.log(response.choices[0].message.content);

        console.log("\n--- Usage Report ---");
        console.log(`Prompt Tokens: ${usage.prompt_tokens}`);
        console.log(`Completion Tokens: ${usage.completion_tokens}`);
        console.log(`Total Tokens Used: ${usage.total_tokens}`);

    } catch (error) {
        console.error("Usage Tracking Error:", error.message);
    }
}

trackUsage();