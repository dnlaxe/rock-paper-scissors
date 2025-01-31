
let humanScore = 0;
let computerScore = 0;
let numberOfGames = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    else return "scissors"
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rock, paper, scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        else alert("Invalid choice!");
    }
}

function playRound(humanChoice, computerChoice) {
    numberOfGames ++;
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}.`)
    if (humanChoice === computerChoice) {return "It's a draw!"};
    if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!"
    }
  }

  function playGame() {
    while (numberOfGames < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        alert(playRound(humanSelection, computerSelection));
        alert(`Computer: ${computerScore}\nYou: ${humanScore}`)
    }
    if (humanScore === computerScore) {alert(`Final score: ${computerScore}: ${humanScore}\nA bore draw.`)};
    if (humanScore > computerScore) {alert(`Final score: ${humanScore}: ${computerScore}\nYou are victorious!`)};
    if (humanScore < computerScore) {alert(`Final score: ${computerScore}: ${humanScore}\nAI wins and you lose.`)};
  }
  
  playGame();