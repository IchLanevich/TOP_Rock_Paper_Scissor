let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
  };

  const randomChoice = Math.floor(Math.random() * 3) + 1;

  return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (
    !rules.hasOwnProperty(playerSelection) ||
    !rules.hasOwnProperty(computerSelection)
  ) {
    return "Invalid input. Please choose 'rock', 'paper', or 'scissors'.";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (rules[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
};

const buttons = document.querySelectorAll("button");
const matchResultElement = document.querySelector("#matchResult");
const resultElement = document.querySelector("#result");
const playerScoreElement = document.querySelector("#playerScore");
const computerScoreElement = document.querySelector("#computerScore");

let matchResult = "";
let isGameOver = false;

buttons.forEach((button) =>
  button.addEventListener("click", (e) => handleClick(e))
);

const handleClick = (e) => {
  const playerSelection = e.target.getAttribute("id");
  let result = playRound(playerSelection, getComputerChoice());
  resultElement.textContent = result;

  matchResultElement.textContent = "";
  
  if (result.includes("Win")) playerScore += 1;
  if (result.includes("Lose")) computerScore += 1;

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;

  if (playerScore === 5) {
    matchResult = "You Won!";
    playerScore = 0;
    computerScore = 0;
    matchResultElement.textContent = matchResult;
    return;
  } else if (computerScore === 5) {
    matchResult = "You Lose!";
    playerScore = 0;
    computerScore = 0;
    matchResultElement.textContent = matchResult;
    return;
  }
};
