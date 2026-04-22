

# Project 13: Chain of Thought (CoT) Reasoning

### What is this?
Chain of Thought is a prompting technique that encourages the AI to break down complex problems into smaller, logical steps. Instead of jumping to a conclusion, the model "reasons" its way to the answer.

### Key Learnings:
* **Reducing Hallucinations:** By forcing the model to show its work, we significantly reduce the chances of logical or mathematical errors.
* **Inner Monologue:** Learned how to use system prompts to ensure the AI explains its "thought process."
* **Better Accuracy:** CoT is essential for tasks involving multi-step logic, coding, or complex decision-making.

### Mathematical Breakdown:
In this project, the AI calculates the final price using the formula:
$$\text{Final Price} = (\text{Original Price} \times (1 - \text{Discount})) \times (1 + \text{Tax})$$

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 13-Chain-of-Thought/app.js`