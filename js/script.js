// 1 - show the good picture when click en the image
// 2 - When click on "Play"
// 2 A - randomly generate a number to get a choice for the CPU
// 2 B - show the picture of the good image
// 3 A - Calculate the victory, defeat or ex aequo
// 3 B - Show the result in #resultGame
// 4 - Ask to play again by showing the reset button
let paper = document.querySelector('#paper');
let stone = document.querySelector('#stone');
let scissors = document.querySelector('#scissors');
let userScissors = document.querySelector('#userCiseaux');
let userPaper = document.querySelector('#userFeuille');
let userStone = document.querySelector('#userPierre');
let compScissors = document.querySelector('#compCiseaux');
let compStone = document.querySelector('#compPierre');
let compPaper = document.querySelector('#compFeuille');
let start = document.querySelector('#playGame');
let reset = document.querySelector('#playAgain');
let result = document.querySelector('#resultGame');
let userRes = '';
let compRes = '';

paper.addEventListener('click', clickChange);
stone.addEventListener('click', clickChange);
scissors.addEventListener('click', clickChange);
reset.addEventListener('click', resetGame);

function clickChange(e) {
    start.style.display = 'block';
    if (e.toElement.id === 'paper') {
        userPaper.style.display = 'block';
        userScissors.style.display = 'none';
        userStone.style.display = 'none';
        userRes = 'paper';
    } else if (e.toElement.id === 'scissors') {
        userPaper.style.display = 'none';
        userScissors.style.display = 'block';
        userStone.style.display = 'none';
        userRes = 'scissors';
    } else if (e.toElement.id === 'stone') {
        userPaper.style.display = 'none';
        userScissors.style.display = 'none';
        userStone.style.display = 'block';
        userRes = 'stone';
    }
    start.addEventListener('click', checkWinner);
}

function checkWinner() {
    start.style.display = 'none';
    paper.removeEventListener('click', clickChange);
    stone.removeEventListener('click', clickChange);
    scissors.removeEventListener('click', clickChange);
    start.removeEventListener('click', checkWinner);
    let compRnd = Math.trunc((Math.random() * 3) + 1);
    let compSelection = document.querySelector('#computerGame>img:nth-child(' + compRnd + ')');
    let compRes = compSelection.alt;
    compSelection.style.display = 'block';
    reset.style.display = 'block';
    result.style.display = 'block';
    let paperStone = (userRes == 'paper') && (compRes == 'stone');
    let stoneScissors = (userRes == 'stone') && (compRes == 'scissors');
    let scissorsPaper = (userRes == 'scissors') && (compRes == 'paper');
    if (userRes === compRes) {
        result.style.backgroundColor = 'grey';
        result.innerHTML = 'Draw';
    } else if (paperStone || stoneScissors || scissorsPaper) {
        result.style.backgroundColor = 'green';
        result.innerHTML = 'Win';
    } else {
        result.style.backgroundColor = 'red';
        result.innerHTML = 'Lost';
    }
}

function resetGame() {
    userRes = '';
    compRes = '';
    compScissors.style.display = 'none';
    compStone.style.display = 'none';
    compPaper.style.display = 'none';
    userScissors.style.display = 'none';
    userPaper.style.display = 'none';
    userStone.style.display = 'none';
    paper.addEventListener('click', clickChange);
    stone.addEventListener('click', clickChange);
    scissors.addEventListener('click', clickChange);
    reset.style.display = 'none';
    result.style.display = 'none';
    result.style.backgroundColor = 'green';
    result.innerHTML = '';
}