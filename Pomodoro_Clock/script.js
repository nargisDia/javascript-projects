const timer = document.querySelector('.timer');
const title = document.querySelector('.title');
const startBtn = document.querySelector('.startBtn');
const pausetBtn = document.querySelector('.pausetBtn');
const resumeBtn = document.querySelector('.resumeBtn');
const resetBtn = document.querySelector('.resetBtn');
const pomoCountDisplay = document.querySelector('.pomoCountDisplay');

// Making variable
const workTime = 2 * 60;
const breakTime = 0.5 * 60;

let timerID = null;
let oneRoundCompleted = false; // one round = work time+break time
let totalCount = 0;
let paused = false;

// Function to update title
const updateTitle = msg => {
  title.textContent = msg;
};
// Function to save pomodoro counts to local storage
const saveLocalCounts = () => {
  let counts = JSON.parse(localStorage.getItem('pomoCounts'));
  counts !== null ? counts++ : (counts = 1);
  counts++;
  localStorage.setItem('pomoCounts', JSON.stringify(counts));
};
// Function to countdown
const countDown = time => {
  return () => {
    const mins = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');

    // timer.textContent = time;
    timer.textContent = `${mins}:${secs}`;
    time--;
    if (time < 0) {
      stopTimer();
      if (!oneRoundCompleted) {
        timerID = startTimer(breakTime);
        oneRoundCompleted = true;
        updateTitle("It's Break Time");
      } else {
        updateTitle('Complated one Round of Pomodoro Techniquel!');
        setTimeout(() => updateTitle('Start Timer Again!'), 2000);
        totalCount++;
        saveLocalCounts();
        showPomoCounts();
      }
    }
  };
};

// Arrow Function to start timer
const startTimer = startTimer => {
  if (timerID !== null) {
    stopTimer();
  }
  return setInterval(countDown(startTimer), 1000);
};
// Arrow Function to Stop Timer
const stopTimer = stopTimer => {
  clearInterval(timerID);
  timerID = null;
};
// Fuction to get time in seconds
const geTimeInSeconds = timeString => {
  const [minutes, seconds] = timeString.split(':');
  return parseInt(minutes * 60) + parseInt(seconds);
};
// Adding Event Listener to Start button
startBtn.addEventListener('click', () => {
  timerID = startTimer(workTime);
  updateTitle("It's Work Time");
});

// Adding Event Listener to reset button
resetBtn.addEventListener('click', () => {
  stopTimer();
  timer.textContent = '25:00';
});

// Adding Event Listener to pause button
pausetBtn.addEventListener('click', () => {
  stopTimer();
  paused = true;
  updateTitle('Timer paused');
});

// Adding Event Listener to resume button
resumeBtn.addEventListener('click', () => {
  if (paused) {
    const currentTime = geTimeInSeconds(timer.textContent);
    timerID = startTimer(currentTime);
    paused = false;
    !oneRoundCompleted
      ? updateTitle("It's Work Time")
      : updateTitle("It's Break Time");
  }
});

// Function to show completed pomodoros to screen from local storage

const showPomoCounts = () => {
  const counts = JSON.parse(localStorage.getItem('pomoCounts'));
  if (counts > 0) {
    pomoCountsDisplay.style.display = 'flex';
  }
  pomoCountsDisplay.firstElementChild.textContent = counts;
};
showPomoCounts();
