

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function showModels() {

    const list = await client.models.list();
    
    // This will print all active model IDs
    console.log("Available Models:", list.data.map(m => m.id));
}

showModels();