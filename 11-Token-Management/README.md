

# Project 11: Token Management & Usage Tracking

### Why does this matter?
AI usage isn't free. Every word processed or generated has a cost measured in "Tokens." To build a sustainable application, we must monitor how many tokens we consume.

### Key Learnings:
* **Tokenization:** Understanding that AI breaks down text into smaller chunks (tokens) rather than whole words.
* **The `usage` Object:** Learning how to extract `prompt_tokens`, `completion_tokens`, and `total_tokens` from the API response.
* **Cost Optimization:** By tracking usage, we can decide if we need to shorten our prompts or use a smaller, cheaper model for simple tasks.

### Analogy:
It's like a **Prepaid Mobile Plan**. 
Every message you send and receive deducts "balance" (tokens) from your plan. If you don't keep an eye on your balance, you'll run out of credits mid-conversation!

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 11-Token-Management/app.js`