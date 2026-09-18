const SIGNS = ["rock", "paper", "scissors"];

let gameOverEl = document.querySelector('.game-over');
gameOverEl.style.display = 'none';

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-button');

rockBtn.addEventListener('click', () => {playGame(SIGNS[0])});
paperBtn.addEventListener('click', () => {playGame(SIGNS[1])});
scissorsBtn.addEventListener('click', () => {playGame(SIGNS[2])});
resetBtn.addEventListener('click', resetGame);
let roundButtons = [rockBtn, paperBtn, scissorsBtn];

let humanChoiceEl = document.querySelector('.human-choice');
let humanScoreEl = document.querySelector('.human-score');
let computerChoiceEl = document.querySelector('.computer-choice');
let computerScoreEl = document.querySelector('.computer-score');
let winnerEl = document.querySelector('.winner');

let bodyEl = document.querySelector('body');


function resetGame() {
  // TODO
}

function playGame(humanChoice) {

  console.log(`Playing Round. Human chose {humanChoice}`);
  
  let computerChoice = getComputerChoice();
  computerChoiceEl.textContent = computerChoice;
  console.log("Computer chose", computerChoice);
  
  humanChoiceEl.textContent = humanChoice;
  console.log("Human chose", humanChoice);

  let hasWon = hasHumanWon(computerChoice, humanChoice);

  let winner;
  
  if (hasWon === null) {
    winner = "Nobody"
  } else if (hasWon) {
    winner = "The Human";
    humanScore++;
  } else {
    winner = "The Computer";
    computerScore++;
  }

  console.log(winner, "wins this round.");
  winnerEl.textContent = winner;
  
  console.log("Computer:", computerScore);
  computerScoreEl.textContent = computerScore;

  console.log("Human:", humanScore);
  humanScoreEl.textContent = humanScore;

  if (humanScore === 5 || computerScore === 5) {
    roundButtons.map((b) => {b.style.display = 'none'})


    
  }


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
