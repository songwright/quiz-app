let startButton = document.querySelector("#start-quiz-btn");
let startCard = document.querySelector("#start-card");
let quizCard = document.querySelector("#quiz-card");

startButton.addEventListener('click', function (event) {
  event.preventDefault();
  quizCard.setAttribute("style", "display: flex")
  startCard.setAttribute("style", "display: none")
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