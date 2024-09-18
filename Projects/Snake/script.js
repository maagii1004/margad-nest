const gameArea = document.getElementById("gameArea");
const gameOverMessage = document.getElementById("gameOverMessage");
const finalScore = document.getElementById("finalScore");
const playAgainButton = document.getElementById("playAgain");
const scoreUI = document.getElementById("score");

let snake = [{x: 2, y: 2}];
let food = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};
let direction = { x: 1, y: 0 }; 
let score = 0;
let gameOver = false;
let intervalId;
let gameSpeed = 150;
let gridSize = 10;
let borderRestriction = false;
let canChangeDirection = true;

const creatingGrid = () => {
    gameArea.innerHTML = "";
    gameArea.style.gridTemplateColumns = `repeat(${gridSize}, 25px)`;
    gameArea.style.gridTemplateRows = `repeat(${gridSize}, 25px)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        gameArea.appendChild(tile);
    }
};

const draw = () => {
    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.classList.remove("snake", "snake-head", "food"));

    snake.forEach((part, index) => {
        const indexPosition = part.y * gridSize + part.x;
        if(tiles[indexPosition]){
            if (index === 0) {
                tiles[indexPosition].classList.add("snake-head"); 
            } else {
                tiles[indexPosition].classList.add("snake");
            }
        }
    });

    const foodIn = food.y * gridSize + food.x;
    if(tiles[foodIn]){
        tiles[foodIn].classList.add("food");
    }
};

const checkTouch = (head) => {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
};

const moveSnake = (dx, dy) => {
    if (gameOver) return;

    const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (borderRestriction) {
        if (newHead.x < 0 || newHead.x >= gridSize || newHead.y < 0 || newHead.y >= gridSize) {
            clearInterval(intervalId);
            showGameOverMessage();
            return;
        }
    } else {
        if (newHead.x < 0) newHead.x = gridSize - 1;
        if (newHead.x >= gridSize) newHead.x = 0;
        if (newHead.y < 0) newHead.y = gridSize - 1;
        if (newHead.y >= gridSize) newHead.y = 0;
    }

    if (checkTouch(newHead)) {
        clearInterval(intervalId);
        showGameOverMessage();
        return;
    }

    if (newHead.x === food.x && newHead.y === food.y) {
        snake.unshift(newHead);
        score++;
        food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
        updateScore();
    } else {
        snake.unshift(newHead);
        snake.pop();
    }

    draw();
};

const showGameOverMessage = () => {
    finalScore.textContent = score;
    gameOverMessage.style.display = "block";
    gameOver = true;
};

const updateScore = () => {
    scoreUI.innerHTML = `Your score: ${score}`;
};

const updateGame = () => {
    if (!gameOver) {
        moveSnake(direction.x, direction.y);
    } 
};

const resetGame = () => {
    clearInterval(intervalId);

    snake = [{ x: 2, y: 2 }];
    food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };
    direction = { x: 1, y: 0 };
    score = 0;
    gameOver = false;
    canChangeDirection = true;

    updateScore();
    creatingGrid();
    draw();
    gameOverMessage.style.display = "none";
    intervalId = setInterval(updateGame, gameSpeed);
};

window.addEventListener("keydown", (event) => {
    if (!canChangeDirection) return;

    let newDirection = { x: direction.x, y: direction.y };

    switch(event.key){
        case "ArrowUp":
            if (direction.y === 0) newDirection = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0) newDirection = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) newDirection = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) newDirection = { x: 1, y: 0 };
            break;
    }

    direction = newDirection;
    canChangeDirection = false;

    setTimeout(() => {
        canChangeDirection = true;
    }, gameSpeed);
});

playAgainButton.addEventListener("click", resetGame);

document.querySelectorAll(".border-sizes button").forEach((button, index) => {
    button.addEventListener("click", () => {
        gridSize = (index + 1) * 5;
        resetGame();
    });
});

document.querySelectorAll(".border-restrictor button").forEach((button, index) => {
    button.addEventListener("click", () => {
        borderRestriction = index === 0;
        resetGame();
    });
});

document.querySelector(".game-speed input").addEventListener("change", (event) => {
    const speed = parseInt(event.target.value, 10);
    if (speed >= 50) {
        gameSpeed = speed;
        resetGame();
    }
});

creatingGrid();
resetGame();
