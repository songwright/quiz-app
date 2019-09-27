let startButton = document.querySelector("#start-quiz-btn");
let startCard = document.querySelector("#start-card");
let quizCard = document.querySelector("#quiz-card");
let finalCard = document.querySelector("#final-card");
let highScoresCard = document.querySelector("#high-scores-card");
let questionTitle = document.querySelector("#title");
let choiceList = document.querySelector(".list-group");
let quizMessage = document.querySelector("#quiz-message");
let clock = document.querySelector("#clock");
let finalScore = document.querySelector("#final-score");
let highScoreButton = document.querySelector("#high-score");
let viewHighScoresButton = document.querySelector("#view-high-scores-btn");
let clearHighScores = document.querySelector("#clear-high-scores");
let highScoresList = document.querySelector("#high-scores-list");
let highScores = [];
let seconds = 75;
let t = 0; // For stopping the clock
let questionNum = 0;

let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly braces", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is.",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log"
  }
];

init();

function init() {
  // Parsing the JSON stsring to an object
  let storedHighScores = JSON.parse(localStorage.getItem("highScores"));

  // If high scores were retrieved from localStorage, update highScores array to it.
  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }
}


viewHighScoresButton.addEventListener('click', function(event) {
  event.preventDefault();
  quizCard.setAttribute("style", "display: none");
  startCard.setAttribute("style", "display: none");
  highScoresCard.setAttribute("style", "display: flex");
  renderHighScores();
})

clearHighScores.addEventListener('click', function(event) {
  event.preventDefault();
  highScoresList.innerHTML = '';
  highScores = [];
  saveHighScores();
})

startButton.addEventListener('click', function (event) {
  event.preventDefault();
  quizCard.setAttribute("style", "display: flex");
  startCard.setAttribute("style", "display: none");
  highScoresCard.setAttribute("style", "display: none");
  renderQuestion();
  timer();
});

function renderQuestion() {
  // Reset the list of multiple choice answers.
  choiceList.innerHTML = '';
  
  if (questionNum === questions.length ) {
    // Display All done card
    finalCard.setAttribute("style", "display: flex")
    quizCard.setAttribute("style", "display: none")
    stopClock();
    finalScore.innerHTML = seconds;
  } else {
    for (let i = 0; i < questions[questionNum].choices.length; i++) {
      let li = document.createElement("li");
      li.textContent = questions[questionNum].choices[i];
      li.setAttribute("class", "list-group-item");
      choiceList.appendChild(li);
  
      li.addEventListener("click", function(event) {
        let choice = event.target;
  
          if (choice.innerHTML === questions[questionNum].answer) {
            questionNum++;
            quizMessage.innerHTML = "Right!";
            renderQuestion();
          } else if (choice !== questions[questionNum].answer) {
            takeScore();
            quizMessage.innerHTML = "Wrong";
          }
      });
    }
    questionTitle.textContent = questions[questionNum].title;
  }
}

function takeScore() {
  if (seconds > 10) {
    seconds -= 10;
  } else {
    seconds = 0;
  }
}

// Timer functions based on a timer by Daniel Hug https://jsfiddle.net/Daniel_Hug/pvk6p/
function tick() {
  if (seconds > 0) {
    seconds -=1;
    clock.textContent = seconds;
    timer();
  } else {
    stopClock();
  }
}

function timer() {
  t = setTimeout(tick, 1000);
}

function stopClock () {
  clearTimeout(t);
}

// High score button
highScoreButton.addEventListener("click", function(event) {
  event.preventDefault();

  let initials = document.querySelector("#initials").value;
  let highScore = initials + " - " + seconds;

  if (initials === '') {
    alert("Input cannot be blank.");
  }

  // Add high score to array
  highScores.push(highScore);

  // Show high score card.
  highScoresCard.setAttribute("style", "display: flex");
  finalCard.setAttribute("style", "display: none");

  saveHighScores();
  renderHighScores();
});

function saveHighScores () {
  // Save initials and high score.
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

function renderHighScores () {
  // Clear high scores element before updating.
  highScoresList.innerHTML = '';

  highScores.forEach(score => {
    let li = document.createElement("li");
    li.innerHTML = score;

    highScoresList.appendChild(li);
  })
}