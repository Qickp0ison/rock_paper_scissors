// SET COMPUTER TO CHOSE RANDOMLY BETWEEN > ROCK > PAPER > SCISSORS
// SET ONE ROUND MACHINE AGAINST THE PLAYER:
// IF PLAYER CHOOSES:
//  ROCK > SCISSORS = WIN
//  ROCK > PAPER = LOSES
//  ROCK > ROCK = TIES
//  SCISSORS > ROCK = LOSES
//  SCISSORS > PAPER = WINS
//  SCISSORS > SCISSORS = TIES
//  PAPER > ROCK = WINS
//  PAPER > SCISSORS = LOSES
//  PAPER > PAPER = TIES
// PLAY 5 ROUNDS
// IF PLAYER WINS MOST OF THE ROUNDS THEN PLAYER WINS MESSAGE, ELSE MACHINE WINS



// VARIABLES

let playerSelection;
let computerSelection = computerPlays();
let playerWins = 0;
let computerWins = 0;
let playerName;

// COMPUTER PLAYS RANDOMLY

function computerPlays() {
    let computerChoice = ["rock", "paper", "scissors"];
    let computerChoiceRandom = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerChoiceRandom;
}

// GETS NAME OF THE PLAYER

function getPlayerName() {
playerName = prompt("Player name?");
alert(`Welcome, ${playerName}, press the button to start the game!`)
}

// PLAYS A ROUND PLAYER VS. COMPUTER

function playRound (playerSelection, computerSelection) {
    
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins++;
        console.log("You win! Rock beats Scissors!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        console.log("You win! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        console.log("You lose! Scissors wins Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        console.log("You win! Scissors beats Paper!");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerWins++;
        console.log("You lose, Rock beats Scissors")
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
}

// GET SCORE FOR THE GAME

function getScore() {
    if (playerWins > computerWins) {
        console.log(`${playerName} wins the game!!!`)
    } else if (playerWins < computerWins) {
        console.log(`${playerName} loses the game!!!`)
    } else if (playerWins === computerWins) {
        console.log("Draw! repeat the game!")
    }
}


// STORE ALL FUNCTIONS TO MAKE IT CLEAN

function game () {
    getPlayerName();
    playRound (playerSelection, computerPlays());
    playRound (playerSelection, computerPlays());
    playRound (playerSelection, computerPlays());
    playRound (playerSelection, computerPlays());
    playRound (playerSelection, computerPlays());
    getScore();
}

// PLAYS THE GAME, BEST OF 5 ROUNDS
game();


