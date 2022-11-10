let playerScore = 0;
let computerScore = 0;
let winner = '';
let noOfRounds = 0;
let roundEnd = false;


function game(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        winner = 'draw'
    }
    if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')) {
        playerScore++;
        winner = 'player'
    } else if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')) {
        computerScore++;
        winner = 'computer'
    }
}


const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorBtn = document.querySelector('#scissorBtn');
const restartBtn = document.querySelector('#restartBtn');

const playerChoiceDiv = document.querySelector('#playerChoiceDisplay');
const winnerDiv = document.querySelector('#winnerDisplay');
const compChoiceDiv = document.querySelector('#computerChoiceDisplay');


const computerChoice = function () {
    const rPS = ["ROCK", "PAPER", "SCISSORS"]
    return rPS[Math.floor(Math.random() * rPS.length)];
};


rockBtn.addEventListener('click', () => playerChoice('ROCK'));
paperBtn.addEventListener('click', () => playerChoice('PAPER'));
scissorBtn.addEventListener('click', () => playerChoice('SCISSORS'));
restartBtn.addEventListener('click', () => restartGame());


function playerChoice(player) {
    let computer = computerChoice();
    game(player, computer);
    whoWon();
    playerChoiceDiv.textContent = `${player}`;
    compChoiceDiv.textContent = `${computer}`;
    noOfRounds++;
    gameOver();
    updateScore();
    // if (noOfRounds === 5) {
    //     roundEnd = true;
}


const whoWon = () => {
    if (winner === 'draw') {
        winnerDiv.textContent = "Draw!";
        playerChoiceDiv.style.color = 'blue';
        compChoiceDiv.style.color = 'blue';
    } else if (winner === 'player') {
        winnerDiv.textContent = "YOU WIN";
        playerChoiceDiv.style.color = 'green';
        compChoiceDiv.style.color = 'red';
    } else if (winner === 'computer') {
        winnerDiv.textContent = "YOU LOSE"
        playerChoiceDiv.style.color = 'red';
        compChoiceDiv.style.color = 'green';
    };
}


const gameOver = () => {
    if (noOfRounds === 5) {
        alert('GAME OVER');
    }
}


const restartGame = () => {
    playerScore = 0;
    computerScore = 0;
    noOfRounds = 0;
    roundEnd = false;
    updateScore();
    winnerDiv.textContent = "Who will win?";
    playerChoiceDiv.textContent = 'Player Choice';
    compChoiceDiv.textContent = 'Computer Choice';
    playerChoiceDiv.style.color = 'black';
    compChoiceDiv.style.color = 'black';
}


const playerScoreSpan = document.querySelector('#playerScore');
const compScoreSpan = document.querySelector('#computerScore');
const updateScore = () => {
    playerScoreSpan.textContent = playerScore;
    compScoreSpan.textContent = computerScore;
}







