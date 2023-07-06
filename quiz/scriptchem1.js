const questions = [
    {
        question: "Which of the following is the lightest element?",
        options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Hg"],
        correctAnswer: 1
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: 2
    },
    {
        question: "What is the pH value of a neutral solution?",
        options: ["1", "7", "14", "0"],
        correctAnswer: 1
    },
    {
        question: "Which element is commonly used as a semiconductor in electronics?",
        options: ["Silicon", "Copper", "Iron", "Aluminum"],
        correctAnswer: 0
    },
    {
        question: "Which gas is known as laughing gas?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Nitrous Oxide"],
        correctAnswer: 3
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswer: 0
    },
    {
        question: "Which element is responsible for the blue color in sapphires?",
        options: ["Iron", "Copper", "Titanium", "Chromium"],
        correctAnswer: 2
    },
    {
        question: "What is the process of converting a solid directly into a gas called?",
        options: ["Melting", "Freezing", "Condensation", "Sublimation"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is a noble gas?",
        options: ["Hydrogen", "Oxygen", "Argon", "Sodium"],
        correctAnswer: 2
    },
    {
        question: "What is the chemical formula for table salt?",
        options: ["NaCl", "H2O", "CO2", "CH4"],
        correctAnswer: 0
    },
    {
        question: "Which element is the main component of the Earth's core?",
        options: ["Iron", "Gold", "Copper", "Silver"],
        correctAnswer: 0
    },
    {
        question: "What is the process of combining two or more elements to form a new substance called?",
        options: ["Decomposition", "Combustion", "Synthesis", "Oxidation"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is an example of a greenhouse gas?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical formula for methane?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswer: 3
    },
    {
        question: "Which element is used as a catalyst in the converter of a car's exhaust system?",
        options: ["Platinum", "Gold", "Silver", "Palladium"],
        correctAnswer: 0
    },
    {
        question: "What is the process of breaking down a compound into simpler substances called?",
        options: ["Combustion", "Synthesis", "Decomposition", "Oxidation"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is the most reactive metal?",
        options: ["Iron", "Copper", "Sodium", "Aluminum"],
        correctAnswer: 2
    },
    {
        question: "What is the chemical formula for carbon dioxide?",
        options: ["H2O", "CO2", "NaCl", "CH4"],
        correctAnswer: 1
    },
    {
        question: "Which element is used in fluorescent lights?",
        options: ["Neon", "Krypton", "Argon", "Xenon"],
        correctAnswer: 2
    }
    // Add more questions as needed
];

// Rest of the code remains the same
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
