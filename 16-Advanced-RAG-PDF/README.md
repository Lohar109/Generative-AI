# Project 16: Advanced RAG (PDF Document Intelligence)

### What is this?
Building on Project 15, I moved from simple text files to complex PDF documents. I learned how to extract text from binary PDF files and use it as external knowledge for the AI.

### Key Learnings:
* **PDF Parsing:** Used the `pdf-parse` library to handle non-text file formats in Node.js.
* **Large Context Handling:** Learned that PDF text can be very long, and it must be injected into the system prompt carefully.
* **Document Chat:** This is the foundation for building apps like "Chat with your PDF" or "AI Resume Analyzer."

### Workflow:
`Load PDF` --> `Extract Text (Buffer to String)` --> `System Prompt Injection` --> `AI Analysis`

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the tools: `npm i openai pdf-parse`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
4. Place a file named `document.pdf` in this folder.
`node --env-file=.env 16-Advanced-RAG-PDF/app.js`