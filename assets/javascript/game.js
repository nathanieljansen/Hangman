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

  var guess ;

  var space = 10;

  var guesses = 12;

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]

  // Computer selects a ranom word
  var randomWord = Math.floor(Math.random() * words.length)

  var word = words[randomWord]
  console.log(word)

  // Accepts users letter guesses
  document.onkeyup = function (event) {
    var guesses = event.key.toLowerCase();
    console.log(guesses);
  }

  // Guesses Remaining
  comments = function () {
  guessRemaining.innerHTML = "You have " + guesses + " guesses remaining";
  if (guesses < 1) {
    guessRemaining.innerHTML = "Game Over";
    }
  }

}




