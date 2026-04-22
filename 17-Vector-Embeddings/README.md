

# Project 17: Local Vector Embeddings (On-Device AI)

### What is this?
Instead of relying on cloud APIs like Groq or OpenAI for embeddings, I implemented a local embedding pipeline using Transformers.js. This allows for free, private, and offline vector generation.

### Key Learnings:
* **Local Inference:** Learned how to run AI models directly on the client/server machine without an internet-dependent API call.
* **Vector Dimensionality:** The `all-MiniLM-L6-v2` model produces 384-dimensional vectors, which are efficient for semantic search.
* **Cost Efficiency:** Using local embeddings eliminates the cost per token, making it ideal for processing large-scale datasets.

### Mathematical Concept:
Text is mapped into a vector space where semantic similarity is measured using **Cosine Similarity**.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the tool: `npm i @xenova/transformers`
`node 17-Vector-Embeddings/app.js`