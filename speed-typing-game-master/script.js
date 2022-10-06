const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
const keys = document.querySelectorAll(".key"),
note = document.querySelector(".nowplaying"),
hints = document.querySelectorAll(".hints");

// List of words for game
const words = [
  "QQSQFDQQSQGFQQKJHHGFFDQSQ",
  "QQSQFDQQSQGFQQKJHHGFFDQSQ",
  "QQSQFDQQSQGFQQKJHHGFFDQSQ",
  "QQSQFDQQSQGFQQKJHHGFFDQSQ",
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 40;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";

  if (time === 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;

  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = "";

    if (difficulty === "hard") {
      time += 10;
    } else if (difficulty === "medium") {
      time += 20;
    } else {
      time += 30;
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener("click", () => settings.classList.toggle("hide"));

// Settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});
function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(String.fromCharCode(e.keyCode));


  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);
