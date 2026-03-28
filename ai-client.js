// Client-side helper to call the Vercel serverless AI function
async function callAI(data) {
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("AI API error:", error);
      throw new Error(error.details || error.error || "API request failed");
    }

    const result = await res.json();
    return result.reply;
  } catch (error) {
    console.error("AI call failed:", error);
    return null;
  }
}

// Helper functions for different AI modes
async function getHint(question) {
  return await callAI({
    mode: "hint",
    question: question
  });
}

async function getExplanation(question, userAnswer, correctAnswer) {
  return await callAI({
    mode: "explain",
    question: question,
    userAnswer: userAnswer,
    correctAnswer: correctAnswer
  });
}

async function getAnalysis(history) {
  return await callAI({
    mode: "analysis",
    history: history
  });
}

async function generateSlides(prompt, slideCount) {
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: "generate",
        prompt: prompt,
        slideCount: slideCount
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("AI slide generation error:", error);
      throw new Error(error.details || error.error || "Failed to generate slides");
    }

    const result = await res.json();
    let slides = result.slides;
    
    // If slides is a string, parse it (might be JSON string from API)
    if (typeof slides === 'string') {
      // Strip markdown code blocks if present
      slides = slides.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      slides = JSON.parse(slides);
    }
    
    return slides;
  } catch (error) {
    console.error("Slide generation failed:", error);
    throw error;
  }
}
