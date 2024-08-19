function getCompChoice(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerChoice() {
    let choice = prompt("What is your choice? ");
    return choice;
}



console.log(getCompChoice(3))
console.log(getPlayerChoice())