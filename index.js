//Team 1
let team1score=0;
let team1foul=0;

function Team1add1point(){
    console.log("Team1 :+1 was clicked")
    team1score+=1;
    console.log(team1score)
    document.getElementById("team1-score").textContent=team1score
}

function Team1add2point(){
    console.log("Team1 :+2 was clicked")
    team1score+=2;
    console.log(team1score)
    document.getElementById("team1-score").textContent=team1score
}

function Team1add3point(){
    console.log("Team1 :+3 was clicked")
    team1score+=3;
    console.log(team1score)
    document.getElementById("team1-score").textContent=team1score
}

function addteam1foul(){
    console.log("Team1 :Add foul was clicked")
    team1foul+=1;
    console.log(team1foul)
    document.getElementById("team1-fouls").textContent=team1foul
}


//Team 2 
let team2score=0;
let team2foul=0;

function Team2add1point(){
    console.log("Team2 :+1 was clicked")
    team2score+=1;
    console.log(team2score)
    document.getElementById("team2-score").textContent=team2score
}

function Team2add2point(){
    console.log("Team2 :+2 was clicked")
    team2score+=2;
    console.log(team2score)
    document.getElementById("team2-score").textContent=team2score
}

function Team2add3point(){
    console.log("Team2 :+3 was clicked")
    team2score+=3;
    console.log(team2score)
    document.getElementById("team2-score").textContent=team2score
}

function addteam2foul(){
    console.log("Team2 :Add foul was clicked")
    team2foul+=1;
    console.log(team2foul)
    document.getElementById("team2-fouls").textContent=team2foul
}


// --- Theme Switch Logic ---
const themeToggle = document.getElementById('checkbox');
const body = document.body;

// Function to set the theme
function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        setTheme(true);
    } else {
        themeToggle.checked = false;
        setTheme(false); // Ensure light mode is applied if no preference or 'light'
    }
});

// Listen for theme toggle changes
themeToggle.addEventListener('change', () => {
    setTheme(themeToggle.checked);
});


// --- Timer Logic ---
const gameTimerDisplay = document.getElementById('game-timer');
const startTimerBtn = document.getElementById('start-timer');
const pauseTimerBtn = document.getElementById('pause-timer');
const resetTimerBtn = document.getElementById('reset-timer');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const setTimerBtn = document.getElementById('set-timer');

let totalSeconds = 0;
let timerInterval;
let isTimerRunning = false;

// Function to format time for display
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Function to update the timer display
function updateTimerDisplay() {
    gameTimerDisplay.textContent = formatTime(totalSeconds);
}

// Function to start the timer
function startTimer() {
    if (!isTimerRunning && totalSeconds > 0) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            totalSeconds--;
            updateTimerDisplay();
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                isTimerRunning = false;
                gameTimerDisplay.textContent = "00:00"; // Ensure it shows 00:00 when done
                alert("Time's up!"); // Optional: alert when timer finishes
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
}

// Function to reset the timer to its initial set value (or 00:00)
function resetTimer() {
    pauseTimer(); // Stop any running timer
    // Reset to the last manually set value, or default 10:00 if not set, else 0
    let minutes = parseInt(minutesInput.value) || 0;
    let seconds = parseInt(secondsInput.value) || 0;
    if (minutes === 0 && seconds === 0) { // If both are 0, default to 10:00 if not previously set
        if (totalSeconds === 0 && gameTimerDisplay.textContent === "00:00") {
             totalSeconds = 10 * 60; // Default to 10 minutes if truly reset
        }
    } else {
        totalSeconds = (minutes * 60) + seconds;
    }
    updateTimerDisplay();
}

// Function to set the timer
function setTimer() {
    let minutes = parseInt(minutesInput.value);
    let seconds = parseInt(secondsInput.value);

    // Basic validation
    if (isNaN(minutes) || minutes < 0) minutes = 0;
    if (isNaN(seconds) || seconds < 0) seconds = 0;
    if (seconds > 59) {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
    }

    totalSeconds = (minutes * 60) + seconds;
    pauseTimer(); // Pause if timer is running before setting new time
    updateTimerDisplay();
}

// Event Listeners for timer buttons
startTimerBtn.addEventListener('click', startTimer);
pauseTimerBtn.addEventListener('click', pauseTimer);
resetTimerBtn.addEventListener('click', resetTimer);
setTimerBtn.addEventListener('click', setTimer);

// Initialize timer display on load
document.addEventListener('DOMContentLoaded', () => {
    // Other DOMContentLoaded logic (theme switch) is already there
    // Initialize timer to 10:00 (or whatever initial value in input fields)
    setTimer();
});

const checkbox = document.getElementById('checkbox');
const rootElement = document.documentElement;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    rootElement.setAttribute('data-theme', 'dark');
  } else {
    rootElement.setAttribute('data-theme', 'light');
  }
});

// Optional: initialize theme
window.addEventListener('DOMContentLoaded', () => {
  rootElement.setAttribute('data-theme', 'light');
});
