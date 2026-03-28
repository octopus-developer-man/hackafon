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
      throw new Error(`API error: ${res.status}`);
    }

    const result = await res.json();
    if (!result.reply) {
      throw new Error("Invalid API response: missing reply field");
    }
    return result.reply;
  } catch (error) {
    console.error("AI API call failed:", error);
    return null;
  }
}

// Helper functions to use when needed
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