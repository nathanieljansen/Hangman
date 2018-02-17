// Generate a random word and the appropriate number of spaces for the word
// WHen the person it inputs to it needs to check if that letter is in the word or not
// Letters appear
// Number of guesses decreases
// After 12 wrong guess says you lose
// After guessing the correct word it says you win


// GIVEN AN ARRY OF SAVE USER GUESSES

// GIVEN A CURRENT

// GIVEN A CURRENT WORD TO CHECK AGAINST

// THEN SHOW A STRING WITH CORRECT LETTERS

// START WITH EMPTY RESULT STRING
// LOOP THROUGH EACH LETTER OF THE WORD
    //ADD UNDERSCORE TO RESULT
    //LOOP THROUGH EACH CORRECT GUESS
      //IF LETTER IS SAME AS CURRENT LETTER OF WORD REPLACE WITH LETTER

//


window.onload = function () {

  var letterArray = [ ];



  // var splitLetterArray = letterArray.split()

  guesses = 12

  var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]

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


 // Create a new variable that + or joins guessed letter every time key is pressed
 // look up how to use join()
 //console log the new variable to see if its working
 // figure out how to display the letters in variable
  // Accepts users' letter inputs
  document.onkeyup = function (event) {
    var guessedLetter = event.key.toLowerCase();
    console.log(guessedLetter);
    // Before execute this line have to be sure user hasn't picked that letter already...if/if else statement{ 
    letterArray.push(" " + guessedLetter); 
    console.log(letterArray);
    document.getElementById("letters").innerHTML = letterArray;
    
  // }

    for(var j = 0; j < wordInPlay.length; j++) {
      if (correctWord[j] === guessedLetter) { 
        wordInPlay[j] = guessedLetter;
       var lisInDom = document.querySelectorAll(".spaced");
       lisInDom[j].innerText = guessedLetter + " ";
      }
    }



  }


  


  // Guesses Remaining
  document.getElementById("guessRemaining").innerHTML = "You have " + guesses + " guess(es) remaining";
  if (guesses <= 0) {
    document.getElementById("guessRemaining").innerHTML  = "Game Over";
  }

  // for ( j = 0; j == currentWord; j++) {
   
    

}




