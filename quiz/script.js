const questions = [
    {
        question: "Which organelle is responsible for protein synthesis?",
        options: ["Golgi Apparatus", "Endoplasmic Reticulum", "Lysosome", "Mitochondria"],
        correctAnswer: 1
    },
    {
        question: "What is the basic unit of life?",
        options: ["Cell", "Tissue", "Organ", "Organism"],
        correctAnswer: 0
    },
    {
        question: "Which process converts light energy into chemical energy in plants?",
        options: ["Photosynthesis", "Cellular Respiration", "Fermentation", "Transpiration"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is responsible for carrying oxygen in the blood?",
        options: ["Platelets", "Red Blood Cells", "White Blood Cells", "Plasma"],
        correctAnswer: 1
    },
    {
        question: "Which system is responsible for regulating the body's metabolism?",
        options: ["Endocrine System", "Digestive System", "Respiratory System", "Nervous System"],
        correctAnswer: 0
    },
    {
        question: "Which vitamin is essential for blood clotting?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is not a function of the liver?",
        options: ["Detoxification", "Digestion", "Metabolism", "Storage of Vitamins"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is the largest organ in the human body?",
        options: ["Liver", "Heart", "Brain", "Skin"],
        correctAnswer: 3
    },
    {
        question: "Which hormone regulates blood sugar levels?",
        options: ["Insulin", "Estrogen", "Testosterone", "Adrenaline"],
        correctAnswer: 0
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Vacuole"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is not a type of blood cell?",
        options: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Lymphocytes"],
        correctAnswer: 3
    },
    {
        question: "Which part of the plant is responsible for photosynthesis?",
        options: ["Roots", "Leaves", "Stem", "Flower"],
        correctAnswer: 1
    },
    {
        question: "What is the main function of the respiratory system?",
        options: ["Transporting Oxygen", "Digesting Food", "Regulating Temperature", "Pumping Blood"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is not a type of tissue in the human body?",
        options: ["Muscle Tissue", "Nerve Tissue", "Bone Tissue", "Cardboard Tissue"],
        correctAnswer: 3
    },
    {
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Hippocampus"],
        correctAnswer: 1
    },
    {
        question: "Which process involves the exchange of gases in the lungs?",
        options: ["Osmosis", "Diffusion", "Active Transport", "Endocytosis"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is not a type of blood vessel?",
        options: ["Artery", "Vein", "Capillary", "Alveoli"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is the smallest unit of DNA?",
        options: ["Chromosome", "Gene", "Nucleotide", "Protein"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is responsible for producing antibodies?",
        options: ["Adrenal Gland", "Thyroid Gland", "Pancreas", "Lymph Nodes"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is not an example of an excretory organ?",
        options: ["Kidneys", "Liver", "Lungs", "Spleen"],
        correctAnswer: 3
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
