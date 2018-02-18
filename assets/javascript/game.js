window.onload = function () {

  var letterArray = [];

  var guessesRemaining = 12;

  var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]

  // Guesses Remaining: Could get the guesses remaing to reduce by the number of spaces in the word on a key press if I put this within the scope of the function, but it wouldn't show from the start. Only after an initial key press.
  document.getElementById("guessRemaining").innerHTML = "You have " + guessesRemaining + " guess(es) remaining";

  if (guessesRemaining <= 0){
    document.getElementById("guessRemaining").innerHTML = "Game Over";
  }

  // Computer selects a random word
  var randomIndex = Math.floor(Math.random() * words.length);

  var currentWord = words[randomIndex];

  var wordLength = currentWord.length;

  var correctWord = "";

  var wordInPlay = "";

  console.log(currentWord)

  // Current word is given spaces
  for (var i = 0; i < wordLength; i++) {
    var spaces = document.createElement("li");
    spaces.innerHTML = "_ ";
    spaces.classList.add("spaced");
    guessedWord.appendChild(spaces);
    correctWord += currentWord[i];
    wordInPlay += "-";
    console.log(correctWord);
    console.log(wordInPlay);
  }

// Takes key inputs from user
  document.onkeyup = function (event) {
    var guessedLetter = event.key.toLowerCase();
    // My if/else statement wouldn't work properly in here to alert the user if they picked a letter more than once. 
    letterArray.push(" " + guessedLetter);
    console.log(letterArray);
    document.getElementById("letters").innerHTML = letterArray;

    // }

    for (var j = 0; j < wordInPlay.length; j++) {
      if (correctWord[j] === guessedLetter) {
        wordInPlay[j] = guessedLetter;
        var lisInDom = document.querySelectorAll(".spaced");
        lisInDom[j].innerText = guessedLetter + "  ";
      }

      //Supposed to remove 1 guess from the guessesRemaining variable, but it's not in the scope of that variable to make the change. In addition it counts wrong and right answers = to the number of spaces that it's checking. E.g. If the word has 3 letters then it's 3 less guesses
       else if (wordInPlay[j] !== guessedLetter) {
        guessesRemaining--;
        console.log(guessesRemaining)
         }
      }
    
  }
 
}




