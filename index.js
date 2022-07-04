let guess = [];
let answer = document.getElementById("answer");
let guessBox = document.querySelector("#guess");
let lastGuess = document.getElementById("lastguess");
let random = Math.floor(Math.random() * 10);
let myAnswer = document.getElementById("submit");
let restart = document.getElementById("restart");
let incorrect = 10

console.log(random);

myAnswer.addEventListener("click", function myanswer() {
  guess.push(guessBox.value);
  submit();
});

function submit() {
  lastGuess.textContent += guess.pop() + ', ';
  if (isNaN(guessBox.value)){
    answer.textContent = "Please input a number";
    guess = [];
    lastGuess.textContent ='Lastguess: ' + guess;
  }
  if (guessBox.value == random) {
    answer.textContent = "You're right";
  } else if (guessBox.value < random) {
    answer.textContent = "Guess too low";
  } else if (guessBox.value > random) {
    answer.textContent = "Guess too high";
  }
  if(guessBox.value > incorrect){
    answer.textContent = "Please follow the rules";
    guess = []
    lastGuess.textContent ='Lastguess: ' + guess
  }

  guessBox.value = " ";
}
restart.addEventListener("click", function restart() {
  random = Math.floor(Math.random() * 10);
  answer.textContent = " ";
  guessBox.value = " ";
  guess = [];
  lastGuess.textContent ='Lastguess: ' + guess;
});
