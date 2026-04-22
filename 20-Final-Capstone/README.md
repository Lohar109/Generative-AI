

# Project 20: AI Research Architect (Capstone)

### What is this?
The culmination of my Generative AI journey. This project is a multi-modal "Study Buddy" that combines Speech-to-Text, PDF Intelligence, and Structured Data output into a single autonomous workflow.

### Key Learnings:
* **System Integration:** Successfully merged 5+ distinct AI concepts (Whisper, RAG, JSON Mode, CoT, and Token Tracking) into one production-ready script.
* **Complex Data Extraction:** Learned how to transform raw PDF data into structured academic insights using LLM reasoning.
* **End-to-End Automation:** Built a workflow where a single voice command triggers a complex chain of data processing and analysis.

### Features:
1. **Voice Control:** Uses Groq's Whisper-v3 for near-instant transcription.
2. **Contextual Awareness:** Reads and understands complex documents (like academic transcripts) using `pdf-extraction`.
3. **Structured Intelligence:** Outputs data in JSON for seamless frontend integration.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the tools: `npm i openai pdf-extraction`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
4. Place your audio command as `command.m4a` and PDF as `document.pdf` in the specified folders.
`node --env-file=.env 20-Final-Capstone/app.js`