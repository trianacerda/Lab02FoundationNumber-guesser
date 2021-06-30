// import functions and grab DOM elements
const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('button');
const guessResults = document.getElementById('results');


// initialize state
const targetNumber = Math.floor(Math.random()*20);
const guessesRemaining = Number(4)


// set event listeners 
guessButton.addEventListener ('click' () => {
  guessesRemaining = guessesRemaining - 1;
  
  if (userInput === targetNumber) {
    guessResults.textContent = `You won!`
  } else if ()
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
