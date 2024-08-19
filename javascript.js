function getCompChoice(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerChoice() {
    let choice = prompt("What is your choice?");
    return choice;
}

const compSelection = getCompChoice();
const playerSelection = getPlayerChoice();

