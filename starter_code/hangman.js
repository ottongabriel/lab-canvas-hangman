var hangman;

function Hangman() {
  this.words = ['dog','cat','mouse']; // dictionary of words
  this.secretWord = ""; // word that the player must guess to win the game
  this.letters = []; // array with all of the keys that the player has already pressed
  this.guessedLetter = ''; // string holding all of the letters that the player has guessed correctly
  this.errorsLeft = 10; // number of erros that the player has left before they loose the hame
}


/*
// returns a random word from the words array
*/
Hangman.prototype.getWord = function () {
  randomWordIndex = Math.floor(Math.random() * this.words.length);
  return this.words[randomWordIndex];
};


/*
// checks if the character pressed in the keyboard is a letter
// returns true if it is a letter
*/
Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode >= 65 && keyCode <= 90){
    return true;
  }
  else{
    return false;
  }
};


/*
// Checks if a letter has been cliked already
// returns true if the letter has not been clicked
// returns false if the lettar has been clicked already
*/
Hangman.prototype.checkClickedLetters = function (key) {
  var hasBeenClicked = true;
  this.letters.forEach(function(letter){
    if(letter === key){
      hasBeenClicked = false;
    }
  });
  return hasBeenClicked;
};


/*
// If the player guessed a letter correctly it adds it to the guessedLetter string
// It then calls the function to check if the player meets the criteria to win the game
*/
Hangman.prototype.addCorrectLetter = function (i) {
  var currentLetter = this.secretWord[i].toUpperCase();
  this.letters.push(currentLetter);
  this.guessedLetter += currentLetter;
  this.checkWinner();
};


/*
// If the player pressed a letter that is not in the secret word, it adds that letter to 
// the letter array (which is an array collecting all of the letters the player has guessed
// wheter they are right or not).
// It then removes one of the attempts the player has left before loosing the game.
// It then checks if this mistake made them loose the game.
*/
Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft--;
  this.checkGameOver();
};


/*
// Checks if the player has lost the game
// returns true if they have lost
*/
Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true;
  }
  else{
    return false;
  }
};


/*
// Checks if the player has won the game
// Returns true if they have won the game
*/
Hangman.prototype.checkWinner = function () {
  var correctGuesses = 0;
  for(var i = 0; i < this.guessedLetter.length; i++){
    for(var j = 0; j < this.secretWord.length; j++){
      if(this.guessedLetter[i] === this.secretWord[j]){
        correctGuesses++;
      }
    }
  }
  if(correctGuesses === this.secretWord.length){
    return true;
  }
  else{
    return false;
  }

};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
