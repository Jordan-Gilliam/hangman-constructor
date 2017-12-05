var Letter = require("./letter.js");
var gameStart = require("./run.js");

function Word(value) {
    this.lettersArr = [];

    //looping through each letter of value (wordChoice) and pushing each index to lettersArr and assigning "value" as the "character" of "Letter"
    for (var l = 0; l < value.length; l++) {
        this.lettersArr.push(new Letter(value[l]));
    }

    // loop through characters pushed to lettersArr
    //expose individual letters if character and letter match
    this.exposeLetter = function(letter) {
        var tempWord = "";
        for (var i = 0; i < this.lettersArr.length; i++) {
            tempWord += this.lettersArr[i].exposeIfMatches(letter);
        }
        console.log(tempWord);
    };

    //deciding if user won by looping through lettersArr and checking if all letters are exposed. if all are exposed, will return true, if not, it will keep looping
    this.isExposed = function() {
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (!this.lettersArr[i].exposed) {
                return false;
            }
        }
        return true;

    };


}

module.exports = Word;
