'use strict';
// Copyright : Abdul Hannan Ayubi
// console.log(document.querySelector('.message').textContent);
// // Dom manuplation
// // Document object model
// // API = Application programming interface
// // Timer , fetch
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.label-score').textContent = 'Your Socre';
// document.querySelector('.number').textContent = 22;
// // const num = document.querySelector('.guess').value;
// document.querySelector('.guess').value = 33;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
let scoreOfGuess = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber.toString();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no number in box
  if (guess <= 0) {
    displayMessage('⛔ No number');
    // When the score of guess is equal with the secret number
  } else if (guess === secretNumber) {
    displayMessage('🎉🎉 Correct Number');
    // if the high score is grether than the previous high score
    if (highScore < scoreOfGuess) {
      highScore = scoreOfGuess;
    }
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber.toString();
    document.querySelector('.highscore').textContent = highScore.toString();
    document.querySelector('.number').style.width = '30rem';
    // if the guess number is higher than the secret number and if the number of the guessed is grether than one
  } else if (guess !== secretNumber) {
    if (scoreOfGuess > 1) {
      displayMessage(guess > secretNumber ? 'Too high 📈📈' : 'Too Low 📉📉');
      scoreOfGuess--;
    } else {
      displayMessage('🤦‍♂️🤦‍♀️ You lose the game');
      document.body.style.backgroundColor = 'red';
    }
  }
  document.querySelector('.score').textContent = scoreOfGuess.toString();
});
document.querySelector('.again').addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  scoreOfGuess = 20;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
