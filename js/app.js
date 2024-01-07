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
