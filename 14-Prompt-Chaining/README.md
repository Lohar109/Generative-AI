

# Project 14: Prompt Chaining (AI Workflows)

### What is this?
Instead of asking the AI to do everything in one go, I learned how to "chain" multiple AI calls together. The output of the first call becomes the context for the second call.

### Key Learnings:
* **Modular AI:** Breaking down complex tasks into smaller, manageable steps.
* **Context Transfer:** Learning how to pass variables from one API response into the next prompt.
* **Higher Quality:** Chaining allows each step to focus on a specific task (e.g., Idea generation vs. Marketing copy), leading to much better results.

### Workflow Diagram:
`User Input` --> `Model 1 (Brainstorming)` --> `Model 2 (Refining)` --> `Final Output`

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 14-Prompt-Chaining/app.js`