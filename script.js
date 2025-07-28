let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let cislo = Math.floor(Math.random()*3);
    if (cislo == 0) {
        return "rock";
    } else if (cislo == 1){
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice(){
    return prompt("Rock, paper or scissors?").toLowerCase();
};

function playRound(compChoice, humanChoice){
    if (compChoice == humanChoice){
        console.log("It is a tie.");   
    } else if (compChoice == "rock" && humanChoice == "paper"){
        console.log("Paper beats rock. You win.");
        humanScore++;
    } else if (compChoice == "paper" && humanChoice == "scissors"){
        console.log("Scissors beat paper. You win.");
        humanScore++;
    } else if (compChoice == "scissors" && humanChoice == "rock"){
        console.log("Rock beats scissors. You win.");
        humanScore++;
    } else if (compChoice == "paper" && humanChoice == "rock"){
        console.log("Paper beats rock. You lose.");
        computerScore++;
    } else if (compChoice == "scissors" && humanChoice == "paper"){
        console.log("Scissors beat paper. You lose.");
        computerScore++;
    } else if (compChoice == "rock" && humanChoice == "scissors"){
        console.log("Rock beats scissors. You lose.");
        computerScore++;
    }
};

function playGame(){
    console.log("start");
    for (let i = 0; i <= 4; i++){
        const compChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(compChoice, humanChoice);
    }
    console.log(`Your score is ${humanScore} and computer score is ${computerScore}`)
};

playGame();