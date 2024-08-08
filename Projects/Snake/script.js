const gameArea = document.getElementById("gameArea");

let snake = [{x: 2, y: 2}];
let food = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10)};

for (i = 0; i < 100; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    gameArea.appendChild(tile);
}


const draw = () => {

    const tiles = document.querySelectorAll(".tile");
    tiles.forEach(tile => tile.classList.remove("snake", "food"));

    //the snake
    snake.forEach(part => {
        const index = part.y * 10 + part.x;
        tiles[index].classList.add("snake");
    });
    //food spawn
    const foodIn = food.y * 10 + food.x;
    tiles[foodIn].classList.add("food");



}
draw();

//Move the snake 

const moveSnake = (x1, y1) => {
    const newHead = {x: snake[0].x + x1, y: snake[0].y + y1};

    if (newHead.x < 0) {
        newHead.x=9;
    }
    if (newHead.x > 9) {
        newHead.x = 0;
    }
    if (newHead.y < 0) {
        newHead.y = 9;
    }
    if (newHead.y > 9) {
        newHead.y = 0;
    }

    draw();
};

window.addEventListener("keydown", (event) => {
    switch(event.key){
        case "ArrowUp":
            moveSnake(0, -1);
            break;
        case "ArrowDown":
            moveSnake(0, 1);
            break;
        case "ArrowLeft":
            moveSnake(-1, 0);
            break;
        case "ArrowRight":
            moveSnake(1, 0);
            break;
    }
});

draw();

// window.addEventListener("keydown" , (event) => {
//     switch(event.key){
//         case "ArrowUp":
//             console.log("Deeshee");
//             snake[0] = {x:snake[0].x, y:snake[0].y-1}
//             draw();
//             break;
//         case "ArrowDown":
//             snake[0] = {x:snake[0].x, y:snake[0].y+1}
//             console.log("dooshoo")
//             break;
//         case "ArrowLeft":
//             snake[0] = {x:snake[0].x-1, y:snake[0].y}
//             console.log("left")
//             break;
//         case "ArrowRight":
//             snake[0] = {x:snake[0].x+1, y:snake[0].y}
//             console.log("right")
//             break;
//     }
//     console.log(snake[0])
// })
