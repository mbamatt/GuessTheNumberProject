/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/
let computersNumber = Math.floor(Math.random() * 100) + 1;
function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
    if (userGuess < 1 || userGuess > 100) {
        console.log("line 10 console log", userGuess);
        return ("Please input a number between 1 and 100");
    } else if (userGuess < computersNumber) {
            return (`${userGuess} is Too low! Try Again.`);
        } else if (userGuess > computersNumber) {
            return (`${userGuess} is Too high! Try again.`);
        } else {
            return ("Congratulations! You've guessed the number.");
        
        }

    // YOUR CODE ABOVE
};

let currentGuess = 50;
let lowerLimit = 1;
let upperLimit = 100;



//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

function startCompGuess(num) {
    // This should return a string that denotes the first guessed number
currentGuess = 50;
lowerLimit = 1;
upperLimit = 100;
return "Is your number " + currentGuess;
}
// YOUR CODE ...



function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */
if (reply === "lower") {
    upperLimit = currentGuess - 1;
    } else if (reply === "higher") {
        lowerLimit = currentGuess + 1;
 } else if (reply === "correct") {
    return "I guessed it! Your number was " + currentGuess + " . ";
 }
currentGuess = Math.floor((lowerLimit + upperLimit) / 2);
return "Is your number " + currentGuess + "?";
}
