function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

let userScore = 0;
let compScore = 0;
let roundNum = 0;
function playerSelectionRandom(playerChoice, computerChoice){
    let rps;
    if(playerChoice == 0){
        rps = "scissors";
    } else if (playerChoice == 1){
        rps = "paper";
    } else {
        rps = "rock";
    }
    
    if(computerChoice == 0 && playerChoice == 2){//rock beats scissors (user wins)
        userScore += 1;
        if(userScore == 5){
            return ("Rock beats Scissors! You win!");
        } 
        return ("You win! Rock beats Scissors!");
    } else if (computerChoice == 2 && playerChoice == 0){//rock beats scissors (computer wins)
        compScore += 1;
        if(compScore == 5){
            return ("Rock beats Scissors! Computer wins!");
        }
        return ("You lose! Rock beats Scissors!");
    }

    if(computerChoice == 1 && playerChoice == 2){//paper beats rock(computer wins)
        compScore += 1;
        if(compScore == 5){
            return ("Paper beats Rock! Computer wins!");
        }
        return ("You lose! Paper beats Rock!");
    } else if (computerChoice == 2 && playerChoice == 1){//paper beats rock (user wins)
        userScore += 1;
        if(userScore == 5){
            return ("Paper beats Rock! You win!");
        }
        return ("You win! Paper beats Rock!");
    }
    
    if(computerChoice == 0 && playerChoice == 1){//scissors beats paper (computer wins)
        compScore += 1;
        if(compScore == 5){
            return ("Scissors beats Paper! Computer wins!");
        }
        return ("You lose! Scissors beats Paper!");
    } else if (computerChoice == 1 && playerChoice == 0){//scissors beats paper (user wins)
        userScore += 1;
        if(userScore == 5){
            return ("Scissors beats Paper! You win!");
        }
        return ("You win! Scissors beats Paper!");
    }

    if(computerChoice == playerChoice){
        return ("Tie! Both went " + rps + ".");
    }
}

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

// reload function
function reloadPage (){
    window.location.reload();
}
//

// play again button
const playImg = document.createElement("img");
playImg.src = "images/play.jpg";
const div3 = document.querySelector(".div3");
const playButton = document.createElement("button");
playButton.classList.add("play");
playButton.appendChild(playImg);


function playAgain(){
    div3.appendChild(playButton);
}
//

// display function
const div2 = document.querySelector(".div2");
function display (string){
    const displayResult = document.createElement("p");
    displayResult.textContent = string;
    displayResult.classList.add("displayMsg");
    div2.appendChild(displayResult);
}
display("current round: 0 | score: 0:0");

// player selections
function selectRock(){
    ++roundNum;
    const divs = document.querySelectorAll(".displayMsg");
    divs.forEach(div => div.remove());
    let compChoice = getComputerChoice();
    roundResults = playerSelectionRandom(2, compChoice);
    display("current round: " + roundNum + " | score: " + userScore + ":" + compScore);
    display(printMatchRandom(2, compChoice));
    display(roundResults);
    if(userScore == 5 || compScore == 5){
        disableButton();
        playAgain();
    }
}

function selectPaper(){
    ++roundNum;
    const divs = document.querySelectorAll(".displayMsg");
    divs.forEach(div => div.remove());
    let compChoice = getComputerChoice();
    roundResults = playerSelectionRandom(1, compChoice);
    display("current round: " + roundNum + " | score: " + userScore + ":" + compScore);
    display(printMatchRandom(1, compChoice));
    display(roundResults);
    if(userScore == 5 || compScore == 5){
        disableButton();
        playAgain();
    }
}

function selectScissors(){
    ++roundNum;
    const divs = document.querySelectorAll(".displayMsg");
    divs.forEach(div => div.remove());
    let compChoice = getComputerChoice();
    roundResults = playerSelectionRandom(0, compChoice);
    display("current round: " + roundNum + " | score: " + userScore + ":" + compScore);
    display(printMatchRandom(0, compChoice));
    display(roundResults);
    if(userScore == 5 || compScore == 5){
        disableButton();
        playAgain();
    }
}

// buttons 
const div = document.querySelector(".div1");

const img1 = document.createElement("img");
img1.src = "images/rock.jpg";
const button1 = document.createElement("button");
button1.classList.add("optionButton");
button1.appendChild(img1);
div.appendChild(button1);

const img2 = document.createElement("img");
img2.src = "images/paper.jpg";
const button2 = document.createElement("button");
button2.classList.add("optionButton");
button2.appendChild(img2);
div.appendChild(button2);

const img3 = document.createElement("img");
img3.src = "images/scissors.jpeg";
const button3 = document.createElement("button");
button3.classList.add("optionButton");
button3.appendChild(img3);
div.appendChild(button3);
//

//disable buttons when game is won
function disableButton (){
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
}
//

// button functionalities
button1.addEventListener("mousedown", selectRock);
button2.addEventListener("mousedown", selectPaper);
button3.addEventListener("mousedown", selectScissors);

playButton.addEventListener("click", reloadPage);
//