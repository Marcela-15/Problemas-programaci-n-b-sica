import { questionInt } from 'readline-sync';

function showTime () {
    const current = new Date();
    let seconds = current.getSeconds();
    let minutes = current.getMinutes();
    let hours = current.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    const currentHour = hours + ":" + minutes + ":" + seconds;
    console.log(currentHour);
}

function config () {
    let hour = questionInt("enter the time (0-23): ");
    let minutes = questionInt("enter the minutes (0-59): ");
    let seconds = questionInt("enter the seconds (0-59): ");
    const now = new Date();

    now.setHours(hour);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
}

config();
setInterval(showTime, 1000);