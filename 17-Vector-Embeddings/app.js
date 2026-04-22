import { pipeline } from '@xenova/transformers';

async function generateLocalEmbeddings() {
    try {
        console.log("Loading local embedding model (all-MiniLM-L6-v2)...");
        
        // Initialize the pipeline
        const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');

        const text = "Generative AI is transforming the world.";

        // Generate the Vector
        const output = await embedder(text, { pooling: 'mean', normalize: true });

        // Extract the data
        const vector = Array.from(output.data);

        console.log("\n--- Local Text to Vector ---");
        console.log(`Original Text: ${text}`);
        console.log(`Vector Dimensions: ${vector.length}`);
        console.log("First 5 values:", vector.slice(0, 5));

    } catch (error) {
        console.error("Local Embedding Error:", error.message);
    }
}

generateLocalEmbeddings();