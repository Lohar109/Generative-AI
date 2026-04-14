

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function getStructuredData() {
    try {

        const response = await client.chat.completions.create({

            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: "You are a data extraction assistant. Always respond in JSON format." 
                },
                { 
                    role: "user", 
                    content: "Extract the name, age, and top 3 skills from this text: 'My name is Vaibhav, I am 22 years old and I love Node.js, AI, and GitHub.'" 
                }
            ],
            
            //  Key: Response Format
            response_format: { type: "json_object" }
        });

        const data = JSON.parse(response.choices[0].message.content);
        
        console.log("Extracted Data (As Object):", data);
        
        if (data.skills && data.skills.length > 0) {
            console.log("Top Skill:", data.skills[0]);
        }
    } catch (error) {
        console.error("JSON Mode Error:", error.message);
    }
}

getStructuredData();