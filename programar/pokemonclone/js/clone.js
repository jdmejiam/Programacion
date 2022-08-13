function startGame() {
    let petButton = document.getElementById("pet-button")
    petButton.addEventListener("click", selectPetPlayer)
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
    let randomAttack = odd(1,3)
    let spanPetOpponent = document.getElementById("pet-opponent")

    if (randomAttack == 1) {
        spanPetOpponent.innerHTML = "Hipodoge"
    } else if (randomAttack == 2) {
        spanPetOpponent.innerHTML = "Capipepo"
    } else {
        spanPetOpponent.innerHTML = "Ratigueya"
    }
}

function odd(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", startGame)