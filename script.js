let startButton = document.querySelector("#start-quiz-btn");
let startCard = document.querySelector("#start-card");
let quizCard = document.querySelector("#quiz-card");
let finalCard = document.querySelector("#final-card");
let questionTitle = document.querySelector("#title");
let choiceList = document.querySelector(".list-group");
let quizMessage = document.querySelector("#quiz-message");
let clock = document.querySelector("#clock");
let seconds = 75;
let t =0; // For clearing the clock


startButton.addEventListener('click', function (event) {
  event.preventDefault();
  quizCard.setAttribute("style", "display: flex")
  startCard.setAttribute("style", "display: none")
  renderQuestion();
  timer();
});

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
  }
  ///etc.
];

let score = 0;
let questionNum = 0;

function renderQuestion() {
  // Reset the list of multiple choice answers.
  choiceList.innerHTML = '';
  
  if (questionNum === questions.length ) {
    // Display All done card
    finalCard.setAttribute("style", "display: flex")
    quizCard.setAttribute("style", "display: none")
    stopClock();
  } else {
    for (let i = 0; i < questions[questionNum].choices.length; i++) {
      let li = document.createElement("li");
      li.textContent = questions[questionNum].choices[i];
      // li.setAttribute("class", "list-group-item");
      choiceList.appendChild(li);
  
      li.addEventListener("click", function(event) {
        let choice = event.target;
  
          if (choice.innerHTML === questions[questionNum].answer) {
            questionNum++;
            renderQuestion();
          } else if (choice !== questions[questionNum].answer) {
            takeScore();
          }
      });
    }
    questionTitle.textContent = questions[questionNum].title;
  }
}

function takeScore() {
  seconds -= 10;
  // window.open("highscores.html","_self");
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
