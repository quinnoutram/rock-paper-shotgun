const options=["rock", "paper", "scissors"]

function generateOption() {
  let choice = Math.random()*100
    if (choice <= 33)
        return options[1]
    else if (choice >= 33 && choice <= 67)
        return options[2]
    else 
        return options[3]
}

let computerWins = 0
let playerWins = 0

function check(){
    if (playerWins === 5){
    console.log("You saved humanity!")
    return
} else if (computerWins === 5){
    console.log("Everyone died...")
    return
} else{
    return
}}


function game(str){
    let playerOption = str.toLowerCase();
    let comp = generateOption();
    if (comp === playerOption){
        console.log("draw")
        return check()
    } else if (comp === "rock" && playerOption === "scissors"){
        computerWins++
        console.log("computer wins")
        return check()
    } else if (comp === "scissors" && playerOption === "paper"){
        computerWins++
        console.log("computer wins")
        return check()
    } else if (comp === "paper" && playerOption === "rock"){
        computerWins++
        console.log("computer wins")
        return check()
    } else 
        playerWins++
        console.log("player wins")
        return check()

}