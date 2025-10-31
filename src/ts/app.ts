const questions = [
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
  },

  {
    question: "Dans Les Nouveaux Héros, quel est le nom du robot créé par Tadashi ?",
    answers: [
      { text: "Maxbot", correct: false },
      {
        text: "Baymax",
        correct: true,
      },
      {
        text: "Bot-X",
        correct: false,
      },
      { text: "Tadash-01", correct: false },
    ],
  },

  {
    question: "Dans Toy Story, quel est le nom du cow-boy en plastique ?",
    answers: [
      { text: "Buzz", correct: false },
      {
        text: "Woody",
        correct: true,
      },
      {
        text: "Jessie",
        correct: false,
      },
      { text: "Rex", correct: false },
    ],
  },
  {
    question:
      "Dans Blanche-Neige et les Sept Nains, quel est le véritable nom de la Méchante Reine ?",
    answers: [
      { text: "Morgane", correct: false },
      {
        text: "Maléfique",
        correct: false,
      },
      {
        text: "Grimhilde",
        correct: true,
      },
      { text: "Gothel", correct: false },
    ],
  },
  {
    question:
      "Dans La Reine des Neiges, quel est le nom du royaume d’Elsa et Anna ?",
    answers: [
      { text: "Arendelle", correct: true },
      {
        text: "Athènes",
        correct: false,
      },
      {
        text: "Atlantica",
        correct: false,
      },
      { text: "Atlantide", correct: false },
    ],
  },
  {
    question:
      "Dans Le Monde de Nemo, comment s’appelle le requin végétarien qui devient ami avec Marlin ?",
    answers: [
      { text: "Bruce", correct: true },
      {
        text: "Marlin",
        correct: false,
      },
      {
        text: "Crush",
        correct: false,
      },
      { text: "Squirt", correct: false },
    ],
  },
  {
    question:
      "Dans les Indestructibles, quel est le pouvoir de Violette ?",
    answers: [
      { text: "Elle court très vite", correct: false },
      {
        text: "Elle vole",
        correct: false,
      },
      {
        text: "Elle devient invisible et crée des boucliers",
        correct: true,
      },
      { text: "Elle change d'apparence", correct: false },
    ],
  },
  {
    question:
      "Dans Star Wars, quel est le nom du petit extraterrestre vert souvent appelé Baby Yoda ?",
    answers: [
      { text: "Yoda", correct: false },
      {
        text: "Yaddle",
        correct: false,
      },
      {
        text: "Grogu",
        correct: true,
      },
      { text: "Gizmo", correct: false },
    ],
  },
   {
    question:
      "Dans la série Phinéas et Ferb, quel animal est en réalité un agent secret ?",
    answers: [
      { text: "Le chien Balthazar", correct: false },
      {
        text: "Perry l'ornithorynque",
        correct: true,
      },
      {
        text: "le Hamster Dexter",
        correct: false,
      },
      { text: "Le chat Milou", correct: false },
    ],
  },
  {
    question:
      "Dans Encanto, quel est le pouvoir de la cousine Dolores Madrigal ?",
    answers: [
      { text: "Elle peut voler", correct: false },
      {
        text: "Elle lit dans les pensées",
        correct: false,
      },
      {
        text: "Elle entend tout, même les murmures",
        correct: true,
      },
      { text: "Elle contrôle les sons", correct: false },
    ],
  },
];
let isenabled = true;
let timerElement = document.getElementById("timer") as HTMLElement;
let countdown: number;
let timeLeft = 20;


const startButton = <HTMLButtonElement>document.getElementById("start-btn");
const nextButton = <HTMLButtonElement>document.getElementById("next-btn");
const showQuestion = <HTMLButtonElement>document.getElementById("question");
const showAnswers = <HTMLButtonElement>document.getElementById("answers");
let currentQuestionIndex = 0;
let score = 0;
startButton.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  startButton.innerText = "Recommencer le quiz";
  showQuestion.innerText = `${questions[currentQuestionIndex]?.question}`;
  showAnswers.classList.remove("visible");

  renderAnswerButtons();
});
function renderAnswerButtons() {
  resetState(); ///this will reset by each question
  let currentQuestion: any = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  if(currentQuestionIndex < 10){
showQuestion.innerHTML = questionNumber + ". " + currentQuestion.question;
  }
  else{
    showQuestion.style.display = "none"
  }
  currentQuestion.answers.forEach((answers: any) => {
    const button = <HTMLElement>document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    showAnswers.appendChild(button);

    button.addEventListener("click", () => {
      if (isenabled) {
        let feedbackElement = <HTMLButtonElement>(
          document.getElementById("feedback")
        );
        if (answers.correct === true) {
          feedbackElement.innerText = "Vrai ";
          button.style.backgroundColor = "green";
        } else {
          feedbackElement.innerText = "Faux";
          button.style.backgroundColor = "red";
        }
        isenabled = false;
        clearInterval(countdown);
      }
    });
  });
  startCountdown();
}

nextButton.addEventListener("click", () => {
  isenabled = true;
  currentQuestionIndex++;
  showQuestion.innerText = `${questions[currentQuestionIndex]?.question}`;
  renderAnswerButtons();
});

function resetState() {
  ///removed the answer 1/ answer 2/ answer 3/
  nextButton.style.display = "flex";
  while (showAnswers.firstChild) {
    showAnswers.removeChild(showAnswers.firstChild);
  }
}
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
        (btn as HTMLButtonElement).disabled = true;
        (btn as HTMLButtonElement).style.opacity = "0.5";
      });
    }
  }, 1000);
}

