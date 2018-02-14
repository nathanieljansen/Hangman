// Generate a random word
// WHen the person it inputs to it needs to check if that letter is in the word or not
// Letters appear
// Number of guesses decreases
// After 12 wrong guess says you lose
// After guessing the correct word it says you win

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ["connection", "majestic", "spiky", "overt", "rigid", "end", "awake", "limit", "whimsical", "courageous"]
var randomWord = Math.floor(Math.random() * words.length)

var word = words[randomWord]
console.log(word)



var guess;

var guesses;

var lives;

var space;




