//elements
const inputEl = document.querySelector('.user-input');
const guessEl = document.querySelector('.guesses');
const randomEl = document.querySelector('.error');
const messageEl = document.querySelector('.error-msg');
const btnSubmit = document.querySelector('.btn');

// global variables
// 1 to 50 random number
const randomNumber = Math.floor(Math.random() * 50) + 1;
let guesses = 10;

// function
const displayMessage = function (message, color) {
  messageEl.style.display = 'block';
  messageEl.style.color = color;
  messageEl.innerText = message;
};

// event listeners

btnSubmit.addEventListener('click', function () {
  const userInput = Math.ceil(Number(inputEl.value));

  // conditions

  if (userInput < 1 || userInput > 50) {
    displayMessage('enter a valid number', 'red');
  } else {
    if (guesses > 1) {
      if (userInput === randomNumber) {
        randomEl.innerText = randomNumber;
        randomEl.style.backgroundColor = 'green';
        displayMessage(`you won your score is ${guesses}`, 'green');
      } else {
        let message = `your guess is ${
          userInput > randomNumber ? 'greater' : 'lower'
        }`;
        displayMessage(message, 'red');
        guesses = guesses - 1;
        guessEl.innerText = `SORRY , ${guesses} guesses Left`;
      }
    } else {
      displayMessage('game over', 'red');
      randomEl.innerText = randomNumber;
      randomEl.style.backgroundColor = 'red';
    }
  }

  console.log(userInput);
});
