import { VectorStore } from 'some-vector-store-library';

export const connectToVectorStore = async () => {
    const vectorStore = new VectorStore({
        // Configuration options for the vector store
        apiKey: process.env.VECTOR_STORE_API_KEY,
        endpoint: process.env.VECTOR_STORE_ENDPOINT,
    });

    await vectorStore.initialize();
    return vectorStore;
};

export const indexData = async (data) => {
    const vectorStore = await connectToVectorStore();
    await vectorStore.index(data);
};

export const searchInVectorStore = async (query) => {
    const vectorStore = await connectToVectorStore();
    const results = await vectorStore.search(query);
    return results;
};