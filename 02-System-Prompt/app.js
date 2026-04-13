import OpenAI from "openai";

// Starting the AI client - using Groq for speed
const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function main() {
    try {
        // Calling the AI to chat
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile", 
            messages: [
                { 
                    // This 'system' role is the personality/mask
                    role: "system", 
                    content: "You are a very angry math teacher who hates when students ask easy questions. Be short and annoyed." 
                },
                { 
                    // This is my actual question
                    role: "user", 
                    content: "Hey, can you tell me what is 5 + 5?" 
                }
            ],
        });

        // Printing the AI's angry reply
        console.log("Teacher says:", response.choices[0].message.content);
        
    } catch (err) {
        // If the API fails or net is down
        console.log("Something went wrong bro:", err.message);
    }
}

main();