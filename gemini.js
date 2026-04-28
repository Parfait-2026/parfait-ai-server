import { Client } from "google-genai";

export async function handler(event) {
  try {
    const { prompt } = JSON.parse(event.body);

    const client = new Client({
      apiKey: process.env.GEMINI_API_KEY
    });

    const result = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: result.text() })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
