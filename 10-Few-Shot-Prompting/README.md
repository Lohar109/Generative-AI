

# Project 10: Few-Shot Prompting (Pattern Recognition)

### What is this?
I learned how to improve AI performance by providing "Examples" instead of just instructions. This technique is called Few-Shot Prompting.

### Key Learnings:
* **Zero-Shot vs Few-Shot:** Learned that providing examples helps the AI understand the tone, format, and style much better than a simple instruction.
* **In-Context Learning:** The AI uses the messages in the array as a "mini-training" set to predict the next best response.
* **Control:** This is perfect for generating specific outputs like sentiment analysis, slang conversion, or complex data formatting.

### Analogy:
It's like **Teaching a Child**. 
* **Zero-Shot:** You tell them, "Clean your room." 
* **Few-Shot:** You show them a photo of a clean room, then a photo of another clean room, and then you say, "Make your room look like these." They are much more likely to get it right!

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the AI tool: `npm i openai`
3. Add your `GROQ_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 10-Few-Shot-Prompting/app.js`