function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Your rock is wrapped up by paper'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Your rock crushes scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'Tie!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Your paper wraps up rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Your paper is shredded by scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return 'You Win! Your scissors shred paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Your scissors are crushed by rock'
    } else {
        return 'Tie!'
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Choose Rock, Paper or Scissors.').toLowerCase()
        let computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}
console.log(game())