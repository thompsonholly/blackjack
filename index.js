// Create the player object. Give it two keys, name and chips
let player = {
  name: "Barry",
  chips: 200

}

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = "";
// getting message paragraph by id
let messageEl = document.getElementById("message-el")
// getting sum paragraph by id
let sumEl = document.getElementById("sum-el")
// getting cards paragraph by id
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + " :$" + player.chips

//Creat a function, getRandomCard
function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13 ) + 1 // 1-13
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}


// creating a startGame() function to call renderGame function to differeniate start and continue game
function startGame() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  // replacing the cards in the DOM w/ "Cards: 1st and 2nd number and hit card"
  cardsEl.textContent = "Cards: "
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
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

function newCard() {
  // Only allow the player to get a new card if she is IS alive and does NOT have Blackjack

  if (isAlive === true && hasBlackJack === false) {

    let card = getRandomCard()
    sum += card
    // Push the card to the cards array
    cards.push(card)


    // sumEl.textContent = "Sum: " + sum + hitCard
    renderGame()
  }
}
