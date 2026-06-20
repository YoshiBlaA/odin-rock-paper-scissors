function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice(){
    const choice = Math.floor((Math.random() * 3) + 1);
    // console.log(choice);
    // console.log(choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors");
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
}

function getHumanChoice(){
    const choice = prompt("Type \'rock\' \'paper\' or \'scissors\' to begin!")
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){

    const humanChoiceC = capitalize(humanChoice);
    const computerChoiceC = capitalize(computerChoice);

    const beatMessage = `${computerChoiceC} beats ${humanChoiceC}.`;

    const tieMessage = "It\'s a tie!";
    const winMessage = "You win!, " + `${humanChoiceC} beats ${computerChoiceC}.`;
    const loseMessage = "You lose, " + `${computerChoiceC} beats ${humanChoiceC}.`;;

    let winFlag = "tie";

    switch(humanChoiceC){
        case "Rock":
            if (computerChoice == "rock"){
                console.log(tieMessage);
            }
            else if (computerChoice == "paper"){
                console.log(loseMessage);
                winFlag = "lose";
            }
            else if (computerChoice == "scissors"){
                console.log(winMessage);
                winFlag = "win";
            }
            break;
        case "Paper":
            if (computerChoice == "rock"){
                console.log(winMessage);
                winFlag = "win";
            }
            else if (computerChoice == "paper"){
                console.log(tieMessage);
            }
            else if (computerChoice == "scissors"){
                console.log(loseMessage);
                winFlag = "lose";
            }
            break;
        case "Scissors":
            if (computerChoice == "rock"){
                console.log(loseMessage);
                winFlag = "lose";
            }
            else if (computerChoice == "paper"){
                console.log(winMessage);
                winFlag = "win";
            }
            else if (computerChoice == "scissors"){
                console.log(tieMessage);
            }
            break;
    }

    return winFlag;
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let round = playRound(humanChoice, computerChoice);
        if(round == "win"){
            humanScore += 1;
        }
        else if(round == "lose"){
            computerScore += 1;
        }

        console.log(`-----------------------------------\nHuman: ${humanScore} | Computer: ${computerScore}`);
    }

    if(computerScore > humanScore){
        // console.log(computerScore);
        console.log("Computer wins!");
    }
    else if(humanScore > computerScore){
        // console.log(humanScore);
        console.log("You win!");
    }
    else{
        console.log("It's a tie!");
    }

    return;

}

playGame();