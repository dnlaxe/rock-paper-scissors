const outcome = document.createElement('span');
const human = document.createElement('span');
const computer = document.createElement('span');

const result = document.querySelector('.result');
const humanPoints = document.querySelector('.humanScore');
const computerPoints = document.querySelector('.computerScore');

let humanScore = 0;
let computerScore = 0;
let numberOfGames = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    else return "scissors"
}

  function playGame(humanChoice) {

        const humanSelection = humanChoice;
        const computerSelection = getComputerChoice();
        
        result.textContent = playRound(humanSelection, computerSelection);
        humanPoints.textContent = `Human: ${humanScore}`;
        computerPoints.textContent = `Computer: ${computerScore}`;

        if (computerScore === 5) {alert('Game over! You lose!'); location.reload()};
        if (humanScore === 5) {alert('Game over! You win!'); location.reload()};
  }

  function playRound(humanChoice, computerChoice) {
    alert(`You chose ${humanChoice} and the computer chose ${computerChoice}.`)
    if (humanChoice === computerChoice) {return "It's a draw!"};
    if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "scissors" && computerChoice === "paper") || 
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        return 'You win!';
        
    } else {
        computerScore++;
        return 'You lose!';        
    } 
  }

  // buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let humanChoice = button.id;
    playGame(humanChoice);
  });
});
