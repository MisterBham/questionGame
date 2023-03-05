let gameEl = document.querySelector('.game');
let buttonEl = document.querySelector('button');


let secondsLeft = 60;

function setTime {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft)

            if(secondsLeft === 0) {
        clearInterval(timerInterval)
        gameOver();
    }

    }, 1000);
}