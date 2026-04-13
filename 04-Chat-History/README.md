

# Project 04: Giving AI a Memory (Chat History)

### What is the problem?
I realized that AI is like a "Ghajini"—it forgets everything after one message. If I tell it my name in message 1, it has no idea who I am in message 2.

### How I fixed it:
* **The Memory Array:** I created a simple JavaScript array called `memory`.
* **Storing Everything:** Every time I say something, I `push` it into the array. When the AI replies, I `push` its reply too.
* **Sending Context:** Instead of sending just one message, I send the **whole array** every time. Now the AI can read the previous messages and remember what we were talking about.

### Important Lesson:
The more history you send, the more "Tokens" it uses. So we can't send infinite history, but for a normal chat, this is how it works!

### Analogy:
It's like a **WhatsApp Chat**. You can see the previous messages above, which gives you the "context" of the conversation. If those messages were deleted, you wouldn't know what you were talking about!

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 04-Chat-History/app.js`