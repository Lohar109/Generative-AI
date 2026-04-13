

# Project 03: Playing with AI Creativity (Temperature)

### What I learned:
I found out that AI has a "Creativity Knob" called **Temperature**. It’s basically a number between 0 and 2 that tells the AI how much risk it should take.

### My Observations:
* **High Temperature (1.5):** The AI gave me a very colorful and unique story. It used words I didn't expect. This is great for brainstorming or writing poems.
* **Low Temperature (0.2):** If I change it to 0.2, the AI becomes very boring and gives the most basic answer. This is what we use for coding or solving math problems where we don't want any "creativity."

### Analogy:
It's like **Ordering Coffee**. 
- Temperature 0 is a "Black Coffee" (Simple, predictable, does the job).
- Temperature 1.5 is a "Caramel Frappuccino with extra sprinkles" (Creative, unexpected, and fancy).

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
4. Run the code: `node --env-file=.env 03-Temperature-Control/app.js`