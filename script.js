let humanScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getHumanChoice() {
  let choice;
  while (true) {
    choice = prompt('Rock, Paper, or Scissors').toLowerCase();
    if (choices.includes(choice)) {
      return choice;
    }
    console.log('Not a vaild entry, please try again');
  }
}

function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  switch (true) {
    case humanChoice == computerChoice:
      console.log('draw');
      break;
    case humanChoice == 'rock' && computerChoice == 'paper':
    case humanChoice == 'paper' && computerChoice == 'scissors':
    case humanChoice == 'scissors' && computerChoice == 'rock':
      console.log('computer wins!');
      computerScore++;

      break;
    case humanChoice == 'rock' && computerChoice == 'scissors':
    case humanChoice == 'paper' && computerChoice == 'rock':
    case humanChoice == 'scissors' && computerChoice == 'paper':
      console.log('you win!');
      humanScore++;
      break;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Score: Computer = ${computerScore}, You = ${humanScore}`);
  if (humanScore > computerScore) {
    console.log('You won the game!');
  }
  if (humanScore < computerScore) {
    console.log('You lost the game!');
  }
  if (humanScore == computerScore) {
    console.log("It's a draw!");
  }
}
