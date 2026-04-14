

# Project 05: Streaming Responses (Real-time Output)

### What is Streaming?
Instead of waiting for the entire AI response to be generated, I learned how to receive "chunks" of data in real-time. This is exactly how modern AI apps like ChatGPT show text word-by-word.

### Key Learnings:
* **UX Improvement:** Streaming reduces "perceived latency"—the user sees the output immediately instead of waiting for a long pause.
* **Iterators in JS:** I used `for await...of` to handle the incoming stream of data from the API.
* **Deltas:** In streaming mode, the API sends a "delta" (a small change or a new word) instead of the full message.

### Analogy:
It's like **Watching a Movie Online**. 
* **Normal API:** You wait for the whole movie to download before you can press play.
* **Streaming:** The movie starts playing while it's still downloading.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
node --env-file=.env 05-Streaming-Response/app.js