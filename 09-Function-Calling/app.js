

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});


function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

async function runFunctionCall() {

    const tools = [{
        type: "function",
        function: {
            name: "calculatePower",
            description: "Calculates the power of a number (base^exponent)",
            parameters: {
                type: "object",
                properties: {
                    base: { type: "number" },
                    exponent: { type: "number" }
                },
                required: ["base", "exponent"]
            }
        }
    }];

    const messages = [{ role: "user", content: "What is 15 raised to the power of 4?" }];

    try {
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: messages,
            tools: tools,
            tool_choice: "auto"
        });

        const responseMessage = response.choices[0].message;

        if (responseMessage.tool_calls) {

            console.log("AI decided to use a tool!");

            const toolCall = responseMessage.tool_calls[0];
            const args = JSON.parse(toolCall.function.arguments);
            
            const result = calculatePower(args.base, args.exponent);
            console.log(`Tool Result: ${result}`);
            
            console.log("AI is now formulating the final answer...");
        }

    } catch (error) {
        console.error("Function Calling Error:", error.message);
    }
}

runFunctionCall();