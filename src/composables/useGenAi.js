import { GoogleGenerativeAI } from "@google/generative-ai";

export const useGenAi = async () => {
  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY,
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  return model;
};
