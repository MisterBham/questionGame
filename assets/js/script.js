// Assignment code
let gameEl = document.querySelector(".game");
let buttonEl = document.querySelector("button");
let changeArea = document.getElementById("changeArea");
let clock = document.getElementById("timer");
let hideButton = document.getElementById("hideButton");

// let prevScore = localStorage.getItem("score");

// Question Pool of 10 JavaScript related questions
let questionPool = [
  {
    question: "What are the JavaScript Data types?",
    a1: "Variables and constants",
    a2: "If statements and while loops",
    a3: "Number, String, Boolean, Function, Object and undefined",
    a4: "Null and undefined",
    correct: "Number, String, Boolean, Function, Object and undefined",
  },
  {
    question: "What data type does isNaN return?",
    a1: "Boolean",
    a2: "Number",
    a3: "Function",
    a4: "Object",
    correct: "Boolean",
  },
  {
    question: "What company developed JavaScript?",
    a1: "Amazon",
    a2: "Facebook/Meta",
    a3: "Microsoft",
    a4: "Netscape Communications",
    correct: "Netscape Communications",
  },
  {
    question: "What is the current value of this variable? \nLet score;",
    a1: "null",
    a2: "undefined",
    a3: "0",
    a4: "1",
    correct: "undefined",
  },
  {
    question: "Which functions are used with intervals of time?",
    a1: "setTimeout",
    a2: "setInterval",
    a3: "clearInterval",
    a4: "All of the above",
    correct: "All of the above",
  },
  {
    question: "Which symbol is used for single line comments in JavaScript?",
    a1: "//",
    a2: "/*",
    a3: "<!-- -->",
    a4: "##",
    correct: "//",
  },
  {
    question: "Which symbol is used for multiple line comments in JavaScript?",
    a1: "//",
    a2: "/*",
    a3: "<!-- -->",
    a4: "##",
    correct: "/*",
  },
  {
    question: "The === operator returns true when...?",
    a1: "The two comparable items are the same value",
    a2: "The two comparable items are the same value and type",
    a3: "The two comparable items are not the same value and type",
    a4: "The two comparable items are not the same value",
    correct: "The two comparable items are the same value and type",
  },
  {
    question:
      "What selectors are available in Vanilla JS without any libraries or frameworks?",
    a1: "document.querySelector",
    a2: "document.querySelectorAll",
    a3: "document.getElementByID",
    a4: "All of the above",
    correct: "All of the above",
  },
  {
    question: "Which of these is NOT a looping structure in JavaScript?",
    a1: "For",
    a2: "Keep",
    a3: "While",
    a4: "Do-While",
    correct: "Keep",
  },
];

// Global Variables
let secondsLeft = 10;
// let currScore = 0;

// Timer Function
function setTime() {
  let timerInterval = setInterval(function () {
    clock.textContent = "Timer: " + secondsLeft;
    console.log(secondsLeft);
    secondsLeft--;

    if (secondsLeft === -1) {
      clearInterval(timerInterval);
      gameOver();
    }
  }, 1000);
}

// Start Game Function
function startGame() {
  secondsLeft = 10;
  hideButton.classList.add("hide");
  changeArea.textContent = "";
  setTime();
  showQuestions();
}

function gameOver() {
  changeArea.textContent = "Score: ";
  hideButton.classList.remove("hide");
}

function showQuestions() {
  changeArea.textContent = JSON.stringify(questionPool[0], [
    "a1",
    "a2",
    "a3",
    "a4",
  ]);
}

// Event Listeners
buttonEl.addEventListener("click", startGame);
hideButton.addEventListener("click", startGame);
