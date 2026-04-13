

# Project 02: Giving the AI a Personality (System Prompts)

### The Concept:
In the first project, the AI was just a normal assistant. In this one, I learned that we can give the AI a "Role" or a "Personality" before it even starts talking. This is done using the `system` role in the messages array.

### What I did:
I turned the AI into a **"Very Angry Math Teacher."** I wanted to see if the AI would change its tone based on my instructions.

### My Findings:
* **The System Role:** This is like giving the AI a mask to wear. It sets the rules for how the AI should behave.
* **Prompt Engineering:** By changing just one line in the `system` content, I can change the AI from a friendly helper to a grumpy teacher or a professional coder.

### Analogy:
It's like an **Acting Class**. The `system` message is the "Script" I give the actor before the scene starts. Even if I ask a simple question like "2+2", the actor stays in character and replies with an attitude!

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
4. Run the code: `node --env-file=.env 02-System-Prompt/app.js`