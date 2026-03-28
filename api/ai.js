// Vercel Serverless Function Handler
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { mode, question, userAnswer, correctAnswer, history } = req.body;

    // Validate required fields
    if (!mode) {
      return res.status(400).json({ error: "Missing mode parameter" });
    }

    // Get API key from environment variable (Vercel .env)
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY environment variable");
      return res.status(500).json({ error: "Server configuration error: API key not configured" });
    }

    const prompt = buildPrompt(mode, question, userAnswer, correctAnswer, history);
    if (!prompt) {
      return res.status(400).json({ error: "Invalid mode or missing parameters" });
    }

    // Use OpenAI API with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 500,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!openaiResponse.ok) {
      const error = await openaiResponse.json();
      console.error("OpenAI API error:", error);
      return res.status(openaiResponse.status).json({ 
        error: "AI service error", 
        details: error.error?.message || "OpenAI API failed" 
      });
    }

    const data = await openaiResponse.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("Invalid OpenAI response structure:", data);
      return res.status(500).json({ error: "Invalid response from AI service" });
    }

    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error.message);
    
    // Handle timeout errors
    if (error.name === 'AbortError') {
      return res.status(504).json({ error: "Request timeout - AI service took too long" });
    }

    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

// Build prompts based on mode
function buildPrompt(mode, question, userAnswer, correctAnswer, history) {
  switch (mode) {
    case "hint":
      return `Give a helpful hint for this study question (without revealing the answer): "${question}"`;
    
    case "explain":
      return `The student answered "${userAnswer}" to the question "${question}". The correct answer is "${correctAnswer}". Briefly explain why their answer was wrong and why the correct answer is right.`;
    
    case "analysis":
      return `Analyze these incorrect answers from a student and provide a summary of improvement areas:\n${JSON.stringify(history)}`;
    
    default:
      return "Please help with this study question.";
  }
}