/************
 VARIABLES
*************/

var wins = 0
var losses = 0
var guessesLeft = 10
var qwerty = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s","d","f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var correctCharacter = getRandomCharacter();

function getRandomCharacter(){
    var randomChar = String.fromCharCode( Math.floor(Math.random() * 26) + 97)
    return randomChar;
}    

// GAME FUNCTION W/ ONKEYUP

document.onkeyup = function(event) {
    console.log("GUESS", event.key);
    console.log("correct Character" + correctCharacter);

    // GUESSES 
    if (qwerty.includes(event.key)) {
        var guessSoFarList = document.getElementById("guessSoFar");
        guessesLeft = guessesLeft -1;
        // guessSoFarList.textContent += event.key;
        guessSoFarList.textContent = guessSoFarList.textContent + event.key;
            
        var guessesRemaining = document.getElementById("guessLeft");
        guessesRemaining.textContent = "Guesses Left: " + guessesLeft
        // WINS
        if (event.key === correctCharacter) {
            var winsHTML = document.getElementById("wins");
            wins += 1;
            winsHTML.textContent = "Wins: " + wins

            guessesLeft = 10;
            guessSoFarList.textContent = "Guesses So Far: "
            correctCharacter = getRandomCharacter();
        }

    }
    // LOSSES
    if (guessesLeft === 0){
    
        var lossesHTML = document.getElementById("losses");
        losses += 1;
        lossesHTML.textContent = "Losses: " + losses 

        guessesLeft = 10;
        guessSoFarList.textContent = "Guesses So Far: "
        correctCharacter = getRandomCharacter();

    }

}



















