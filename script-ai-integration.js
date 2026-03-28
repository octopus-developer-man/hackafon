// ========== QUIZ TRACKING & AI INTEGRATION ==========

let quizHistory = [];
let isInQuiz = false;
let usedHints = new Set();

// Initialize quiz tracking
function startQuizTracking() {
    isInQuiz = true;
    quizHistory = [];
    usedHints.clear();
    updateProgressCounter();
}

function endQuizTracking() {
    isInQuiz = false;
}

// Update progress counter
function updateProgressCounter() {
    const totalQuestionSlides = slides.filter(s => s.class === 'question' || s.class === 'fill-in-the-blank').length;
    const totalSlides = slides.length;
    const slideCounter = document.getElementById('slide_counter');
    if (slideCounter) {
        slideCounter.textContent = `${current_slide_index + 1} / ${totalSlides}`;
    }
}

// Show/Hide hint button based on slide type
function updateHintButton() {
    const hint_button = document.getElementById('ai_hint_button');
    const current_slide = slides[current_slide_index];
    
    if (!hint_button) return;
    
    if ((current_slide.class === 'question' || current_slide.class === 'fill-in-the-blank') && isInQuiz) {
        hint_button.style.display = 'inline-block';
        hint_button.disabled = usedHints.has(current_slide_index);
        if (usedHints.has(current_slide_index)) {
            hint_button.textContent = '💡 Hint Used';
        } else {
            hint_button.textContent = '💡 Get Hint';
        }
    } else {
        hint_button.style.display = 'none';
    }
}

// Get and display hint from AI
async function getHintForCurrentSlide() {
    const hint_button = document.getElementById('ai_hint_button');
    const hint_loading = document.getElementById('hint_loading');
    const current_slide = slides[current_slide_index];
    
    hint_button.style.display = 'none';
    hint_loading.style.display = 'inline-block';
    hint_button.disabled = true;
    
    try {
        const hint = await getHint(current_slide.title);
        
        if (hint) {
            usedHints.add(current_slide_index);
            showHintModal(hint);
        } else {
            alert('Could not generate hint. Please make sure your API key is set in Vercel environment variables.');
        }
    } catch (error) {
        console.error('Error getting hint:', error);
        alert('Error: Could not get hint. Please try again.');
    } finally {
        hint_loading.style.display = 'none';
        updateHintButton();
    }
}

// Show hint in a modal
function showHintModal(hint) {
    const explanation_text = document.getElementById('explanation_text');
    const explanation_modal = document.getElementById('explanation_modal');
    
    explanation_text.innerHTML = `<strong>💡 Hint:</strong><br>${hint}`;
    explanation_modal.classList.add('show');
    
    // Change button text for hints
    const next_btn = document.querySelector('.explanation_next_btn');
    next_btn.textContent = 'Got it!';
}

// Track answer in history
function trackAnswer(question, userAnswer, correctAnswer, isCorrect) {
    quizHistory.push({
        question: question,
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        slideIndex: current_slide_index
    });
}

// Show explanation modal for wrong answers
function showWrongAnswerExplanation(slide, userAnswer) {
    const explanation_text = document.getElementById('explanation_text');
    const explanation_modal = document.getElementById('explanation_modal');
    const next_btn = document.querySelector('.explanation_next_btn');
    
    explanation_text.textContent = 'Loading explanation...';
    explanation_modal.classList.add('show');
    next_btn.textContent = 'Continue';
    
    // Fetch explanation from AI
    fetchExplanationAsync(slide, userAnswer);
}

async function fetchExplanationAsync(slide, userAnswer) {
    try {
        const correctAnswerText = slide['button' + slide.correct_answer];
        const explanation = await getExplanation(slide.title, userAnswer, correctAnswerText);
        
        if (explanation) {
            const explanation_text = document.getElementById('explanation_text');
            explanation_text.innerHTML = `<strong>Explanation:</strong><br>${explanation}`;
        } else {
            const explanation_text = document.getElementById('explanation_text');
            explanation_text.innerHTML = `<strong>Explanation:</strong><br>Could not generate explanation. Please try again.`;
        }
    } catch (error) {
        console.error('Error getting explanation:', error);
        const explanation_text = document.getElementById('explanation_text');
        explanation_text.textContent = 'Error loading explanation. Please try again.';
    }
}

// Override the check_answer function to track answers and show explanations
const originalCheckAnswer = window.check_answer;
window.check_answer = function(button_letter) {
    const slide = slides[current_slide_index];
    
    if (slide.class !== 'question' || question_answered) {
        return;
    }
    
    const userAnswerText = slide['button' + button_letter];
    const correctAnswerText = slide['button' + slide.correct_answer];
    const isCorrect = button_letter === slide.correct_answer;
    
    // Track this answer
    trackAnswer(slide.title, userAnswerText, correctAnswerText, isCorrect);
    
    // Call the original function
    originalCheckAnswer.call(this, button_letter);
    
    // Show explanation if wrong
    if (!isCorrect && isInQuiz) {
        setTimeout(() => {
            showWrongAnswerExplanation(slide, userAnswerText);
        }, 1000);
    }
};

// Override the check_blank_answer function to track fill-in-the-blank answers
const originalCheckBlank = window.check_blank_answer;
window.check_blank_answer = function() {
    const slide = slides[current_slide_index];
    
    if (slide.class !== 'fill-in-the-blank' || question_answered) {
        return;
    }
    
    const user_answer = fill_blank_input.value.trim().toLowerCase();
    const correct_answer = slide.blank_answer.toLowerCase();
    const isCorrect = user_answer === correct_answer;
    
    // Track this answer
    trackAnswer(slide.title, user_answer, correct_answer, isCorrect);
    
    // Call the original function
    originalCheckBlank.call(this);
    
    // Show explanation if wrong
    if (!isCorrect && isInQuiz) {
        setTimeout(() => {
            showWrongAnswerExplanation(slide, user_answer);
        }, 1000);
    }
};

// Close explanation modal and move to next slide
document.querySelector('.explanation_next_btn').onclick = () => {
    document.getElementById('explanation_modal').classList.remove('show');
};

// Update original sgi_open_button to start tracking
const originalSgiOpenClick = sgi_open_button.onclick;
sgi_open_button.onclick = function() {
    startQuizTracking();
    originalSgiOpenClick.call(this);
};

// Update original sgi_close_button to end tracking
const originalSgiCloseClick = sgi_close_button.onclick;
sgi_close_button.onclick = function() {
    endQuizTracking();
    originalSgiCloseClick.call(this);
};

// Override display_slide to update hint button
const originalDisplaySlide = window.display_slide;
window.display_slide = function(index) {
    originalDisplaySlide.call(this, index);
    updateProgressCounter();
    updateHintButton();
};

// Show quiz results and AI analysis
async function showQuizResults() {
    const resultsPage = document.getElementById('quiz_results_page');
    const correctCount = quizHistory.filter(h => h.isCorrect).length;
    const totalCount = quizHistory.filter(h => h.isCorrect !== undefined && h.isCorrect !== null).length;
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    
    // Update stats
    document.getElementById('correct_count').textContent = correctCount;
    document.getElementById('total_count').textContent = totalCount;
    document.getElementById('score_percentage').textContent = percentage + '%';
    
    // Get AI analysis
    const analysisText = document.getElementById('analysis_text');
    
    if (totalCount > 0) {
        analysisText.textContent = 'Loading AI analysis...';
        
        try {
            const incorrectAnswers = quizHistory.filter(h => !h.isCorrect);
            if (incorrectAnswers.length > 0) {
                const analysis = await getAnalysis(incorrectAnswers);
                if (analysis) {
                    analysisText.textContent = analysis;
                } else {
                    analysisText.textContent = 'Could not generate analysis. Please try again.';
                }
            } else {
                analysisText.textContent = '🌟 Perfect! You got all questions correct!';
            }
        } catch (error) {
            console.error('Error getting analysis:', error);
            analysisText.textContent = 'Error generating analysis. Please try again.';
        }
    } else {
        analysisText.textContent = 'No questions answered yet.';
    }
    
    resultsPage.classList.add('show');
    
    // Setup results buttons
    document.querySelector('.results_retry_btn').onclick = () => {
        resultsPage.classList.remove('show');
        home_div.style.display = 'flex';
        study_guide_interface.style.display = 'none';
        sgi_open_button.onclick();
    };
    
    document.querySelector('.results_home_btn').onclick = () => {
        resultsPage.classList.remove('show');
        home_div.style.display = 'flex';
        study_guide_interface.style.display = 'none';
    };
}

// Override sgi_close_button to show results instead of closing
sgi_close_button.onclick = function() {
    if (isInQuiz && quizHistory.length > 0) {
        endQuizTracking();
        study_guide_interface.style.display = 'none';
        showQuizResults();
    } else {
        home_div.style.display = 'flex';
        study_guide_interface.style.display = 'none';
    }
};

// Update next button to show results on last slide
const originalNextClick = sgi_next_button.onclick;
sgi_next_button.onclick = function() {
    if (current_slide_index === slides.length - 1) {
        // On last slide, show results instead of cycling back
        if (isInQuiz) {
            endQuizTracking();
            study_guide_interface.style.display = 'none';
            showQuizResults();
        }
    } else {
        originalNextClick.call(this);
    }
};

// Add hint button click listener
document.getElementById('ai_hint_button').onclick = getHintForCurrentSlide;

// Add keyboard shortcut for hint button (H key)
document.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'h' && isInQuiz) {
        const hint_button = document.getElementById('ai_hint_button');
        if (hint_button.style.display !== 'none' && !hint_button.disabled) {
            getHintForCurrentSlide();
        }
    }
});
