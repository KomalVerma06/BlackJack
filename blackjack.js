let player={
    name:"per",
    chips:123
}
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let result = document.getElementById("message")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": " +player.chips
function startgame() {
    isalive=true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}
function rendergame() {
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "do you want to draw a new card?"

    } else if (sum === 21) {
        message = " you've got blackjack!"
        hasblackjack = true
    } else {
        message = "you are out of the game!"
        isalive = false
    }
    result.textContent = message
    sumEl.textContent = "Sum: " + sum
 

}


function newcard() {
    if (isalive === true && hasblackjack === false) {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        rendergame()
    }
}
function getrandomcard() {
    let randomNumber = Math.floor(Math.random() * 13 + 1)
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}

