

# Project 18: Autonomous AI Agents (ReAct Pattern)

### What is this?
This project demonstrates the transition from a simple Chatbot to an Autonomous Agent. Instead of just answering questions, the model uses reasoning to decide which external tools to call to fulfill a complex request.

### Key Learnings:
* **Autonomous Reasoning:** The AI analyzes the user's multi-part question and identifies that it needs a specific tool (`getStockPrice`) to answer accurately.
* **The Reasoning Loop:** Implemented a two-stage process: Reason -> Act -> Observe -> Final Response.
* **Tool Orchestration:** Learned how to pass tool results back into the model's memory to maintain context.

### Logic Flow:
1. **Thought:** "I need the price of NVDA to compare it with AAPL."
2. **Action:** Call `getStockPrice('NVDA')`.
3. **Observation:** "NVDA is $145.67."
4. **Final Response:** "NVDA is $145.67, which is lower than Apple's $230."

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 18-AI-Agents/app.js`