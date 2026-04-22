

# Project 12: AI Guardrails & Safety Moderation

### What is this?
Building AI apps is risky if you don't control the inputs. This project implements a "Self-Moderation" loop where one AI instance acts as a 'Bouncer' to verify if the user's prompt is safe before the main AI processes it.

### Key Learnings:
* **AI Safety:** Understanding that LLMs need a filtering layer to prevent toxic or harmful outputs.
* **Two-Step Verification:** Implementing a logic where the second API call only happens if the first one clears the prompt as 'SAFE'.
* **System Prompting for Security:** Learning how to give strict instructions to a model to act as a classifier.

### Real-world use:
Essential for customer-facing bots, school/education apps, and any enterprise-level AI tool to prevent abuse and maintain brand reputation.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 12-AI-Guardrails/app.js`