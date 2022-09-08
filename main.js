// Write a function that returns an array containing all the 
// numbers inclusive to that range given the start and end values.

let startingNumber;
let endingNumber;
let numberRange = [];

function rangeOfNumbers(startingNumber, endingNumber) {
    if (startingNumber < endingNumber) {
        for (let x = startingNumber; x < endingNumber; x++){
            numberRange += x + " ";
        }
    }
    else if (startingNumber > endingNumber) {
        for (let x = startingNumber; x >= endingNumber; x--){
            numberRange += x + " ";
        }
    }
    else {
        numberRange = startingNumber;
    }
    console.log(numberRange);

}
rangeOfNumbers(0, 5);
rangeOfNumbers(9, 8);
rangeOfNumbers(5, 9);