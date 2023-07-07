function getComputerChoice() {
    let min = Math.ceil(0);//0
    let max = Math.floor(3);//3
    return Math.floor(Math.random() * (max-min)+min);
}

/*
function getUserChoiceRandom() {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    return Math.floor(Math.random() * (max-min)+min);
}
*/
/*
function playerSelectionRandom(playerChoice, computerChoice){
    let rps;
    if(playerChoice == 0){
        rps = "scissors";
    } else if (playerChoice == 1){
        rps = "paper";
    } else {
        rps = "rock";
    }
    //let temp = playerChoice;
    //playerChoice = playerChoice.toLowerCase();
    let playerChoiceNum = playerChoice;
    
    
    if(playerChoice == "rock"){
        playerChoiceNum = 2;// 2 == rock
    } else if(playerChoice == "paper"){
        playerChoiceNum = 1;// 1 == paper
    }
    
    
    if(computerChoice == 0 && playerChoiceNum == 2){//rock beats scissors (user wins)
        return ("You win! Rock beats Scissors!");
    } else if (computerChoice == 2 && playerChoiceNum == 0){//rock beats scissors (computer wins)
        return ("You lose! Rock beats Scissors!");
    }

    if(computerChoice == 1 && playerChoiceNum == 2){//paper beats rock(computer wins)
        return ("You lose! Paper beats Rock!");
    } else if (computerChoice == 2 && playerChoiceNum == 1){//paper beats to rock (user wins)
        return ("You win! Paper beats Rock!");
    }
    
    if(computerChoice == 0 && playerChoiceNum == 1){//scissors beats paper (computer wins)
        return ("You lose! Scissors beats Paper!");
    } else if (computerChoice == 1 && playerChoiceNum == 0){//scissors beats paper (user wins)
        return ("You win! Scissors beats Paper!");
    }

    if(computerChoice == playerChoiceNum){
        return ("Tie! Both went " + rps);
    }
}
*/
// non random selection

function playerSelection(playerChoice, computerChoice){
    let temp = playerChoice;
    playerChoice = playerChoice.toLowerCase();
    let playerChoiceNum = 0;
    
    if(playerChoice == "rock"){
        playerChoiceNum = 2;// 2 == rock
    } else if(playerChoice == "paper"){
        playerChoiceNum = 1;// 1 == paper
    } else if(playerChoice == "scissors"){
        playerChoiceNum = 0;
    } else {
        return ("invalid input");
    }
    
    
    if(computerChoice == 0 && playerChoiceNum == 2){//rock beats scissors (user wins)
        return ("You win! Rock beats Scissors!");
    } else if (computerChoice == 2 && playerChoiceNum == 0){//rock beats scissors (computer wins)
        return ("You lose! Rock beats Scissors!");
    }

    if(computerChoice == 1 && playerChoiceNum == 2){//paper beats rock(computer wins)
        return ("You lose! Paper beats Rock!");
    } else if (computerChoice == 2 && playerChoiceNum == 1){//paper beats to rock (user wins)
        return ("You win! Paper beats Rock!");
    }
    
    if(computerChoice == 0 && playerChoiceNum == 1){//scissors beats paper (computer wins)
        return ("You lose! Scissors beats Paper!");
    } else if (computerChoice == 1 && playerChoiceNum == 0){//scissors beats paper (user wins)
        return ("You win! Scissors beats Paper!");
    }

    if(computerChoice == playerChoiceNum){
        return ("Tie! Both went " + playerChoice);
    }
}

/*
function printMatchRandom(player, computer){
    let rps1;
    if(player == 0){
        rps1 = "scissors";
    } else if (player == 1){
        rps1 = "paper";
    } else {
        rps1 = "rock";
    }

    let rps2;
    if(computer == 0){
        rps2 = "scissors";
    } else if (computer == 1){
        rps2 = "paper";
    } else {
        rps2 = "rock";
    }

    return (rps1 + "(YOU) vs. " + rps2 + "(PC)");
}
*/
//non random match print
function printMatch(player, computer){
    let rps2;
    if(computer == 0){
        rps2 = "scissors";
    } else if (computer == 1){
        rps2 = "paper";
    } else {
        rps2 = "rock";
    }

    return (player + "(YOU) vs. " + rps2 + "(PC)");
}
// 0 == scissors, 1 == paper, 2 == rock    
/*
function gameRoundsRandom(rounds){
    while(rounds > 0){
        let compChoice = getComputerChoice();
        let userChoice = getUserChoiceRandom();
        console.log(printMatchRandom(userChoice, compChoice));
        console.log(playerSelectionRandom(userChoice, compChoice));
        --rounds;
    }
}
*/
let numRounds;
let validOrNot = false;

while(validOrNot == false){
    numRounds = prompt("How many rounds would you like to play?");
    console.log(typeof numRounds);
    if(numRounds >= 0){
        validOrNot = true;
    } else {
        alert("please enter a valid positive integer input.");
    }
}

//gameRoundsRandom(numRounds);

function gameRounds(rounds){
    while(rounds > 0){
        let compChoice = getComputerChoice();
        let userChoice = prompt("enter a choice : rock, paper, or scissors");
        console.log(printMatch(userChoice, compChoice));
        console.log(playerSelection(userChoice, compChoice));
        --rounds;
    }
}

gameRounds(numRounds);


