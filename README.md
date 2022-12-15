# rock-paper-scissors
Rock paper scissors assignment on TOP


//create a function called getComputerChoice that chooses between three parameters, "rock", "paper", "scissors". 

1: create variables for each parameter
2: create a variable that the computer's choice will be stored in
3: assign each choice to a number, "rock = 1, paper = 2, scissors = 3"

function getChoice() {
    let randomChoice = Math.floor(Math.random() * 3);   //decided to use an if else statement to practice that skill as well.//

    if (randomChoice == 0) {                           // if computer chooses 0, then return rock, if 1, paper, if neither, return scissors. This still works because the only other option is 2.//
        return "rock";
    } else if (randomChoice == 1) {
        return "paper"
    } else { 
        return "scissors"
    }

    
