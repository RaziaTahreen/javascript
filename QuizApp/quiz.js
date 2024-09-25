
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "5 * 7 ?",
        options: ["45", "36", "49", "35"],
        answer: "35"
    }
];

let currentQuestionIndex = 0;
let score = 0;


const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');


function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    
    choicesElement.innerHTML = '';

    
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="choice" value="${option}" /> ${option}`;
        choicesElement.appendChild(li);
    });
}


function checkAnswer() {
    const selectedOption = document.querySelector('input[name="choice"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const answer = selectedOption.value;

    if (answer === quizQuestions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    
    questionElement.classList.add('hidden');
    choicesElement.classList.add('hidden');
    submitButton.classList.add('hidden');

    
    resultElement.classList.remove('hidden');
    scoreElement.textContent = score;
    totalElement.textContent = quizQuestions.length;
}


submitButton.addEventListener('click', checkAnswer);


loadQuestion();
