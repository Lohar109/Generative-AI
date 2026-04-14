

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

async function transcribeAudio() {
    try {
        const transcription = await client.audio.transcriptions.create({
            model: "whisper-large-v3-turbo", 
            file: fs.createReadStream("07-Audio-Transcription/test.mp3"), 
            response_format: "verbose_json",
        });

        console.log("Transcription Result:");
        console.log(transcription.text);

    } catch (error) {
        console.error("Audio API Error:", error.message);
    }
}

transcribeAudio();