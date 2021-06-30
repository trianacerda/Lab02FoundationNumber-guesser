// import functions and grab DOM elements
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('button');
const guessResults = document.getElementById('results');


// initialize state
let targetNumber = Number(Math.floor(Math.random() * 20));
let guessesRemaining = Number(4);


// set event listeners 
guessButton.addEventListener ('click', () => {
    guessesRemaining --;
    console.log(targetNumber);
    console.log(userInput.value);
    if (userInput.value === targetNumber) {
        guessButton.hidden = true;
    }
    if (guessesRemaining === 0) {
        guessButton.disabled = true;
    }
    if (userInput.value > targetNumber) {
        return guessResults.textContent = `Too High! Guesses Left!  ${guessesRemaining}`;
    } else if (userInput.value < targetNumber) {
        return guessResults.textContent = `Too Low! Guesses Left!  ${guessesRemaining}`;
    } else   
        return guessResults.textContent = `You Win! Guesses Left! ${guessesRemaining}`;
    
    
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
