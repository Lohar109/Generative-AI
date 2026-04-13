# Project 01: Learning how to talk to AI via Code

### Why I built this?
I wanted to move beyond just using ChatGPT's website. I wanted to see how I could actually connect a VS Code project to an AI "brain" using an API. This is my very first step into Generative AI.

---

### What I actually did:
* **The API Setup:** I used the OpenAI library but connected it to **Groq**. Why? Because Groq is super fast and great for testing.
* **The Hidden Key:** At first, I didn't know where to put the API key. I learned that you should put it in a `.env` file so it stays private on my computer and doesn't get leaked on the internet.
* **Making the Request:** I sent a simple message using the `messages` array. I learned that `role: "user"` is me, and the AI is the "assistant."

---

### The Big Lesson (The .env mistake)
While pushing this to GitHub, I realized that Git tries to upload everything. I had to create a `.gitignore` file to tell Git: "Bro, don't upload my .env file!" This taught me a lot about security and how to keep my project clean.

---

### How it works (The Waiter Analogy)
Think of the API as a **waiter** at a restaurant. 
1. I (the customer) give an order (the Prompt).
2. The waiter (API) takes it to the kitchen (The AI Brain).
3. The chef cooks the food (Generates the text).
4. The waiter brings it back to my table. 

Without the waiter, I can't talk to the chef!

---

### How to run it:
1. Open terminal and run `npm install`.
2. Create a file named `.env` and paste your `GROQ_API_KEY`.
3. Run this command:
   ```bash
   node --env-file=.env app.js