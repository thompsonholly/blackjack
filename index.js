let num1 = 1;
let num2 = 10;
let firstCard = num1;
let secondCard = num2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

function startGame() {
  sumEl.textContent = "Sum: 14"
  console.log(sumEl)
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
 messageEl.textContent = message
 
}
