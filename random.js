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




  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var word = getRandomWord();
  var lettersInChosenWord = [];
  var numBlanks = 0;
  var blanksAndSuccesses = []
  var wrongGuesses = [];
  var guesses = 12;


  playGame(word);
  console.log(word)

  // Replaces current word with spaces 

  // Accepts users letter guesses
 
  // Guesses Remaining


var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]


function getRandomWord() {
  // Computer selects a ranom word
  var randomWord = Math.floor(Math.random() * words.length)
  
  var selectedWord = words[randomWord]
  return selectedWord
}

function playGame(word) {
  guesses = 12

  lettersInChosenWord = word.split('')

  var wordLength = word.length

  numBlanks = lettersInChosenWord.length

  console.log(word)

  blanksAndSuccesses = []
  wrongGuesses = []

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_")
  }

  document.getElementById(guessRemaining).innerHTML = "You have " + guesses + " guess(es) remaining";

  document.getElementById("spaces").innerHTML = blanksAndSuccesses.join(' ')

  document.getElementById('guessed-letters').innerHTML = wrongGuesses.join(" ")
  
}

function checkLetters(letter) {
  var letterInWord = false;

  for (let index = 0; index < numBlanks; index++) {
    if (word[i] === letter ) {
      letterInWord = true
    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if(word[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
    console.log(blanksAndSuccesses)
  }
  else {
    wrongGuesses.push(letter)
    guesses--;
  }
}

function roundComplete() {
  // log status up in the console, telling us how many wins, losses and guesses are left.

  // update html to reflect number of guesses and update the correct guesses

  // print the array of guesses and blanks onto the page

  // pring the wrong guesses onto the page

  // if all letters match the solution,
  // add to win counter and give the user an alert.

  // update win counter and call play()

  // else update loss counter give alter update in html and call play()
}
  //  take the event letter, compare against word.
  // if not found, push to .letters
  
  // if found push to word array and rerender?
  // ['_', '_', '_'], ['c','_','_'] .join(' ')
  
  // assign new guess to word.

  // guesses--
  play();

  // if guesses <= 0 set win state to loss
document.onkeyup = function (event) {
  var guessedLetter = event.key.toLowerCase();
  checkLetters(guessedLetter)
  console.log(guessedLetter);
  roundComplete();
}
