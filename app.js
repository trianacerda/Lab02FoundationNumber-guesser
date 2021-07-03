import { compareNumbers } from './utils.js'; 

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('button');
const guessResults = document.getElementById('results');
const resetBtn = document.getElementById('reset');

let targetNumber = Number(Math.floor(Math.random() * 20));
let guessesRemaining = Number(4);

resetBtn.addEventListener ('click', () => {
    location.reload();
});

guessButton.addEventListener ('click', () => {
    guessesRemaining --;
    const guessedNumber = Number(userInput.value);
    const compareResults = compareNumbers(targetNumber, guessedNumber);

    if (guessesRemaining === 0) {
        guessButton.disabled = true;
        return guessResults.textContent = `You Lose!`;
    }
    
    if (compareResults === 0){
        guessButton.disabled = true;
        return guessResults.textContent = `You Win! Guesses Left: ${guessesRemaining}`;
    }
    else if (compareResults === -1){
        return guessResults.textContent = `Too Low! Guesses Left:  ${guessesRemaining}`;
    }
    else {
        return guessResults.textContent = `Too High! Guesses Left:  ${guessesRemaining}`;
    }
    // if (guessedNumber === targetNumber) {
    
    //     guessButton.disabled = true;
    // }
    // if (guessesRemaining === 0) {
    //     guessButton.disabled = true;
    //     return guessResults.textContent = `You Lose!`;
    // }
    // if (userInput.value > targetNumber) {
    //     return guessResults.textContent = `Too High! Guesses Left:  ${guessesRemaining}`;
    // } else if (userInput.value < targetNumber) {
    //     return guessResults.textContent = `Too Low! Guesses Left:  ${guessesRemaining}`;
    // } else   
    //     return guessResults.textContent = `You Win! Guesses Left: ${guessesRemaining}`;
    
    
});
   
