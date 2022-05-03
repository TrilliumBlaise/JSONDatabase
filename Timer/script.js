const stopwatch = document.querySelector('#timer');
const TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};
let start;
//Setup the stopwatch
document.addEventListener('DOMContentLoaded', e => {
  setUpStopwatch();
});

//Adds click function to the buttons
document.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  if (e.target.id === 'start-stop') toggleStopwatch();
  if (e.target.id === 'clear-time') clearStopwatch();
});

function toggleStopwatch() {
  if (!start) {
    start = setInterval(startTimer, 1000);
    return;
  }
  stopTimer();
}
function startTimer() {
  TIME.seconds += 1;
  if (TIME.seconds === 60 && TIME.hours < 98) {
    TIME.seconds = 0;
    TIME.minutes += 1;
  }
  if (TIME.minutes === 60 && TIME.hours < 98) {
    TIME.minutes = 0;
    TIME.hours += 1;
  }
  if (TIME.hours === 99) {
    stopTimer();
  }
  setUpStopwatch();
}

function stopTimer() {
  clearInterval(start);
  start = undefined;
}

function clearStopwatch() {
  if (!start) {
    TIME.seconds = 0;
    TIME.minutes = 0;
    TIME.hours = 0;
    setUpStopwatch();
  }
}

function setUpStopwatch() {
  if (TIME.seconds < 10) {
    stopwatch.querySelector('#tens-digit-sec').innerText = 0;
    stopwatch.querySelector('#ones-digit-sec').innerText = TIME.seconds;
  } else {
    stopwatch.querySelector('#tens-digit-sec').innerText = TIME.seconds.toString()[0];
    stopwatch.querySelector('#ones-digit-sec').innerText = TIME.seconds.toString()[1];
  }
  if (TIME.minutes < 10) {
    stopwatch.querySelector('#tens-digit-min').innerText = 0;
    stopwatch.querySelector('#ones-digit-min').innerText = TIME.minutes;
  } else {
    stopwatch.querySelector('#tens-digit-min').innerText = TIME.minutes.toString()[0];
    stopwatch.querySelector('#ones-digit-min').innerText = TIME.minutes.toString()[1];
  }
  if (TIME.hours < 10) {
    stopwatch.querySelector('#tens-digit-hour').innerText = 0;
    stopwatch.querySelector('#ones-digit-hour').innerText = TIME.hours;
  } else {
    stopwatch.querySelector('#tens-digit-hour').innerText = TIME.hours.toString()[0];
    stopwatch.querySelector('#ones-digit-hour').innerText = TIME.hours.toString()[1];
  }
}
