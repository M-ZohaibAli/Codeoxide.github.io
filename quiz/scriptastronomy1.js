let currentQuestionIndex = 0;
let userScore = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');

// Load the current question and options
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.classList.add('option-btn');
        optionButton.textContent = currentQuestion.options[i];
        optionButton.addEventListener('click', checkAnswer.bind(null, i));
        optionsContainer.appendChild(optionButton);
    }

    submitButton.disabled = true;
}

// Check if the selected answer is correct
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = currentQuestion.correctAnswer;

    if (selectedIndex === correctAnswerIndex) {
        userScore++;
    }

    currentQuestionIndex++;
    submitButton.disabled = false;

    if (currentQuestionIndex === questions.length) {
        submitButton.textContent = 'Finish';
    }

    optionsContainer.querySelectorAll('.option-btn').forEach(button => {
        button.disabled = true;
    });
}

// Display the result and final score
function showResult() {
    questionText.textContent = '';
    optionsContainer.innerHTML = '';
    submitButton.style.display = 'none';
    resultContainer.textContent = `Your Score: ${userScore}/${questions.length}`;
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
    if (currentQuestionIndex === questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
});

// Start the quiz
loadQuestion();
