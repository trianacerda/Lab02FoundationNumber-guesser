export function compareNumbers(targetNumber, guessedNumber){

    if (guessedNumber === targetNumber) {
        return 0;
    }
    if (guessedNumber > targetNumber) {
        return 1;
    }
    if (guessedNumber < targetNumber) {
        return -1; 
        
    }

}    