// Generate a random word
// WHen the person it inputs to it needs to check if that letter is in the word or not
// Letters appear
// Number of guesses decreases
// After 12 wrong guess says you lose
// After guessing the correct word it says you win

window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]

  // Computer selects a ranom word
  var randomWord = Math.floor(Math.random() * words.length)

  var word = words[randomWord]
  console.log(word)


  var guess;

  var space = 10;

  var lives = 12;

  var showLives = document.getElementById("guessRemaining");

document.onkeyup = function(event) {
  var guesses = event.key;
  console.log(guesses);
}


}




