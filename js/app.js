const gameItem = document.getElementById('game-items')
const userPicked = document.getElementById('user-picked')
const pcPicked = document.getElementById('pc-picked')
const pointsUser = document.getElementById('points-user')
const pointsPc = document.getElementById('points-pc')
const pickedUserImage = document.getElementById('picked-user-image')
const pickedPcImage = document.getElementById('picked-pc-image')
const gameResult = document.getElementById('game-results')
const playAgain = document.getElementById('play-again')
const result = document.getElementById('result')
const btnRules = document.getElementById('button-rules')
const modal = document.getElementById('modal')

let userSelection = null
let pcSelection = null
let userPoints = 0
let pcPoints = 0
let showResults = false

const gameOptions = ['rock', 'paper', 'scissors']

const gameRules = {
    rock: {
      scissors: true,
      lizard: true,
      paper: false,
      spock: false
    },
    scissors: {
      paper: true,
      lizard: true,
      rock: false,
      spock: false
    },
    paper: {
      rock: true,
      spock: true,
      lizard: false,
      scissors: false
    },
    lizard: {
      paper: true,
      spock: true,
      scissors: false,
      rock: false
    },
    spock: {
      rock: true,
      scissors: true,
      paper: false,
      lizard: false
    }
  };
const gameImage = {
    rock: '../assets/img/icon-rock.svg',
    paper: '../assets/img/icon-paper.svg',
    scissors: '../assets/img/icon-scissors.svg',
    lizard: '../assets/img/icon-lizard.svg',
    spock: '../assets/img/icon-spock.svg'
}

if(document.body.dataset.mode === 'advanced') {
    gameOptions.push('lizard','spock')
}

gameItem.addEventListener('click', (e) => {
    if(!e.target.classList.contains('game__item') ) {
        return
    }
    setUserSelection(e.target.dataset.item)
})

playAgain.addEventListener('click', () => {
    showResults = false
    changeScreen()
}) 

btnRules.addEventListener('click', showModal )

modal.addEventListener('click', hideModal)

function setUserSelection(item) {
    /* establish the user's move */
    userSelection = item
    generateRandomNumber()
}

function  generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * gameOptions.length)
    const pcPlay = gameOptions[randomNumber]    
    pcSelection = pcPlay
    printResultsImage()
    checkWinner()
}

function printResultsImage() {
    const userOldClass = pickedUserImage.parentElement.classList[1]
    const pcOldClass = pickedPcImage.parentElement.classList[1]

    pickedUserImage.src = gameImage[userSelection]
    pickedPcImage.src = gameImage[pcSelection]
    
    if(userOldClass && pcOldClass) {
        pickedUserImage.parentElement.classList.replace(userOldClass,`game__item--${userSelection}`)
        pickedPcImage.parentElement.classList.replace(pcOldClass,`game__item--${pcSelection}`)
    } else {
        pickedUserImage.parentElement.classList.add(`game__item--${userSelection}`)
        pickedPcImage.parentElement.classList.add(`game__item--${pcSelection}`)
    }
    showResults = true
    changeScreen()
}

function checkWinner() {
    /* In case of a tie */
    if(userSelection === pcSelection) {
        result.textContent = 'Tie'
        return
    }

    if(gameRules[userSelection][pcSelection]) {
        result.textContent = 'You Win'
        userPoints++
    } else {
        result.textContent = 'You Lose'
        pcPoints++
    }

    updateScore()
}
function updateScore() {
    pointsUser.textContent = userPoints
    pointsPc.textContent = pcPoints
}

function changeScreen() {
    if(showResults) {
        gameResult.classList.remove('hide')
        gameItem.classList.add('hide')
        btnRules.classList.add('hide')
    } else {
        gameResult.classList.add('hide')
        gameItem.classList.remove('hide')
        btnRules.classList.remove('hide')
    }
}
function showModal() {
    modal.classList.add('modal--show')
}
function hideModal() {
    modal.classList.remove('modal--show')
}