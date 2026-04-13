import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runChat() {
    
    // Array to store the conversation history
    let chatContext = [
        { role: "system", content: "You are a helpful assistant." }
    ];

    try {
        // --- Round 1 ---
        const firstUserMessage = { role: "user", content: "Hi, my name is Vaibhav." };
        chatContext.push(firstUserMessage);

        const response1 = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: chatContext
        });

        const assistantReply1 = response1.choices[0].message;
        chatContext.push(assistantReply1); // Storing AI response in context
        console.log("Assistant:", assistantReply1.content);

        console.log("\n--- Sending follow-up message ---\n");

        // --- Round 2 (Testing Memory) ---
        const secondUserMessage = { role: "user", content: "Can you tell me what my name is?" };
        chatContext.push(secondUserMessage);

        const response2 = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: chatContext // Sending the entire history
        });

        console.log("Assistant:", response2.choices[0].message.content);

    } catch (error) {
        console.error("Error during chat execution:", error.message);
    }
}

runChat();