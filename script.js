document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  const buttons = document.querySelectorAll('.buttons button');
  const humanChoice = document.querySelector('.human .choice');
  const computerChoice = document.querySelector('.computer .choice');
  const message = document.querySelector('.message');
  const humanScore = document.querySelector('.human-score');
  const computerScore = document.querySelector('.computer-score');
  const newGameButton = document.querySelector('.reset');

  buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
      message.textContent = '';
      computerChoice.textContent = '';
      getHumanChoice(e);
    });
  });

  newGameButton.addEventListener('click', resetGame);

  function getHumanChoice(event) {
    const selectionDataAttr = event.currentTarget.dataset.choice;
    humanChoice.textContent = selectionDataAttr;

    setTimeout(() => {
      getComputerChoice(selectionDataAttr);
    }, 1000);
  }

  function getComputerChoice(humanChoice) {
    const randNum = Math.floor(Math.random() * 3);
    computerChoice.textContent = choices[randNum];

    playRound(humanChoice, choices[randNum]);
  }

  let humanScoreCount = 0;
  let computerScoreCount = 0;

  function playRound(human, computer) {
    switch (true) {
      case human == computer:
        message.textContent = 'Draw!';
        break;
      case human == 'rock' && computer == 'paper':
      case human == 'paper' && computer == 'scissors':
      case human == 'scissors' && computer == 'rock':
        message.textContent = 'You Lose!';
        computerScoreCount++;
        computerScore.textContent = computerScoreCount;
        break;
      case human == 'rock' && computer == 'scissors':
      case human == 'paper' && computer == 'rock':
      case human == 'scissors' && computer == 'paper':
        message.textContent = 'You Win!';
        humanScoreCount++;
        humanScore.textContent = humanScoreCount;
        break;
    }
    checkResults();
  }

  function checkResults() {
    if (humanScoreCount == 5) {
      message.textContent = 'You won the game!';
      newGameButton.style.display = 'block';
      disableButtons();
    }
    if (computerScoreCount == 5) {
      message.textContent = 'You lost the game!';
      newGameButton.style.display = 'block';
      disableButtons();
    }
  }

  function resetGame() {
    humanScoreCount = 0;
    computerScoreCount = 0;
    humanScore.textContent = humanScoreCount;
    computerScore.textContent = humanScoreCount;
    newGameButton.style.display = 'none';
    message.textContent = '';
    enableButtons();
  }

  function disableButtons() {
    buttons.forEach((button) => {
      button.disabled = 'disabled';
    });
  }
  function enableButtons() {
    buttons.forEach((button) => {
      button.disabled = '';
    });
  }
});
