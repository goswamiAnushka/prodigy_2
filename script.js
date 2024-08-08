// script.js

let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapTimes = document.getElementById('lapTimes');

function updateDisplay() {
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;
    display.innerHTML = `${h}:${m}:${s}`;
}

function startStop() {
    if (!isRunning) {
        timer = setInterval(run, 1000);
        startStopBtn.innerHTML = 'Pause';
        startStopBtn.classList.replace('primary', 'secondary');
        isRunning = true;
    } else {
        clearInterval(timer);
        startStopBtn.innerHTML = 'Start';
        startStopBtn.classList.replace('secondary', 'primary');
        isRunning = false;
    }
}

function run() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    startStopBtn.innerHTML = 'Start';
    startStopBtn.classList.replace('secondary', 'primary');
    isRunning = false;
    lapTimes.innerHTML = '';
}

function recordLap() {
    let li = document.createElement('li');
    li.innerHTML = display.innerHTML;
    lapTimes.appendChild(li);
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);
