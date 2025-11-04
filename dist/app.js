import questions from "./question.js";
let isenabled = true; //lorsqu'on clique sur une réponse, bloque les autres
let timerElement = document.getElementById("timer");
let countdown;
let timeLeft = 20; //pour le compte à rebours, démarre à 20s
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const showQuestion = document.getElementById("question");
const showAnswers = document.getElementById("answers");
let scoreElement = document.getElementById("score");
let currentQuestionIndex = 0;
let score = 0;
//fonction pour démarrer le quiz
startButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startButton.innerText = "Recommencer le quiz";
    showQuestion.innerText = `${questions[currentQuestionIndex]?.question}`;
    showAnswers.classList.remove("visible");
    renderQuestion();
    renderAnswers();
});
//fonction pour modifier les réponses lorsqu'on clique sur question suivante
function resetState() {
    ///removed the answer 1/ answer 2/ answer 3/
    nextButton.style.display = "flex";
    while (showAnswers.firstChild) {
        showAnswers.removeChild(showAnswers.firstChild);
    }
}
//pour afficher les questions
function renderQuestion() {
    resetState(); //remplacement des commentaires answer 1, answer 2, etc par une réponse de notre tableau
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    if (currentQuestionIndex < questions.length) {
        showQuestion.innerHTML = questionNumber + ". " + currentQuestion.question;
    }
    else {
        showQuestion.style.display = "none";
        timerElement.style.display = "none";
        scoreElement.innerText = `🎉 Quiz terminé ! Votre score final est de ${score} / ${questions.length} 🎉`;
        nextButton.style.display = "none";
        feedbackElement.style.display = "none";
    }
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerText = "Voir le score final";
    }
    else {
        nextButton.innerText = "Question suivante";
    }
}
//pour afficher les réponses
function renderAnswers() {
    let currentQuestion = questions[currentQuestionIndex];
    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn"); //ajout de la classe btn aux boutons de réponses
        showAnswers.appendChild(button); //ajout des boutons de réponses dans le conteneur showAnswers
        button.addEventListener("click", () => {
            if (isenabled) {
                let feedbackElement = (document.getElementById("feedback")); //lorsqu'on clique sur une réponse, affiche si c'est bon ou pas et annule les autres réponses
                if (answers.correct === true) {
                    feedbackElement.innerText = "Bonne réponse !";
                    button.style.backgroundColor = "green"; //modification du CSS dans le JS
                    score++;
                }
                else {
                    feedbackElement.innerText = "Mauvaise réponse !";
                    button.style.backgroundColor = "red";
                }
                isenabled = false;
                clearInterval(countdown); // stoppe le timer quand on a répondu
                // On désactive les autres boutons de réponse
                const buttons = document.querySelectorAll(".btn");
                buttons.forEach((btn) => {
                    btn.disabled = true;
                    btn.style.opacity = "0.5";
                });
            }
        });
    });
    startCountdown();
}
//création de variables pour le feedback
let feedbackElement = document.getElementById("feedback");
// bouton question suivante
nextButton.addEventListener("click", () => {
    isenabled = true;
    currentQuestionIndex++;
    showQuestion.innerText = `${questions[currentQuestionIndex]?.question}`;
    feedbackElement.innerText = ""; //annulation des messages de feedback
    renderQuestion();
    renderAnswers();
});
function startCountdown() {
    clearInterval(countdown); // stoppe un éventuel timer précédent
    timeLeft = 20;
    timerElement.innerText = `⏳ Temps restant : ${timeLeft}s`;
    countdown = window.setInterval(() => {
        timeLeft--;
        timerElement.innerText = `⏳ Temps restant : ${timeLeft}s`;
        // Quand le temps arrive à zéro :
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.innerText = "⏰ Temps écoulé !";
            isenabled = false; // bloque les clics
            // On désactive les boutons de réponse
            const buttons = document.querySelectorAll(".btn");
            buttons.forEach((btn) => {
                btn.disabled = true;
                btn.style.opacity = "0.5";
            });
        }
    }, 1000); //pour éviter que les secondes défilent trop vite;
}
//fonction pour recommencer le quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = "";
    feedbackElement.innerText = "";
    feedbackElement.style.display = "block";
    showQuestion.style.display = "block";
    timerElement.style.display = "block";
    renderQuestion();
    renderAnswers();
}
startButton.addEventListener("click", restartQuiz);
//# sourceMappingURL=app.js.map