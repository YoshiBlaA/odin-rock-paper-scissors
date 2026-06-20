
/**
 * Capitalize the first character of a string.
 * @param {string} string - Input string to capitalize.
 * @returns {string} The input string with its first character converted to upper case.
 */
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Select a random choice for the computer: "rock", "paper", or "scissors".
 * @returns {"rock"|"paper"|"scissors"} The computer's choice.
 */
function getComputerChoice(){
    const choice = Math.floor((Math.random() * 3) + 1);
    return choice == 1 ? "rock" : choice == 2 ? "paper" : "scissors";
}

/**
 * Prompt the human player for a choice and normalize it to lower case.
 * Note: This uses browser prompt and will return null if the user cancels.
 * @returns {string|null} The player's choice in lower case (e.g. "rock") or null if cancelled.
 */
function getHumanChoice(){
    const choice = prompt("Type \'rock\' \'paper\' or \'scissors\' to begin!")
    return choice.toLowerCase();
}

/**
 * Play a single round of rock-paper-scissors and log the result.
 * The function compares the humanChoice against the computerChoice and
 * prints a message describing the outcome.
 * @param {string} humanChoice - Human choice (expected: "rock", "paper", "scissors").
 * @param {string} computerChoice - Computer choice (expected: "rock", "paper", "scissors").
 * @returns {"win"|"lose"|"tie"} - The outcome from the human player's perspective.
 */
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

/**
 * Play a best-of-5 game (5 rounds) between the human and the computer.
 * Each round prompts the user, gets the computer choice, updates scores,
 * and logs round-by-round and final results. Note: scores persist across
 * calls unless manually reset.
 * @returns {void}
 */
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