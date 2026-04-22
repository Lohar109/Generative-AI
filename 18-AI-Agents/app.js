

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

function getStockPrice(symbol) {
    if (symbol === "NVDA") return "$145.67";
    if (symbol === "AAPL") return "$230.12";
    return "Unknown symbol";
}

async function runAutonomousAgent() {
    const tools = [{
        type: "function",
        function: {
            name: "getStockPrice",
            description: "Gets the real-time stock price for a given ticker symbol",
            parameters: {
                type: "object",
                properties: { symbol: { type: "string" } },
                required: ["symbol"],
            },
        },
    }];

    let messages = [
        { role: "system", content: "You are an autonomous finance agent. Use tools to find info. If you have the data, give a final summary." },
        { role: "user", content: "I want to invest in NVIDIA. What is its current stock price and is it higher than Apple's price ($230)?" }
    ];

    try {
        console.log("Agent is thinking...");
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: messages,
            tools: tools,
        });

        const responseMessage = response.choices[0].message;

        if (responseMessage.tool_calls) {
            
            console.log("Agent decided to act: Calling getStockPrice tool...");
            const toolCall = responseMessage.tool_calls[0];
            const args = JSON.parse(toolCall.function.arguments);
            
            const price = getStockPrice(args.symbol);
            console.log(`Tool Observation: ${args.symbol} is currently ${price}`);

            messages.push(responseMessage);
            messages.push({
                role: "tool",
                tool_call_id: toolCall.id,
                content: price
            });

            console.log("Agent is formulating the final answer based on observation...");
            const finalResponse = await client.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: messages,
            });

            console.log("\n--- Final Agent Output ---");
            console.log(finalResponse.choices[0].message.content);
        }

    } catch (error) {
        console.error("Agent Error:", error.message);
    }
}

runAutonomousAgent();