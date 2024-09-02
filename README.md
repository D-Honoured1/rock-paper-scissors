#Rock Paper Scissors JS script

Get computer choice
Choice should be random

Get Human Choice
Use Prompt to get it
Choice should return choice

Declare global variable for record

Create Function to play a round
Add conditions for winning
Add conditions for Losing
Add function to increase score after round

I need to figure out why these codes didn't work

/*function computerPlay() {
  const choice = ["rock", "paper", "scissors"];
  const random = choice[Math.floor(Math.random() * choice.length)];
  return random;
}

let playerScore = 0;
let computerScore = 0;
  
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
  }

  return playerScore;
  return computerScore;
}



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
  
  if (newGame === "yes") {
    playerScore = 0;
    computerScore = 0;
    game();
  } else {
    console.log("Ok, goodbye for now.");
  }
}


game();*/