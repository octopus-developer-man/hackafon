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
      return res.status(400).json({ error: "Missing mode" });
    }

    // Get API key from environment variable (Vercel .env)
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("Missing OPENAI_API_KEY environment variable");
      return res.status(500).json({ error: "Server configuration error: API key not set" });
    }

    // Use OpenAI API
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: buildPrompt(mode, question, userAnswer, correctAnswer, history) }],
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      const error = await openaiResponse.json();
      console.error("OpenAI API error:", error);
      return res.status(openaiResponse.status).json({ error: "AI API failed", details: error.error?.message });
    }

    const data = await openaiResponse.json();
    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error);
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