'use strict';
const piPaTi = document.querySelector('.js-option');
const btnPlay = document.querySelector('.js-btn-play');
const btnReinicio = document.querySelector('.js-btn-reiniciar');
const winLose = document.querySelector('.js-change-p');
const pointsPlayer = document.querySelector('.js-points-player');
const pointsComputer = document.querySelector('.js-points-computer');
const win = '¡Has ganado!';
const lose = '¡Has perdido!';
const joint = 'Empate';
let pC = 0;
let pP = 0;
const emojiPlayer = document.querySelector('.chosePlayer');
const emojiComputer = document.querySelector('.choseComputer');
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
};
function printEmojisComputer(computerChoose) {
    if (computerChoose <= 3) {
      emojiComputer.innerHTML = `&#129704;`;
    } else if (computerChoose >= 7) {
      emojiComputer.innerHTML = `&#128196;`;
    } else {
      emojiComputer.innerHTML = `&#9986;`;
    }
  };
function printEmojisPlayer(piPaTi) {
    if (piPaTi.value === 'piedra') {
        emojiPlayer.innerHTML = `&#129704;`;
    } else if (piPaTi.value === 'papel') {
        emojiPlayer.innerHTML = `&#128196;`;
    } else {
        emojiPlayer.innerHTML = `&#9986;`;
    }
};
function play() {
  const computerChoose = getRandomNumber(9);
  printEmojisComputer(computerChoose);
  printEmojisPlayer(piPaTi);
  console.log(computerChoose);
  if (piPaTi.value != '') {
    if (computerChoose <= 3) {
      if (piPaTi.value === 'piedra') {
        winLose.innerHTML = joint;
      } else if (piPaTi.value === 'papel') {
        winLose.innerHTML = win;
      } else {
        winLose.innerHTML = lose;
      }
    } else if (computerChoose >= 7) {
      if (piPaTi.value === 'piedra') {
        winLose.innerHTML = lose;
      } else if (piPaTi.value === 'papel') {
        winLose.innerHTML = joint;
      } else {
        winLose.innerHTML = win;
      }
    } else {
      if (piPaTi.value === 'piedra') {
        winLose.innerHTML = win;
      } else if (piPaTi.value === 'papel') {
        winLose.innerHTML = lose;
      } else {
        winLose.innerHTML = joint;
      }
    }
  }
 
}
function points() {
  if (winLose.innerHTML === win) {
    pP = pP + 1;
    pointsPlayer.innerHTML = pP;
  } else if (winLose.innerHTML === lose) {
    pC = pC + 1;
    pointsComputer.innerHTML = pC;
  }
  console.log(winLose.innerHTML);
  console.log(win);
}
function stop() {
  if (pP + pC === 10) {
    btnPlay.classList.add('hidden');
    piPaTi.classList.add('hidden');
    btnReinicio.classList.remove('hidden');

    if (pP > pC) {
      winLose.innerHTML = win + `&#129395;`;
    } else if (pP < pC) {
      winLose.innerHTML = lose + `&#128128`;
    } else {
      winLose.innerHTML = joint + `&#129322`;
    }
  }
}


function handleClick(event) {
  event.preventDefault();
  play();
  points();
  stop();
 
  
}

btnPlay.addEventListener('click', handleClick);
