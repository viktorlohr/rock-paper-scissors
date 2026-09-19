const SIGNS = ["rock", "paper", "scissors"];

let gameOverEl = document.querySelector('.game-over');
gameOverEl.style.display = 'none';

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resetBtn = document.querySelector('.reset-button');

rockBtn.addEventListener('click', () => {playRound(SIGNS[0])});
paperBtn.addEventListener('click', () => {playRound(SIGNS[1])});
scissorsBtn.addEventListener('click', () => {playRound(SIGNS[2])});
resetBtn.addEventListener('click', resetGame);
let signBtns = [rockBtn, paperBtn, scissorsBtn];

let humanChoiceEl = document.querySelector('.human-choice');
let humanScoreEl = document.querySelector('.human-score');
let computerChoiceEl = document.querySelector('.computer-choice');
let computerScoreEl = document.querySelector('.computer-score');
let roundWinnerEl = document.querySelector('.round-winner')
let gameWinnerEl = document.querySelector('.game-winner');

let bodyEl = document.querySelector('body');


function resetGame() {
  humanScore = 0;
  computerScore = 0;
  signBtns.map((el) => {el.style.display = 'block'});
  
  [humanChoiceEl, humanScoreEl, computerChoiceEl, computerScoreEl, roundWinnerEl, gameWinnerEl].map(
    (el) => {el.textContent = ""}
  )

  
}

resetGame()

function playRound(humanChoice) {

  // console.log(`Playing Round. Human chose {humanChoice}`);
  
  let computerChoice = getComputerChoice();
  computerChoiceEl.textContent = getSignSymbol(computerChoice);
  // console.log("Computer chose", computerChoice);
  
  humanChoiceEl.textContent = getSignSymbol(humanChoice);

  let hasWon = hasHumanWon(computerChoice, humanChoice);

  let roundWinner;
  
  if (hasWon === null) {
    roundWinner = "Nobody"
  } else if (hasWon) {
    roundWinner = "You";
    humanScore++;
  } else {
    roundWinner = "Computer";
    computerScore++;
  }

  // console.log(roundWinner, "wins this round.");
  roundWinnerEl.textContent = roundWinner;
  
  // console.log("Computer:", computerScore);
  computerScoreEl.textContent = computerScore;


  humanScoreEl.textContent = humanScore;

  if (humanScore === 5 || computerScore === 5) {
    signBtns.map((b) => {b.style.display = 'none'})

    let winner;
    
    if (humanScore > computerScore) {
      winner = "You";
    } else {
      winner = "The Computer";
    }
    gameWinnerEl.textContent = winner;
    gameOverEl.style.display = 'flex';
    
  }


}

function hasHumanWon(computerChoice, humanChoice) {

  if (computerChoice == humanChoice) {
    return null;
  }
  
  result = SIGNS.indexOf(humanChoice) == (SIGNS.indexOf(computerChoice) + 1) % 3
  // console.log(result);

  return result;
  
}


function getComputerChoice() {
  random = Math.random()*3;
  // console.log(random);

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
    // console.log("Please enter a valid sign.");
    getHumanChoice();
  }

  return choice
}

function getSignSymbol(sign) {
  switch (sign) {
    case SIGNS[0]:
      return "🗿";

    case SIGNS[1]:
      return "📄";

    case SIGNS[2]:
      return "✂️";
  }
}
