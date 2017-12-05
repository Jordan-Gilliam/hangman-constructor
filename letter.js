//represents one letter in the word
function Letter(character) {
    this.exposed = false;
    this.character = character;

    //comparing two letters and deciding if it's gonna be exposed
    this.exposeIfMatches = function(letter) {
        var tempLetter = "";
        if (this.character === letter) {
            this.exposed = true;
            tempLetter = this.character;
        }
        if (this.exposed === false) {
            tempLetter = "_";
        }
        else {
            tempLetter = this.character;
        }
        // console.log(tempLetter);
        return tempLetter;
    };
}

module.exports = Letter;
