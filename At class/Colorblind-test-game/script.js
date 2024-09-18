const board = document.querySelector(".board");
const timerElement = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const MAX_WIDTH = 500;
const gameOverMessage = document.getElementById("gameOverMessage");
const finalScore = document.getElementById("finalScore");
const playAgainButton = document.getElementById("playAgain");

let ROW_COUNT = 3;
let COL_COUNT = 3;
let MARGIN = 100;
let level = 1;
let score = 0;
let timer;
let timeLeft = 120;
let correctClickCount = 0;

const startTimer = () => {
  document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
      timeLeft--;
      document.getElementById('timer').textContent = `Time left: ${timeLeft}s`;

      if (timeLeft <= 0) {
          clearInterval(timer);
          gameOver();
          
      }
  }, 1000);
};

const handleCorrectClick = () => {
    correctClickCount++;
    score++;
    upScore();
    if (correctClickCount % 3 === 0) {
        level++;
        ROW_COUNT++;
        COL_COUNT++;
    }
    draw();
};

const upScore = () => {
    scoreEl.textContent = `Score: ${score}`;
};

const handleClick = () => {
    timeLeft -= 3;
    timerElement.textContent = `Time left: ${timeLeft}s`
    if (timeLeft < 0) {
        clearInterval(timer);
        gameOver();
    }
};

const gameOver = () => {
    gameOverMessage.classList.add("hidden");
    finalScore.textContent = score;
};

const restartGame = () => {
    gameOverMessage.classList.add("hidden");
    ROW_COUNT = 3;
    COL_COUNT = 3;
    MARGIN = 100;
    level = 1;
    score = 0;
    timeLeft = 120;
    correctClickCount = 0;

    draw();
    startTimer();
}

playAgainButton.addEventListener("click", restartGame);

const draw = () => {
    board.innerHTML = "";
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const difficultyMargin = MARGIN / level;

    const oddIndex = Math.floor(Math.random() * ROW_COUNT * COL_COUNT);

    for (let i = 0; i < ROW_COUNT * COL_COUNT; i++) {
        const tileEl = document.createElement("div");
        tileEl.className = "tile";
        tileEl.style.width = `${MAX_WIDTH / COL_COUNT}px`;
        tileEl.style.height = `${MAX_WIDTH / ROW_COUNT}px`;

        if (i === oddIndex) {
            tileEl.addEventListener("click", handleCorrectClick);
            tileEl.style.backgroundColor = `rgb(${red - difficultyMargin * 3}, ${green - difficultyMargin * 3}, ${blue - difficultyMargin * 3})`;
        } else {
            tileEl.addEventListener("click", handleClick);
            tileEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
        board.appendChild(tileEl);
    }
    if (!timer) {
        startTimer();
    }
}

draw();
