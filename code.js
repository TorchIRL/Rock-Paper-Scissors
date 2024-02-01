let computerScore = 0
let playerScore = 0
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)];
}

const buttons = document.querySelector('.content')

const title = document.createElement('h1');
title.textContent = 'Rock, Paper, Scissors';
buttons.appendChild(title)

const results = document.createElement('div');
buttons.appendChild(results);

const resultText = document.createElement('p');
resultText.textContent = ''
results.appendChild(resultText);

const playersScore = document.createElement('p')
playersScore.textContent = `Your Score: ${playerScore}`
results.appendChild(playersScore)

const computersScore = document.createElement('p')
computersScore.textContent = `Computers Score: ${computerScore}`
results.appendChild(computersScore)

const sbtn = document.createElement('button');
sbtn.setAttribute("id", 'scissors')
sbtn.textContent = 'Scissors';
buttons.appendChild(sbtn);

const rbtn = document.createElement('button');
rbtn.setAttribute("id", 'rock')
rbtn.textContent = 'Rock';
buttons.appendChild(rbtn);

const pbtn = document.createElement('button');
pbtn.setAttribute("id", 'paper')
pbtn.textContent = 'Paper';
buttons.appendChild(pbtn);

let options = document.querySelector('.content')

options.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'scissors':
            console.log(playRound(playerSelection = 'scissors', computerSelection = getComputerChoice()))
            break;
        case 'rock':
            console.log(playRound(playerSelection = 'rock', computerSelection = getComputerChoice()))
            break;
        case 'paper':
            console.log(playRound(playerSelection = 'paper', computerSelection = getComputerChoice()))
            break;
    }
})



function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultText.textContent = 'You Lose! Your rock is wrapped up by paper'
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultText.textContent = 'You Win! Your rock crushes scissors'
        playerScore ++
        playersScore.textContent = `Your Score: ${playerScore}`
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        resultText.textContent = 'Tie!'
        playerScore ++
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
        playersScore.textContent = `Your Score: ${playerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultText.textContent = 'You Win! Your paper wraps up rock'
        playerScore ++
        playersScore.textContent = `Your Score: ${playerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        resultText.textContent = 'Tie!'
        playerScore ++
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
        playersScore.textContent = `Your Score: ${playerScore}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultText.textContent = 'You Lose! Your paper is shredded by scissors'
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        resultText.textContent = 'You Win! Your scissors shred paper'
        playerScore ++
        playersScore.textContent = `Your Score: ${playerScore}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultText.textContent = 'You Lose! Your scissors are crushed by rock'
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
    } else {
        resultText.textContent = 'Tie!'
        playerScore ++
        computerScore ++
        computersScore.textContent = `Computers Score: ${computerScore}`
        playersScore.textContent = `Your Score: ${playerScore}`
    }
}
