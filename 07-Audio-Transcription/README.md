

# Project 07: Audio AI (Speech-to-Text with Whisper)

### What is this?
This project demonstrates Multimodal AI capabilities by processing audio data. I used the Whisper model to transcribe a spoken audio file into accurate text.

### Key Learnings:
* **Whisper Model:** Utilized `whisper-large-v3-turbo` for high-speed, high-accuracy transcription.
* **Audio Endpoints:** Learned that audio models require the `.audio.transcriptions` endpoint instead of the standard chat completion endpoint.
* **File Handling:** Managed local file streams in Node.js using the `fs` module to send binary data to the API.

### Technical Concept:
Unlike text-based LLMs, Whisper is specifically trained to recognize speech patterns and convert them into text, handling different accents and background noise effectively.

---
###  How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
   node --env-file=.env 07-Audio-Transcription/app.js