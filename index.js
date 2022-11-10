var randomNumberOne = Number(Math.ceil(Math.random() * 6));
var randomNumberTwo = Number(Math.ceil(Math.random() * 6));
var img = document.querySelectorAll("img");

var switchImageOne = img[0].setAttribute(
  "src",
  "images/dice" + randomNumberOne + ".png"
);
var switchImageTwo = img[1].setAttribute(
  "src",
  "images/dice" + randomNumberTwo + ".png"
);

if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").innerText = "Player 1 Wins!👑";
} else if (randomNumberOne < randomNumberTwo) {
  document.querySelector("h1").innerText = "Player 2 Wins!👑";
} else {
  document.querySelector("h1").innerText = "It's a draw! Try again!🔄";
}
