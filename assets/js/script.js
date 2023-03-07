// Assignment code
var textEl = document.getElementById("textContainer");
var startbuttonEl = document.getElementById("start");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var scoreEl = document.getElementById("score");
var a0El = document.getElementById("a0");
var a1El = document.getElementById("a1");
var a2El = document.getElementById("a2");
var a3El = document.getElementById("a3");
var initialsCont = document.getElementById("initials-container");
var initialsInput = document.getElementById("initials-input");
var submitBtn = document.getElementById("submitBtn");
var leaderboardEl = document.getElementById("leaderboard");
var lb1El = document.getElementById("lb1");
// var lb2El = document.getElementById("lb2");
// var lb3El = document.getElementById("lb3");
var clearscoresBtn = document.getElementById("clearscores");

var timer;
var timerCount;
var currentIndex = 0;
var points = 0;
var highScore = localStorage.getItem("highScore") || "0";
var leader = localStorage.getItem("leader") || "No leader value stored yet";
// var second = localStorage.getItem("2nd") || "0";
// var secondIni =
//   localStorage.getItem("2ndini") || "No 2nd place value stored yet";
// var third = localStorage.getItem("3rd") || "0";
// var thirdIni =
//   localStorage.getItem("3rdini") || "No 3rd place value stored yet";

lb1El.textContent = "Current Leader: " + leader + " , Score: " + highScore;

// lb2El.textContent = "2nd place: " + secondIni + " , Score: " + second;
// lb3El.textContent = "3rd place: " + thirdIni + " , Score: " + third;

var questionPool = [
  {
    question: "What are the JavaScript data types?",
    answerChoices: [
      "Variables and constants",
      "If statements and while loops",
      "Number, String, Boolean, Function, Object and undefined",
      "Null and undefined",
    ],
    correct: "a2",
  },
  {
    question: "What data type does isNaN return?",
    answerChoices: ["Boolean", "Number", "Function", "Object"],
    correct: "a0",
  },
  {
    question: "What company developed JavaScript?",
    answerChoices: [
      "Amazon",
      "Facebook/Meta",
      "Microsoft",
      "Netscape Communications",
    ],
    correct: "a3",
  },
  {
    question: "What is the current value of this variable?      Var score;",
    answerChoices: ["null", "undefined", "0", "1"],
    correct: "a1",
  },
  {
    question: "Which functions are used with intervals of time?",
    answerChoices: [
      "setTimeout",
      "setInterval",
      "clearInterval",
      "All of the above",
    ],
    correct: "a3",
  },
  {
    question: "Which symbol is used for single line comments in JavaScript?",
    answerChoices: ["//", "/*", "<!-- -->", "##"],
    correct: "a0",
  },
  {
    question: "Which symbol is used for multiple line comments in JavaScript?",
    answerChoices: ["//", "/*", "<!-- -->", "##"],
    correct: "a1",
  },
  {
    question: "The === operator returns true when...?",
    answerChoices: [
      "The two comparable items are the same value",
      "The two comparable items are the same value and type",
      "The two comparable items are not the same value and type",
      "The two comparable items are not the same value",
    ],
    correct: "a1",
  },
  {
    question:
      "What selectors are available in Vanilla JS without any libraries or frameworks?",
    answerChoices: [
      "document.querySelector",
      "document.querySelectorAll",
      "document.getElementByID",
      "All of the above",
    ],
    correct: "a3",
  },
  {
    question: "Which of these is NOT a looping structure in JavaScript?",
    answerChoices: ["for", "keep", "while", "so while"],
    correct: "a1",
  },
];

function startGame() {
  textEl.innerHTML = "";
  textEl.textContent = "";
  initialsInput.value = "";
  questionEl.classList.remove("hide");
  answersEl.classList.remove("hide");
  startbuttonEl.classList.add("hide");
  timerEl.classList.remove("hide");
  scoreEl.classList.remove("hide");
  initialsCont.classList.add("hide");
  leaderboardEl.classList.add("hide");
  timerCount = 60;
  points = 0;
  currentIndex = 0;
  startTimer();
  questionEl.textContent = questionPool[currentIndex].question;
  a0El.textContent = questionPool[currentIndex].answerChoices[0];
  a1El.textContent = questionPool[currentIndex].answerChoices[1];
  a2El.textContent = questionPool[currentIndex].answerChoices[2];
  a3El.textContent = questionPool[currentIndex].answerChoices[3];
}

function confirmAnswer(choice) {
  console.log("Answer has been selected!");
  var selectedAnswer = choice.target.id;
  console.log(choice.target.id);
  if (selectedAnswer == questionPool[currentIndex].correct) {
    points += 10;
    scoreEl.textContent = "Score: " + points;
    nextQuestion();
    return;
  } else {
    points += 0;
    timerCount -= 5;
    scoreEl.textContent = "Score: " + points;
    nextQuestion();
    return;
  }
}

function startTimer() {
  timer = setInterval(function () {
    timerEl.textContent = "Timer: " + timerCount;
    timerCount--;
    if (timerCount <= -1) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}

function nextQuestion() {
  if (currentIndex >= 9) {
    endGame();
    questionEl.textContent = "";
    a0El.textContent = "";
    a1El.textContent = "";
    a2El.textContent = "";
    a3El.textContent = "";
    return;
  } else {
    currentIndex++;
    questionEl.textContent = questionPool[currentIndex].question;
    a0El.textContent = questionPool[currentIndex].answerChoices[0];
    a1El.textContent = questionPool[currentIndex].answerChoices[1];
    a2El.textContent = questionPool[currentIndex].answerChoices[2];
    a3El.textContent = questionPool[currentIndex].answerChoices[3];
  }
}

function endGame() {
  timerEl.classList.add("hide");
  questionEl.classList.add("hide");
  answersEl.classList.add("hide");
  startbuttonEl.classList.remove("hide");
  initialsCont.classList.remove("hide");
  startbuttonEl.textContent = "Play Again?";
  textEl.innerHTML = "Game Over! Enter your initials to record your score.";
  scoreEl.textContent = "Your final score is: " + points;
  clearInterval(timer);
  storeScore();
}

function storeScore() {
  if (points > highScore) {
    localStorage.setItem("leader", initialsInput.value);
    localStorage.setItem("highScore", points);
  }
  // if (points > second) {
  //   localStorage.setItem("2ndini", initialsInput.value);
  //   localStorage.setItem("2nd", points);
  // }
  // if (points > third) {
  //   localStorage.setItem("3rdini", initialsInput.value);
  //   localStorage.setItem("3rd", points);
  // }
  // refreshScores();
}

function clearScores() {
  localStorage.setItem("highScore", 0);
  localStorage.setItem("leader", "");
  // localStorage.setItem("2nd", 0);
  // localStorage.setItem("2ndini", "");
  // localStorage.setItem("3rd", 0);
  // localStorage.setItem("3rdini", "");
  location.reload();
}

function refreshScores() {
  highScore = localStorage.getItem("highScore") || "0";
  leader = localStorage.getItem("leader") || "No leader value stored yet";
  // second = localStorage.getItem("2nd") || "0";
  // secondIni = localStorage.getItem("2ndini") || "No 2nd place value stored yet";
  // third = localStorage.getItem("3rd") || "0";
  // thirdIni = localStorage.getItem("3rdini") || "No 3rd place value stored yet";
  lb1El.textContent = "Current Leader: " + leader + " , Score: " + highScore;
  // lb2El.textContent = "2nd place: " + secondIni + " , Score: " + second;
  // lb3El.textContent = "3rd place: " + thirdIni + " , Score: " + third;
}

// Event Listeners
startbuttonEl.addEventListener("click", startGame);
a0El.addEventListener("click", confirmAnswer);
a1El.addEventListener("click", confirmAnswer);
a2El.addEventListener("click", confirmAnswer);
a3El.addEventListener("click", confirmAnswer);
submitBtn.addEventListener("click", storeScore);
clearscoresBtn.addEventListener("click", clearScores);
