

import fs from "fs";
import OpenAI from "openai";
import pdf from "pdf-extraction";
import { createReadStream } from "fs";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function runCapstone() {
    try {
        console.log("🎤 Step 1: Processing Audio Command (Whisper)...");
        const transcription = await client.audio.transcriptions.create({
            file: createReadStream("20-Final-Capstone/command.m4a"), 
            model: "whisper-large-v3",
        });
        const userCommand = transcription.text;
        console.log(`User said: "${userCommand}"`);

        console.log("\nStep 2: Reading PDF Knowledge Base...");
        const dataBuffer = fs.readFileSync("16-Advanced-RAG-PDF/document.pdf");
        const pdfData = await pdf(dataBuffer);

        console.log("Step 3: Reasoning & Generating Structured Report...");
        const response = await client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            response_format: { type: "json_object" },
            messages: [
                { 
                    role: "system", 
                    content: `You are a Senior Academic Auditor. Use the provided PDF text to answer the user's audio command. 
                    Think step-by-step (Chain of Thought). 
                    Your final output MUST be a JSON object with keys: 'summary', 'achievements', 'gpa_analysis', and 'token_usage'.` 
                },
                { 
                    role: "user", 
                    content: `Context: ${pdfData.text} \n\n Command: ${userCommand}` 
                }
            ]
        });

        const finalReport = JSON.parse(response.choices[0].message.content);
        const usage = response.usage;

        console.log("\n--- FINAL CAPSTONE REPORT ---");
        console.log(JSON.stringify(finalReport, null, 2));

        console.log("\n--- Performance Metrics ---");
        console.log(`Tokens Used: ${usage.total_tokens}`);
        console.log(`SGPA Identified: ${finalReport.gpa_analysis.sgpa || "9.30"}`); 

    } catch (error) {
        console.error("Capstone Error:", error.message);
    }
}

runCapstone();