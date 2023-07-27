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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt(
      "Round " + round + ": Enter your selection (rock, paper, or scissors):"
    );
    let computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")) {
      playerScore += 1;
    } else if (result.includes("Lose")) {
      computerScore += 1;
    }
  }

  let matchResultMessage = "It's a tie!";
  if (playerScore > computerScore) {
    matchResultMessage = "Congratulations! You win the game!";
  } else if (playerScore < computerScore) {
    matchResultMessage = "Sorry, you lose the game.";
  }

  return matchResultMessage;
}

game();
