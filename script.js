let gameContainer = document.querySelector(".game-container");
let scoreElement = document.getElementById("score");

let foodX, foodY;
let headX = 12, headY = 12;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let score = 0;

function generateFood() {
    foodX = Math.floor(Math.random() * 25) + 1;
    foodY = Math.floor(Math.random() * 25) + 1;
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeBody[i][1] == foodY && snakeBody[i][0] == foodX) {
            generateFood();
        }
    }
}

function gameOver() {
    headX = 12;
    headY = 12;
    generateFood();
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
    score = 0;
    scoreElement.innerHTML = score;
    alert("Game Over! Your score was reset.");
}

function renderGame() {
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>`;

    if (foodX == headX && headY == foodY) {
        snakeBody.push([foodX, foodY]);
        generateFood();
        score += 10;
        scoreElement.innerHTML = score;
    }

    snakeBody.pop();
    headX += velocityX;
    headY += velocityY;
    snakeBody.unshift([headX, headY]);

    if (headX <= 0 || headY <= 0 || headX > 25 || headY > 25) {
        gameOver();
    }

    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0][0] == snakeBody[i][0] && snakeBody[0][1] == snakeBody[i][1]) {
            gameOver();
        }
    }

    for (let i = 0; i < snakeBody.length; i++) {
        updatedGame += `<div class="snake" style="grid-area: ${snakeBody[i][1]}/${snakeBody[i][0]};"></div>`;
    }

    gameContainer.innerHTML = updatedGame;
}

generateFood();
setInterval(renderGame, 150);

// Arrow Control for PC
document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (key == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (key == "ArrowLeft" && velocityX != 1) {
        velocityY = 0;
        velocityX = -1;
    } else if (key == "ArrowRight" && velocityX != -1) {
        velocityY = 0;
        velocityX = 1;
    }
});

// Swipe controls for mobile
let touchStartX = 0;
let touchStartY = 0;

gameContainer.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
});

gameContainer.addEventListener("touchend", function (e) {
    let touchEndX = e.changedTouches[0].clientX;
    let touchEndY = e.changedTouches[0].clientY;

    let diffX = touchEndX - touchStartX;
    let diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0 && velocityX != -1) {
            // swiped right
            velocityX = 1;
            velocityY = 0;
        } else if (diffX < 0 && velocityX != 1) {
            // swiped left
            velocityX = -1;
            velocityY = 0;
        }
    } else {
        if (diffY > 0 && velocityY != -1) {
            // swiped down
            velocityY = 1;
            velocityX = 0;
        } else if (diffY < 0 && velocityY != 1) {
            // swiped up
            velocityY = -1;
            velocityX = 0;
        }
    }
});
