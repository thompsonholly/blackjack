let num1 = 1;
let num2 = 10;
let firstCard = num1;
let secondCard = num2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
// getting message paragraph by id
let messageEl = document.getElementById("message-el")
// getting sum paragraph by id
let sumEl = document.getElementById("sum-el")
// getting cards paragraph by id
let cardsEl = document.getElementById("cards-el")

function startGame() {
  // replacing the cards in the DOM w/ "Cards: 1st and 2nd number"
  cardsEl.textContent = "Cards: " + firstCard + secondCard
  // replacing the sum in the DOM 
  sumEl.textContent = "Sum:" + sum
  // console.log(sumEl)
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  // replacing the "Want to play a round?" in the DOM
 messageEl.textContent = message
 
}
