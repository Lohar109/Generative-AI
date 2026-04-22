

# Project 09: Function Calling (AI with Tools)

### What is this?
I learned how to give the AI "tools" so it can do more than just talk. Instead of guessing a math result, the AI now knows it can call a specific function to get the exact answer.

### Key Learnings:
* **Tool Definition:** Learned how to describe a function to the AI using JSON Schema so the AI knows when and how to use it.
* **Model Reasoning:** The AI doesn't just run the code; it *decides* that it needs to run the code. This is called "Agentic behavior."
* **Bridging AI & Logic:** This is how AI agents are built—by connecting LLMs to external APIs, databases, or local functions.

### Analogy:
It's like having a **Manager and a Specialist**. 
* The Manager (AI) listens to the client. 
* If the client asks for something technical, the Manager calls the Specialist (the function). 
* The Specialist does the work, gives it back to the Manager, and the Manager explains it to the client.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 09-Function-Calling/app.js`