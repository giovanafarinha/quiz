const question= [
    {
        question : "Dans Le Roi Lion, comment s’appelle le père de Simba ?",
        answers : ["Mufasa, Scar, Rafiki, Zazu"],
correctAnswer : 1
    },

    {
        question : "Quel est le nom de la princesse dans La Belle et la Bête ?",
        answers : ["Aurore, Cendrillon, Belle, Ariel"],
correctAnswer : 3
    },

    {
        question : "Dans Toy Story, quel est le nom du cow-boy en plastique ?",
        answers : ["Buzz, Woody, Jessie, Rex"],
correctAnswer : 2
    },
 {
        question : "Dans Blanche-Neige et les Sept Nains, quel est le véritable nom de la Méchante Reine ?",
        answers : ["Morgane, Maléfique, Grimhilde, Gothel"],
correctAnswer : 3
    },
     {
        question : "Dans La Reine des Neiges, quel est le nom du royaume d’Elsa et Anna ?",
        answers : ["Arendelle, Athènes, Atlantica, Atlantide"],
correctAnswer : 1
    },
];

let currentQuestionIndex = 0;
let score = 0;

const startButton= <HTMLElement>document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz)
function startQuiz(){
startButton.innerText = "Recommencer le quiz";
} //const startButton: HTMLElement | null = document.getElementById("start-btn"); 
