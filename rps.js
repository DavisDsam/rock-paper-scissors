console.log("testing")

function getOpponentChoice() {
    let randomNum = Math.floor(Math.random() * 3); //this calculates the computer's choice and stores it in the randomNum value//
    switch (randomNum) {    //switch statement assigning each option (rock, paper, or scissors) to a number between one and three. 
        case 0: 
        return "rock";
        break;
        case 1: 
        return "paper";
        break;
        case 2: 
        return "scissors";
        break;
        default:
        return"something went wrong"; //switch statements will always need a default to fall back on incase any of the conditions are not met
        
    }

}

let computerSelection 

//next I need to creat a function called playRound that takes two parameters, playerSelection and computerSelection//
//I will start with the prompt portion of the function that will ask the player to pick 'rock, paper, or scissors'. 
    //The prompt will ask the question and store the answer in the playerSelection box//