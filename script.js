let startButton = document.querySelector("#start-quiz-btn");
let startCard = document.querySelector("#start-card");
let quizCard = document.querySelector("#quiz-card");
let questionTitle = document.querySelector("#title");
let choiceList = document.querySelector(".list-group");
let quizMessage = document.querySelector("#quiz-message");

startButton.addEventListener('click', function (event) {
  event.preventDefault();
  quizCard.setAttribute("style", "display: flex")
  startCard.setAttribute("style", "display: none")
  renderQuestion();
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
  choiceList.innerHTML = '';
  questionTitle.textContent = questions[questionNum].title;

  for (i = 0; i < questions[questionNum].choices.length; i++) {
    let li = document.createElement("li");
    li.textContent = questions[questionNum].choices[i];
    // li.setAttribute("class", "list-group-item");
    choiceList.appendChild(li);

    li.addEventListener("click", function(event) {
      let choice = event.target;

        if (choice.innerHTML === questions[questionNum].answer) {
          questionNum++;
          console.log("questionNum = " + questionNum);
          renderQuestion();
        } else if (choice !== questions[questionNum].answer) {
          takeScore();
        }
    });
  }
}

function takeScore() {
  score = score - 10;
  console.log(score);
  // window.open("highscores.html","_self");
}

// Timer functions based on a timer by Daniel Hug https://jsfiddle.net/Daniel_Hug/pvk6p/
// function tick() {
//   seconds +=1;
//   if (seconds >= 60) { // The hexigesimal number base for seconds converts them to minutes at 60 seconds.
//       seconds = 0;
//       minutes +=1;
//   }
//   clock.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
//   timer();
// }

// function timer() {
//   t = setTimeout(tick, 1000);
// }

// function stopClock () {
//   clearTimeout(t);
// }

// function clearClock () {
//   clock.textContent = "00:00";
//       seconds = 0; minutes = 0;
// }