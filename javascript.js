<<<<<<< HEAD
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
=======
/*function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  const random = choice[Math.floor(Math.random() * choice.length)];
  return random;
>>>>>>> rps-ui
}

let playerScore = 0;
let computerScore = 0;
<<<<<<< HEAD

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Sorry!`
    );

    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Paper beats rock! Congrats!`
    );

    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Congrats!`
    );
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Rock beats scissors! Sorry!`
    );
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Congrats!`
    );
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. Scissors beats paper! Sorry!`
    );
    computerScore++;
  } else if (playerSelection === computerSelection) {
    console.log(
      `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`
    );
=======
  
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ("Feel honoured. We Tied");
  } else if ((computerSelection === "Rock") && (playerSelection === "Scissors")) {
    computerScore++;
    return ("Under my rock is where you belong!");
  } else if ((computerSelection === "Paper") && (playerSelection === "Rock")) {
    computerScore++;
    return ("Nothing escapes my covering of darkness!");
  } else if ((computerSelection === "Scissors") && (playerSelection === "Paper")) {
    computerScore++;
    return ("Sharper than you! LOL.");
  } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")) {
    playerScore++;
    return ("How dare you crush me!");
  } else if ((playerSelection === "Paper") && (computerSelection === "Rock")) {
    playerScore++;
    return ("You think you can cover my greatness?");
  } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) {
    playerScore++;
    return ("Ouch! that hurt!");
>>>>>>> rps-ui
  }

  return playerScore;
  return computerScore;
}

<<<<<<< HEAD
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Choose rock, paper, or scissors"
    ).toLowerCase();

    while (
      playerSelection !== "rock" &&
      playerSelection !== "paper" &&
      playerSelection !== "scissors"
    ) {
      playerSelection = prompt(
        "Choose a valid input: rock, paper, or scissors"
      ).toLowerCase();
    }

    playRound(playerSelection, computerPlay());
  }

  if (playerScore > computerScore) {
    console.log(
      `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
    );
  } else if (playerScore === computerScore) {
    console.log("This game ended in a tie. How bizzare.");
  } else {
    console.log(
      `Oh no, the computer beat you ${computerScore} out of 5 rounds...`
    );
  }

  let newGame = prompt(
    "Would you like to play again? Choose yes or no"
  ).toLowerCase();

  while (newGame !== "yes" && newGame !== "no") {
    newGame = prompt("Choose yes or no").toLowerCase();
  }

=======


function game(){
  for (let i = 0; i < 5; i++){
    
    let playerSelection = prompt("Rock, Paper or Scissors?");

    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
      playerSelection = prompt("Choose a valid option; Rock, Paper or Scissors?");
    }
    playRound(playerSelection, computerPlay());
  }

  if (playerScore > computerScore) {
    console.log(
      `Congrats! You beat the computer ${playerScore} out of 5 rounds!`
    );
  } else if (playerScore === computerScore) {
    console.log("This game ended in a tie. How bizzare.");
  } else {
    console.log(
      `Oh no, the computer beat you ${computerScore} out of 5 rounds...`
    );
  }
    
  let newGame = prompt(
    "Would you like to play again? Choose yes or no"
  ).toLowerCase();
  
  while (newGame !== "yes" && newGame !== "no") {
    newGame = prompt("Choose yes or no").toLowerCase();
  }
  
>>>>>>> rps-ui
  if (newGame === "yes") {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("Ok, goodbye for now.");
  }
}

<<<<<<< HEAD
game();
=======
game();*/

// Project: Rock Paper Scissors

// rock button
const rockBtn = document.querySelector("#rock");
rockBtn.classList.add("playButtons");

// paper button
const paperBtn = document.querySelector("#paper");
paperBtn.classList.add("playButtons");
// scissors button
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.classList.add("playButtons");

// new game button
const newGameBtn = document.querySelector("#newGame");
newGameBtn.classList.add("newGameButton");

const roundScore = document.querySelector("#roundScore");
const finalScore = document.querySelector("#finalScore");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");

// function randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
  let options = { 1: "rock", 2: "paper", 3: "scissors" };

  return options[Math.floor(Math.random() * 3) + 1];
}

// set initial values for the game
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;
let scoreToReach = 5;

// each button calls playRound when clicked
// each button can call endGame when scoreToReach = 5
rockBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("rock", computerPlay());
    endGame();
  }
});

paperBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("paper", computerPlay());
    endGame();
  }
});

scissorsBtn.addEventListener("click", function () {
  if (!isGameOver) {
    playRound("scissors", computerPlay());
    endGame();
  }
});

// restart the game by reseting score, clearing score log, and removing classes

newGameBtn.addEventListener("click", function () {
  isGameOver = false;
  playerScore = 0;
  computerScore = 0;
  roundScore.innerText = "";
  player.innerText = "0";
  computer.innerText = "0";
  finalScore.innerText = "";
  player.classList.remove("winner", "loser");
  computer.classList.remove("winner", "loser");
});

// for each round, a new li is added as a round score log
// player or computer score increments
// player and computer score displays each round
function playRound(playerSelection, computerSelection) {
  const newLi = document.createElement("li");
  newLi.classList.add("newLi");
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You lost.`;
    roundScore.appendChild(newLi);
    computerScore++;
    computer.innerText = computerScore;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. You win!`;
    roundScore.appendChild(newLi);
    playerScore++;
    player.innerText = playerScore;
  } else if (playerSelection === computerSelection) {
    newLi.innerText = `You chose ${playerSelection} and the computer chose ${computerSelection}. That's a tie!`;
    roundScore.appendChild(newLi);
  }
}

// winner and loser delcared when player or computer score equals scoreToReach
// styles added for winner and loser
function endGame() {
  if (playerScore === scoreToReach || computerScore === scoreToReach) {
    isGameOver = true;
    if (playerScore === scoreToReach) {
      finalScore.innerText = "You won the game! Yay!";
      player.classList.add("winner");
      computer.classList.add("loser");
    } else if (computerScore === scoreToReach) {
      finalScore.innerText = "You lost the game. Maybe next time.";
      computer.classList.add("winner");
      player.classList.add("loser");
    }
  }
}
>>>>>>> rps-ui
