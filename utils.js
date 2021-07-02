export function compareNumbers(targetNumber, guessedNumber){

    if (guessedNumber === targetNumber) {
        guessButton.disabled = true;
    }
    if (guessesRemaining === 0) {
        guessButton.disabled = true;
        return guessResults.textContent = `You Lose!`;
    }
    if (userInput.value > targetNumber) {
        return guessResults.textContent = `Too High! Guesses Left:  ${guessesRemaining}`;
    } else if (userInput.value < targetNumber) {
        return guessResults.textContent = `Too Low! Guesses Left:  ${guessesRemaining}`;
    } else   
        return guessResults.textContent = `You Win! Guesses Left: ${guessesRemaining}`;
    
}