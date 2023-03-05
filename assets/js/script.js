let gameEl = $('game');


let secondsLeft = 90;

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