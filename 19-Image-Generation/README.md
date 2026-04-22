

# Project 19: Image Generation (Text-to-Image Synthesis)

### What is this?
I explored the visual side of Generative AI by integrating an image generation model. This project demonstrates how to turn descriptive text prompts into high-quality digital art using models like DALL-E 3.

### Key Learnings:
* **Prompt Engineering for Visuals:** Learned that image prompts require descriptive keywords (e.g., '8k', 'cinematic lighting') to get high-quality results.
* **API Integration:** Expanded the tech stack beyond text-models to include multimodal image generation APIs.
* **Use Cases:** This technology is the foundation for AI-powered marketing tools, automatic thumbnail generators, and creative design assistants.

---
### How to run:
1. Make sure you have Node.js installed.
2. Install the tool: `npm i openai`
3. Add your `OPENAI_API_KEY` to a `.env` file in the main folder.
`node --env-file=.env 19-Image-Generation/app.js`