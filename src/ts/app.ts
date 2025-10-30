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
  },

  {
    question: "Quel est le nom de la princesse dans La Belle et la Bête ?",
    answers: [
      { text: "Aurore", correct: false },
      {
        text: "Cendrillon",
        correct: false,
      },
      {
        text: "Belle",
        correct: true,
      },
      { text: "Ariel", correct: false },
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
];
let isenabled = true;

const startButton = <HTMLButtonElement>document.getElementById("start-btn");
const nextButton = <HTMLButtonElement>document.getElementById("next-btn");
const showQuestion = <HTMLButtonElement>document.getElementById("question");
const showAnswers = <HTMLButtonElement>document.getElementById("answers");
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
  let currentQuestion: any = question[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  showQuestion.innerHTML = questionNumber + ". " + currentQuestion.question;

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
      }
    });
  });
}

nextButton.addEventListener("click", () => {
  isenabled = true;
  question.forEach(() => {
    currentQuestionIndex++;
    alert(`${question[currentQuestionIndex]?.question}`);
  });
});

function resetState() {
  ///removed the answer 1/ answer 2/ answer 3/
  nextButton.style.display = "flex";
  while (showAnswers.firstChild) {
    showAnswers.removeChild(showAnswers.firstChild);
  }
}
