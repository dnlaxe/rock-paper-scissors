const blurb = document.createElement('span');
const result = document.querySelector('.result');

let humanScore = 0;
let computerScore = 0;
let numberOfGames = 0;

function getHumanChoice() {
    while (true) {
        let choice = prompt("Rock, paper, scissors?").toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }
        else alert("Invalid choice!");
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock";
    if (randomNumber === 1) return "paper";
    else return "scissors"
}

  function playGame(humanChoice) {

        const humanSelection = humanChoice;
        const computerSelection = getComputerChoice();
        
        alert(playRound(humanSelection, computerSelection));
        alert(`Computer: ${computerScore}\nYou: ${humanScore}`)

    if (humanScore === computerScore) {alert(`Final score: ${computerScore}: ${humanScore}\nA bore draw.`)};
    if (humanScore > computerScore) {alert(`Final score: ${humanScore}: ${computerScore}\nYou are victorious!`)};
    if (humanScore < computerScore) {alert(`Final score: ${computerScore}: ${humanScore}\nAI wins and you lose.`)};

    blurb.textContent = 'TADAAAA!';
    result.appendChild(blurb);

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
