//create function getComputerChoice which randomly returns rock paper or scissors
function getComputerChoice(){
    //pick one rock, paper or scissors randomly
    //put the three choices in an array
    let choice = ['rock','paper','scissors']
    //introduce a randomizer that would choose one of the three
    var chooseRandomNum = Math.floor(Math.random() *choice.length);
    //return the choice
    return choice[chooseRandomNum]
}
//write a function that plays a round of the game
function playRound(playerSelection,computerSelection){
    //get the winner of the round and print it out
    //determine who the result of the round 
    //compare the choices to determine who won
    playerSelection = playerSelection.toLowerCase()
    let results = "test failes";
    if(playerSelection ==computerSelection){
        results = "it's a tie you both chose: " + playerSelection
        return 
    }
    if(playerSelection == 'rock' && computerSelection =='scissors'){
        results = "you won "+playerSelection +" beats " + computerSelection
        return true
    }
    if(playerSelection == 'paper' && computerSelection =='rock'){
        results = "you won "+playerSelection +" beats " + computerSelection
        return true
    }
    if(playerSelection == 'scissors' && computerSelection =='paper'){
        results = "you won "+playerSelection +" beats " + computerSelection
        return true
    }
    if(computerSelection == 'rock' && playerSelection =='scissors'){
        results = "you lost "+computerSelection +" beats " + playerSelection
        return false
    }
    if(computerSelection == 'paper' && playerSelection =='rock'){
        results = "you lost "+computerSelection +" beats " + playerSelection
        return false
    }
    if(computerSelection == 'scissors' && playerSelection =='paper'){
        results = "you lost "+computerSelection +" beats " + playerSelection
        return false
    }
    

}
let playerChoice
let computerChoice
const body = document.body
const score = document.getElementById('score')
const content = document.createElement('div');
//function that plays the game
function game(){
    //keep track of who won 
    let playerWins = 0
    let compWins = 0
var button =  document.getElementsByClassName("button")

for(var i = 0; i<button.length;i++){
    button[i].addEventListener('click',buttonClick)
}

function buttonClick(e){
    computerChoice = getComputerChoice()
    playerChoice = e.target.id
    results =  playRound(playerChoice,computerChoice)
    if(results){
        playerWins++
    }else if (results ===false){
        compWins++
    }
    console.log("computer wins: "+ compWins + ", your wins: "+playerWins)
    score.textContent ="computer wins: "+ compWins + ", your wins: "+playerWins

    if(playerWins===5){
        
        content.classList.add('content');
        content.textContent = 'Congrats you won';

        body.appendChild(content);
    }
    if(compWins===5){
        content.classList.add('content');
        content.textContent = 'THE COMPUTER WON';

        body.appendChild(content);
    }

}
    
}

game()