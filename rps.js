console.log("testing")


function getRandomChoice() {
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



function playRound (playerSelection, computerSelection) {
    var computerSelection = getRandomChoice()  // this feeds the computers choice (getRandomChoice) function into the playRound function//
    var playerSelection = prompt("rock, paper, scissors"); //this stores your answer in the prompt as the player selection//

    if (playerSelection === "rock" && computerSelection === "scissors" //conditions for each possible outcome, including a tie game//
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper"){
        return "you win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" 
    || playerSelection=== "rock" && computerSelection === "paper" 
    || playerSelection === " paper" && computerSelection === "scissors") {
        return "you lose!"; 
    } else {
        return "it's a tie!";
    }
}

//next I need to creat a function called playRound that takes two parameters, playerSelection (PS) and computerSelection (CS) //
//I will start with the prompt portion of the function that will ask the player to pick 'rock, paper, or scissors'. 
    //The prompt will ask the question and store the answer in the playerSelection box//
    //create a variable called computer selection that will feed the getRandomChoice return into the playRound function//
    