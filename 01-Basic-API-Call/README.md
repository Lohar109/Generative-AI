


# Project 01: My First API Call to an AI Brain

### What is this?
This is the starting point of my Gen AI journey. The goal was simple: instead of using a website like ChatGPT, I wanted to see how I could talk to an AI model through code using an API.

### What I learned:
* **The API Setup:** I used the OpenAI SDK but pointed it to Groq because it’s much faster for testing.
* **Environment Variables:** I learned that you should NEVER put your API keys directly in the code. I used a `.env` file to keep my keys private.
* **The Request/Response Loop:** I learned how to send a prompt and how to "dig" into the response object to get the text I wanted.

### Analogy:
Think of the API as a **Waiter**. I give an order (Prompt), the waiter takes it to the Chef (AI), and the chef sends the food (Response) back through the waiter.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
4. Run the code: `node --env-file=.env app.js`