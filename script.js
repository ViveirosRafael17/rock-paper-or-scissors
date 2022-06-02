const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const userPoint = document.getElementById('user-point');
const computerPoint = document.getElementById('computer-point');
const rockPlay = document.getElementById('play-rock');
const paperPlay = document.getElementById('play-paper');
const scissorsPlay = document.getElementById('play-scissors');
const result = document.getElementById('result');
const gameReload = document.getElementById('game-reload');
const gameMain = document.getElementById('game-main');
const relaodButton = document.getElementById('reload-button');
const endResult = document.getElementById('end-result');

let up = 0;
let cp = 0;

// computerChoiceGenerator function
const ccg = () => {
    let random = Math.floor(Math.random() * 3)
    const arrayOfChoices = ['Pedra', 'Papel', 'Tesoura'];
    return arrayOfChoices[random];
} 

// userChoice variable
let uc = "";

const defineWiner = () => {
    cc = ccg();

    if (cc === uc) {
        result.innerHTML = 'Empate';
    } else if (cc == 'Pedra' && uc == 'Papel') {
        result.innerHTML = 'Você fez um ponto';
        up += 1;
    } else if (cc == 'Papel' && uc == 'Tesoura') {
        result.innerHTML = 'Você fez um ponto';
        up += 1;
    } else if (cc == 'Tesoura' && uc == 'Pedra') {
        result.innerHTML = 'Você fez um ponto';
        up += 1;
    } else {
        result.innerHTML = "Você Perdeu";
        cp += 1;
    }
    
    computerChoice.innerText = cc;
    userPoint.innerHTML = up;
    computerPoint.innerHTML = cp;

    if (up >= 3) {
        endResult.innerHTML = 'Você venceu!';
        gameMain.style.display = 'none';
        gameReload.style.display = 'flex';
    } else if(cp >= 3) {
        endResult.innerHTML = 'O computador venceu!';
        gameMain.style.display = 'none';
        gameReload.style.display = 'flex';
    }
}

rockPlay.addEventListener('click', () => {
    uc = 'Pedra';
    userChoice.innerHTML = uc;
    defineWiner()
});
paperPlay.addEventListener('click', () => {
    uc = 'Papel';
    userChoice.innerHTML = uc;
    defineWiner()
});
scissorsPlay.addEventListener('click', () => {
    uc = 'Tesoura';
    userChoice.innerHTML = uc;
    defineWiner()
});

relaodButton.addEventListener('click', () => {
    location.reload();
})