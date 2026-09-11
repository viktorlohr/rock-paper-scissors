const SIGNS = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function playGame() {

  while (humanScore + computerScore < 5) {
    playRound();
  }

  // cannot happen as its a best of uneven number right now.
  if (humanScore == computerScore) {
    console.log("Tie")
  }

  let winner;

  if (humanScore > computerScore) {
    winner = "Human";
  } else {
    winner = "Computer";
  }

  console.log(winner, "wins the game!")
  resetScore();
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
}

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getComputerChoice(); // DEBUG
  // let humanChoice = getHumanChoice();
  
  console.log("Computer chose", computerChoice);
  console.log("Human chose", humanChoice);

  let hasWon = hasHumanWon(computerChoice, humanChoice);

  if ( hasWon == null ) {
    console.log("Tie");
    return;
  }

  let winner;
  
  if (hasWon) {
    winner = "Human";
    humanScore++;
  } else {
    winner = "Computer";
    computerScore++;
  }

  console.log(winner, "wins this round.");
  printScore();
}

function printScore() {
  console.log("Computer:", computerScore);
  console.log("Human:", humanScore);
}

function hasHumanWon(computerChoice, humanChoice) {

  if (computerChoice == humanChoice) {
    return null;
  }
  
  result = SIGNS.indexOf(humanChoice) == (SIGNS.indexOf(computerChoice) + 1) % 3
  console.log(result);

  return result;
  
}


function getComputerChoice() {
  random = Math.random()*3;
  console.log(random);

  if (random < 1) {
    return SIGNS[0];
  } else if (random < 2) {
    return SIGNS[1];
  } else {
    return SIGNS[2];
  }
}

function getHumanChoice() {
  let choice = prompt("What's your sign?").trim().toLowerCase();

  if (!SIGNS.includes(choice)) {
    console.log("Please enter a valid sign.");
    getHumanChoice();
  }

  return choice
}
