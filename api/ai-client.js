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
      return null;
    }

    const result = await res.json();
    return result.reply;
  } catch (error) {
    console.error("AI call failed:", error);
    return null;
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
