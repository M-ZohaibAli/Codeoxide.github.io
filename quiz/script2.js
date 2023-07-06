const questions = [
  {
    question: "Which organelle is responsible for storing genetic information?",
    options: ["Mitochondria", "Nucleus", "Endoplasmic Reticulum", "Golgi Apparatus"],
    correctAnswer: 1
  },
  {
    question: "What is the process by which plants convert sunlight into chemical energy?",
    options: ["Photosynthesis", "Respiration", "Fermentation", "Transpiration"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is responsible for carrying oxygen in the blood?",
    options: ["Platelets", "Red Blood Cells", "White Blood Cells", "Plasma"],
    correctAnswer: 1
  },
  {
    question: "Which system is responsible for protecting the body against pathogens?",
    options: ["Immune System", "Digestive System", "Nervous System", "Respiratory System"],
    correctAnswer: 0
  },
  {
    question: "What is the primary function of the kidneys?",
    options: ["Regulating Body Temperature", "Digesting Food", "Filtering Wastes from Blood", "Transporting Oxygen"],
    correctAnswer: 2
  },
  {
    question: "Which of the following is responsible for breaking down carbohydrates and producing energy?",
    options: ["Mitochondria", "Golgi Apparatus", "Lysosome", "Endoplasmic Reticulum"],
    correctAnswer: 0
  },
  {
    question: "What is the largest bone in the human body?",
    options: ["Femur", "Skull", "Tibia", "Humerus"],
    correctAnswer: 0
  },
  {
    question: "Which hormone regulates blood sugar levels?",
    options: ["Insulin", "Estrogen", "Testosterone", "Thyroxine"],
    correctAnswer: 0
  },
  {
    question: "Which part of the eye is responsible for controlling the amount of light that enters?",
    options: ["Cornea", "Iris", "Lens", "Retina"],
    correctAnswer: 1
  },
  {
    question: "Which process involves the exchange of gases in the lungs?",
    options: ["Osmosis", "Diffusion", "Active Transport", "Endocytosis"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is responsible for transmitting electrical signals in the nervous system?",
    options: ["Neurons", "Ligaments", "Tendons", "Muscles"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is not a type of blood cell?",
    options: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Melanocytes"],
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
    options: ["Muscle Tissue", "Nerve Tissue", "Bone Tissue", "Cardiac Tissue"],
    correctAnswer: 3
  },
  {
    question: "Which part of the brain controls voluntary movements and coordination?",
    options: ["Cerebrum", "Cerebellum", "Medulla", "Hippocampus"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is responsible for transmitting sound waves to the brain?",
    options: ["Cochlea", "Retina", "Pupil", "Optic Nerve"],
    correctAnswer: 0
  },
  {
    question: "What is the smallest unit of life?",
    options: ["Cell", "Tissue", "Organ", "Organism"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is responsible for carrying genetic information in the form of DNA?",
    options: ["Nucleus", "Ribosome", "Lysosome", "Endoplasmic Reticulum"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is responsible for breaking down and digesting cellular waste and debris?",
    options: ["Lysosome", "Golgi Apparatus", "Endoplasmic Reticulum", "Vacuole"],
    correctAnswer: 0
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