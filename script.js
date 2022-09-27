const options=["bear", "hunter", "ninja"]

const score = document.getElementById("counter")
const bear = document.getElementById("bear")
const ninja = document.getElementById("ninja")
const hunter = document.getElementById("hunter")
const compImg = document.getElementById("computerCross")
const userImg = document.getElementById("playerCross")
const roundCount = document.getElementById("round")
const lastWinner = document.getElementById("lastWin")

let round = 0
let currentChoice = "none"
let userChoice = "none"
let winner = ""

function generateOption() {
  let choice = Math.random()*100
    if (choice <= 33){
        currentChoice = options[0]
        compImg.src = "./images/bear-removebg-preview.png"
        compImg.style.height = "300px"
        compImg.style.width = "300px"
        return options[0]
     } else if (choice >= 33 && choice <= 67) {
        currentChoice = options[1]
        compImg.src = "./images/hunter-removebg-preview.png"
        compImg.style.height = "300px"
        compImg.style.width = "300px"
        return options[1]
      } else {
        currentChoice = options[2]
        compImg.src = "./images/ninja-removebg-preview.png"
        compImg.style.height = "300px"
        compImg.style.width = "300px"
        return options[2]
      }
}

let computerWins = 0
let playerWins = 0

ninja.addEventListener('click', function(){
    userChoice = "ninja"
    userImg.src = "./images/ninja-removebg-preview.png"
    userImg.style.height = "300px"
    userImg.style.width = "300px"
    game(userChoice)
})
bear.addEventListener('click', function(){
    userChoice = "bear"
    userImg.src = "./images/bear-removebg-preview.png"
    userImg.style.height = "300px"
    userImg.style.width = "300px"
    game(userChoice)
})
hunter.addEventListener('click', function(){
    userChoice = "hunter"
    userImg.src = "./images/hunter-removebg-preview.png"
    userImg.style.height = "300px"
    userImg.style.width = "300px"
    game(userChoice)
})

function check(){
    if (playerWins === 5){
    computerWins = 0
    playerWins = 0
    round = 0
    alert("You win")
    return
} else if (computerWins === 5){
    computerWins = 0
    playerWins = 0
    round = 0
    alert("You lose")
    return
} else{
    return
}}


function game(str){
    let playerOption = str.toLowerCase();
    let comp = generateOption();
    if (comp === playerOption){
        winner = "Draw"
        round++
        score.textContent = `Computer ${computerWins} - ${playerWins} User`
        roundCount.textContent = `Round - ${round}`
        lastWinner.textContent = `Last round won by - ${winner}`
        return check()
    } else if (comp === "ninja" && playerOption === "hunter"){
        computerWins++
        console.log("computer wins")
        round++
        score.textContent = `Computer ${computerWins} - ${playerWins} User`
        roundCount.textContent = `Round - ${round}`
        lastWinner.textContent = `Last round won by - ${winner}`
        return check()
    } else if (comp === "hunter" && playerOption === "bear"){
        computerWins++
        winner = "Computer"
        round++
        score.textContent = `Computer ${computerWins} - ${playerWins} User`
        roundCount.textContent = `Round - ${round}`
        lastWinner.textContent = `Last round won by - ${winner}`
        return check()
    } else if (comp === "bear" && playerOption === "ninja"){
        computerWins++
        winner = "Computer"
        round++
        score.textContent = `Computer ${computerWins} - ${playerWins} User`
        roundCount.textContent = `Round - ${round}`
        lastWinner.textContent = `Last round won by - ${winner}`
        return check()
    } else 
        playerWins++
        winner = "Player"
        round++
        score.textContent = `Computer ${computerWins} - ${playerWins} Player`
        roundCount.textContent = `Round - ${round}`
        lastWinner.textContent = `Last round won by - ${winner}`
        return check()

}
