// STOPWATCH PROGRAM

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){

    const currentTime = Date.now();
    const d = new Date("June 15, 2024 12:00:00");
    let day = d.getUTCDay();
    let hour = d.getUTCHours();
    let minute = d.getUTCMinutes();
    let second = d.getUTCSeconds();
    let millisecond = d.getTime();
    
    const today = new Date();
    let dy = today.getUTCDay();
    let hr = today.getUTCHours();
    let mn = today.getUTCMinutes();
    let sc = today.getUTCSeconds();
    let ms = today.getTime();

    //let days = (day-dy);
    //let hours = (hour-hr);
    //let minutes = (minute-(mn));
    //let seconds = (second-(sc));
    //let milliseconds = (millisecond-(ms));
    let days = 0;
    let hours = Math.floor((millisecond-currentTime) / (1000 * 60 * 60));
    let minutes = Math.floor((millisecond-currentTime) / (1000 * 60) % 60);
    let seconds = Math.floor((millisecond-currentTime) / 1000 % 60);
    let milliseconds = Math.floor((millisecond-currentTime) % 1000 / 10);
    if (hours % 24 >= 1) {
        days = Math.floor(hours / 24);
        hours = hours - days * 24
    }
    days = String(days).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "00");

    display.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
setInterval(update, 10);