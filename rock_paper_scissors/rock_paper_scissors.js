function computerPlay() {
    const arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'rock')
        tie();
    else if(playerSelection == 'rock' && computerSelection == 'paper')
        lose();
    else if(playerSelection == 'rock' && computerSelection == 'scissors')
        win();
    else if(playerSelection == 'paper' && computerSelection == 'rock')
        win(); 
    else if(playerSelection == 'paper' && computerSelection == 'paper')
        tie();
    else if(playerSelection == 'paper' && computerSelection == 'scissors')
        lose();
    else if(playerSelection == 'scissors' && computerSelection == 'rock')
        lose();
    else if(playerSelection == 'scissors' && computerSelection == 'paper')
        win();
    else if(playerSelection == 'scissors' && computerSelection == 'scissors')
        tie();
}

function win() {
    window.alert(`You Win!`);
}
function lose() {
    window.alert(`You lose 🙃`);
}
function tie() {
    window.alert(`Tie.`);
}

while(1) {
    playRound(String(window.prompt('Make a play')).toLowerCase(), computerPlay());
}