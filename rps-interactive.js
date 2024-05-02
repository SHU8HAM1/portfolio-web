//0 = Rock, 1 = Paper, 2 = Scissors

let playerChoice = 0;
let computerChoice = 0;

function changePlayer(choice){
    playerChoice = choice;
    if(choice == 0){
        document.getElementById("preview").innerHTML = "Rock";
    }
    else if(choice == 1){
        document.getElementById("preview").innerHTML = "Paper";
    }
    else if(choice == 2){
        document.getElementById("preview").innerHTML = "Scissors";
    }
}

function getComputer(){
    let num = Math.floor(Math.random() * 1000);
    computerChoice = num % 3;
}


function computer_display(){
    let display = document.getElementById("comp-display");
    if(computerChoice == 0){
        display.src = ".\\images\\rock.png";
    }
    else if(computerChoice == 1){
        display.src = ".\\images\\paper.png";
    }
    else if(computerChoice == 2){
        display.src = ".\\images\\scissors.png";
    }
}

function player_display(){
    let display = document.getElementById("player-display");
    if(playerChoice == 0){
        display.src = ".\\images\\rock.png";
    }
    else if(playerChoice == 1){
        display.src = ".\\images\\paper.png";
    }
    else if(playerChoice == 2){
        display.src = ".\\images\\scissors.png";
    }
}

function winner(){
    let winner_text = document.getElementById("go");
    let computerScore = document.getElementById("score2");
    let playerScore = document.getElementById("score1");
    if(computerChoice == 0 && playerChoice == 2){
        winner_text.innerHTML = "Computer Wins";
        computerScore.innerHTML++;
    }
    else if(computerChoice == 2 && playerChoice == 0){
        winner_text.innerHTML = "Player Wins";
        playerScore.innerHTML++;
    }
    else if(computerChoice > playerChoice){
        winner_text.innerHTML = "Computer\nWins";
        computerScore.innerHTML++;
    }
    else if(playerChoice > computerChoice){
        winner_text.innerHTML = "Player Wins";
        playerScore.innerHTML++;
    } 
    else {
        winner_text.innerHTML = "DRAW";
    }
}

const wait = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

async function deploy(){
    let narrator = document.getElementById("go");
    getComputer();
    narrator.innerHTML = "Rock";
    await wait(500);
    narrator.innerHTML = "Paper";
    await wait(500);
    narrator.innerHTML = "Scissors";
    await wait(500);
    narrator.innerHTML = "Shoot!";
    computer_display();
    player_display();
    await wait(500);
    narrator.innerHTML = "draw";
    winner();
}