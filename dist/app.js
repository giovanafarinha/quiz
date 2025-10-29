const question = [
    {
        question: "Dans Le Roi Lion, comment s’appelle le père de Simba ?",
        answers: [
            { text: "Mufasa", correct: true },
            {
                text: "Scar",
                correct: false,
            },
            {
                text: "Rafiki",
                correct: false,
            },
            { text: "Zazu", correct: false },
        ],
        correctAnswer: 1,
    },
    {
        question: "Quel est le nom de la princesse dans La Belle et la Bête ?",
        answers: ["Aurore", "Cendrillon", "Belle", "Ariel"],
        correctAnswer: 3,
    },
    {
        question: "Dans Toy Story, quel est le nom du cow-boy en plastique ?",
        answers: ["Buzz", "Woody", "Jessie", "Rex"],
        correctAnswer: 2,
    },
    {
        question: "Dans Blanche-Neige et les Sept Nains, quel est le véritable nom de la Méchante Reine ?",
        answers: ["Morgane", "Maléfique", "Grimhilde", "Gothel"],
        correctAnswer: 3,
    },
    {
        question: "Dans La Reine des Neiges, quel est le nom du royaume d’Elsa et Anna ?",
        answers: ["Arendelle", "Athènes", "Atlantica", "Atlantide"],
        correctAnswer: 1,
    },
];
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const showQuestion = document.getElementById("question");
const showAnswers = document.getElementById("answers");
//const startButton: HTMLElement | null = document.getElrementById("start-btn");`
let currentQuestionIndex = 0;
let score = 0;
startButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startButton.innerText = "Recommencer le quiz";
    showQuestion.innerText = `${question[currentQuestionIndex]?.question}`;
    showAnswers.classList.remove("visible");
    renderQuestion();
});
function renderQuestion() {
    resetState(); ///this will reset by each question
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    showQuestion.innerHTML = questionNumber + ". " + currentQuestion.question;
    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        showAnswers.appendChild(button);
    });
}
function resetState() {
    ///removed the answer 1/ answer 2/ answer 3/
    nextButton.style.display = "flex";
    while (showAnswers.firstChild) {
        showAnswers.removeChild(showAnswers.firstChild);
    }
}
export {};
//# sourceMappingURL=app.js.map