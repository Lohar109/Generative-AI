import fs from "fs";
import OpenAI from "openai";
import pdf from "pdf-extraction";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runPDFRAG() {
    try {
        console.log("Reading your Grade Sheet (document.pdf)...");
        const dataBuffer = fs.readFileSync("16-Advanced-RAG-PDF/document.pdf");
        
        const pdfData = await pdf(dataBuffer);
        
        console.log(`Success! Extracted data for: Lohar Vaibhav Prakash`);

        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                { 
                    role: "system", 
                    content: `You are an academic advisor. Analyze this student's result: \n\n ${pdfData.text}` 
                },
                { role: "user", content: "What is Vaibhav's SGPA for Sem-III and which subject is his strongest based on the Grade Point?" }
            ]
        });

        console.log("\n--- AI Academic Analysis ---");
        console.log(response.choices[0].message.content);

    } catch (error) {
        console.error("PDF RAG Error:", error.message);
    }
}

runPDFRAG();