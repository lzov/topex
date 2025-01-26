console.log("Hello, world");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // Genera un número entre 0 y 2
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Bad number?:", choice);
    }
}

function getHumanChoice() {
    let userChoice = "";

    // Mientras la elección no sea válida, sigue preguntando
    while (!["rock", "paper", "scissors"].includes(userChoice)) {
        let userInput = prompt("What's your choice?\nRock, Paper, or Scissors:");
        userChoice = userInput.toLowerCase(); // Normaliza a minúsculas
    }

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("It's a tie");
                break;
            case "paper":
                console.log("You lost!");
                computerScore += 1;
                break;
            case "scissors":
                console.log("You won!");
                humanScore += 1;
                break;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You won!");
                humanScore += 1;
                break;
            case "paper":
                console.log("It's a tie");
                break;
            case "scissors":
                console.log("You lost!");
                computerScore += 1;
                break;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lost!");
                computerScore += 1;
                break;
            case "paper":
                console.log("You won!");
                humanScore += 1;
                break;
            case "scissors":
                console.log("It's a tie!");
                break;
        }
    }
}

let count = 0;

while (count < 5) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);

    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);

    count += 1;
}

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("You lost the game!");
} else {
    console.log("It's a tie!");
}