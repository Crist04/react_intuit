const container = document.getElementById('container');
const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.option');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "Which language runs in a web browser?",
        optionA: "Java",
        optionB: "C",
        optionC: "Python",
        optionD: "JavaScript",
        correctOption: "optionD",
    },
    {
        question: "What does CSS stand for?",
        optionA: "Central Style Sheets",
        optionB: "Cascading Style Sheets",
        optionC: "Cascading Simple Sheets",
        optionD: "Cars SUVs Sailboats",
        correctOption: "optionB",
    },
    {
        question: "What does HTML stand for?",
        optionA: "Hypertext Markup Language",
        optionB: "Hypertext Markdown Language",
        optionC: "Hyperloop Machine Language",
        optionD: "Helicopters Terminals Motorboats Lamborghinis",
        correctOption: "optionA",
    },
    {
        question: "What year was JavaScript launched?",
        optionA: "1996",
        optionB: "1995",
        optionC: "1994",
        optionD: "None of the above",
        correctOption: "optionB",
    },
];



let currentQuestionIndex = 0;
let totalScore = 0;

initializeQuiz();

function initializeQuiz() {
    

    answerElements.forEach(answerEl => answerEl.checked = false);
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    aText.innerText = currentQuestion.optionA;
    bText.innerText = currentQuestion.optionB;
    cText.innerText = currentQuestion.optionC;
    dText.innerText = currentQuestion.optionD;
}


function getSelectedOption() {
    let selectedOption;

    answerElements.forEach(answerEl => {
        if(answerEl.checked) {
            selectedOption = answerEl.id;
        }
    });

    return selectedOption;
}

submitButton.addEventListener('click', () => {
    const selectedOption = getSelectedOption();
    
    if(selectedOption) {
        if(selectedOption === quizQuestions[currentQuestionIndex].correctOption) {
            totalScore++;
        }

        currentQuestionIndex++;

        if(currentQuestionIndex < quizQuestions.length) {
            initializeQuiz();
        } else {
            container.innerHTML = `<h2>You answered ${totalScore}/${quizQuestions.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});
