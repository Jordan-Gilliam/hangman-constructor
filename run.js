var inquirer = require('inquirer');
var Letter = require("./letter.js");
var Word = require("./word.js");




var currentWord;
var wordArr = ["apple", "orange", "banana", "pear"];
var guessesLeft;

gameStart();


function guessLetter() {
    if (guessesLeft > 0) {
        inquirer.prompt([{
            "message": "Guess a letter:",
            "name": "letter"

        }]).then(function(userInput) {
            currentWord.exposeLetter(userInput.letter);
            if (currentWord.isExposed()) {
                console.log("You Win!");
                gameStart();
            }
            else {
                guessesLeft--;
                console.log("");
                console.log("Remaining Guesses: " + guessesLeft);
                console.log("");
                guessLetter();
            }
        });

    }
    else {
        gameStart();
    }
}


function gameStart() {
    inquirer.prompt([{
        type: "list",
        name: "playGame",
        message: "Would you like to play a new game of hangman?",
        choices: ["Yes", "No"]
    }]).then(function(user) {
        if (user.playGame === "Yes") {
            console.log("");
            console.log("Alright, lets get started!");
            console.log("");
            newGame();
        }
        else {
            console.log("");
            console.log("Ok, maybe another time...");
            console.log("");
        }
    });
}


function newGame() {
    guessesLeft = 10;
    currentWord = new Word(wordArr[Math.floor((Math.random() * wordArr.length))]);
    guessLetter();


}

module.export = gameStart;
