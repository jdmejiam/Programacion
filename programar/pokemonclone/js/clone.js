let playerAttack
let opponentAttack
let playerLives = 3
let opponentLives = 3

function startGame() {
    let petButton = document.getElementById("pet-button")
    petButton.addEventListener("click", selectPetPlayer)

    let fireButton = document.getElementById("fire-button")
    fireButton.addEventListener("click", fireAttack)
    let waterButton = document.getElementById("water-button")
    waterButton.addEventListener("click", waterAttack)
    let plantButton = document.getElementById("plant-button")
    plantButton.addEventListener("click", plantAttack)
}

function selectPetPlayer() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanPetPlayer = document.getElementById("pet-player")
    
    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = "Ratigueya"
    } else {
        alert("You haven't selected anything")
    }

    selectPetOpponent()
}

function selectPetOpponent() {
    let randomPet = odd(1,3)
    let spanPetOpponent = document.getElementById("pet-opponent")

    if (randomPet == 1) {
        spanPetOpponent.innerHTML = "Hipodoge"
    } else if (randomPet == 2) {
        spanPetOpponent.innerHTML = "Capipepo"
    } else {
        spanPetOpponent.innerHTML = "Ratigueya"
    }
}

function fireAttack() {
    playerAttack = "FIRE"
    randomOpponentAttack()
}
function waterAttack() {
    playerAttack = "WATER"
    randomOpponentAttack()
}
function plantAttack() {
    playerAttack = "PLANT"
    randomOpponentAttack()
}

function randomOpponentAttack() {
    let randomAttack = odd(1,3)
    
    if (randomAttack == 1) {
        opponentAttack = "FIRE"
    } else if (randomAttack == 2) {
        opponentAttack = "WATER"
    } else {
        opponentAttack = "PLANT"
    }

    combat()
}

function combat() {
    let spanPlayerLives = document.getElementById("player-lives")
    let spanOpponentLives = document.getElementById("opponent-lives")
    
    if (opponentAttack == playerAttack) {
        createMessage("DRAW")
        } else if (playerAttack == "FIRE" && opponentAttack == "PLANT") {
        createMessage("YOU WIN")
        opponentLives--
        spanOpponentLives.innerHTML = opponentLives
        } else if (playerAttack == "WATER" && opponentAttack == "FIRE") {
        createMessage("YOU WIN")
        opponentLives--
        spanOpponentLives.innerHTML = opponentLives
        } else if (playerAttack == "PLANT" && opponentAttack == "WATER") {
        createMessage("YOU WIN")
        opponentLives--
        spanOpponentLives.innerHTML = opponentLives
        } else {
        createMessage("YOU LOSE")
        playerLives--
        spanPlayerLives.innerHTML = playerLives
        }

        checkLives()
}

function checkLives() {
    if (opponentLives == 0) {
        createFinalMessage("CONGRATULATIONS, YOU WIN")
    } else if (playerLives == 0) {
        createFinalMessage("YOU LOSE")
    }
}

function createMessage(result) {
    let messageSection = document.getElementById("messages")
    
    let paragraph = document.createElement("p")
    paragraph.innerHTML = "Your pet attacked with " + playerAttack + " your opponent's pet attacked with " + opponentAttack  + " - " + result

    messageSection.appendChild(paragraph)
}

function createFinalMessage(finalResult) {
    let messageSection = document.getElementById("messages")

    let paragraph = document.createElement("p")
    paragraph.innerHTML = finalResult

    messageSection.appendChild(paragraph)
}

function odd(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)