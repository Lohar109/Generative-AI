

# Project 15: Basic RAG (Retrieval-Augmented Generation)

### What is this?
I learned how to give the AI "New Knowledge" without retraining the model. By reading a local text file and providing its content to the AI as context, I enabled the model to answer questions about specific, private, or up-to-date information.

### Key Learnings:
* **Context Injection:** Understanding that the 'System' role can be used to pass external data to the model.
* **Overcoming Training Cut-offs:** Learned how to make the AI aware of events or data that happened after its training date.
* **Data Sources:** Used the Node.js `fs` module to dynamically load knowledge from a `.txt` file into the prompt.

### Workflow:
`Read Local File` --> `Embed Content in Prompt` --> `AI Processes Query with Context` --> `Accurate Output`

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 15-Basic-RAG-Text/app.js`