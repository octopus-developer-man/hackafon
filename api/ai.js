// Vercel Serverless Function Handler
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { mode, question, userAnswer, correctAnswer, history, prompt, slideCount } = req.body;

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

    const promptText = buildPrompt(mode, question, userAnswer, correctAnswer, history, prompt, slideCount);
    if (!promptText) {
      return res.status(400).json({ error: "Invalid mode or missing parameters" });
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
        messages: [{ role: "user", content: promptText }],
        temperature: mode === "generate" ? 0.8 : 0.7,
        max_tokens: mode === "generate" ? 3000 : 500,
      }),
    });

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

    // For slide generation, parse and validate the JSON
    if (mode === "generate") {
      try {
        // Strip markdown code blocks if AI wrapped it
        let cleanedReply = reply.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const slides = JSON.parse(cleanedReply);
        if (!Array.isArray(slides)) {
          throw new Error("Response is not an array");
        }
        return res.status(200).json({ slides });
      } catch (parseError) {
        console.error("Failed to parse generated slides:", parseError);
        return res.status(500).json({ error: "Invalid slide format from AI", details: parseError.message });
      }
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Server error:", error.message);
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
}

// Build prompts based on mode
function buildPrompt(mode, question, userAnswer, correctAnswer, history, prompt, slideCount) {
  switch (mode) {
    case "hint":
      return `Give the student a SHORT one-sentence hint for this study question (without revealing the answer). Address them directly using "you": "${question}"`;
    
    case "explain":
      return `The student answered "${userAnswer}" to the question "${question}". The correct answer is "${correctAnswer}". Briefly explain to them in 1-2 sentences why their answer was wrong and what the correct answer is. Address them directly using "you".`;
    
    case "analysis":
      return `Looking at your incorrect answers, provide a SHORT bullet-point summary (3-5 points max) of key areas where you need to improve:\n${JSON.stringify(history)}\n\nSpeak directly to me (use "you"). Be concise and specific.`;
    
    case "generate":
      return `Create a study guide with ${slideCount} slides about: "${prompt}"\n\nReturn a JSON array of slides. Mix information slides and questions. Each slide should have this structure:\n{\n  "title": "slide title",\n  "content": "content for information slides only",\n  "image": "ellenjoe.webp",\n  "has_image": false,\n  "class": "information" or "question" or "fill-in-the-blank",\n  "button1": "multiple choice option or 'Next' for info",\n  "button2": "option 2",\n  "button3": "option 3", \n  "button4": "option 4",\n  "correct_answer": "1-4" or "N/A" for info,\n  "blank_answer": "for fill-in-the-blank only"\n}\n\nFor information slides: set class to "information", button1 to "Next", others to "", correct_answer to "N/A".\nFor questions: set class to "question", include 4 different answers, mark correct one (1-4).\nFor fill-in-the-blank: set class to "fill-in-the-blank", content is the sentence with blank, button fields empty, blank_answer is the word.\n\nReturn ONLY the JSON array, no other text.`;
    
    default:
      return "Please help with this study question.";
  }
}