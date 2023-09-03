import {
  isSnakeHit,
  isSnakeOutsideGrid,
  render as renderSnake,
  restartSnake,
  update as updateSnake,
} from "./snake.js";
import { render as renderFood, update as updateFood } from "./food.js";

import { GAME_BOARD, GAME_OVER, GAME_OVER_CTA, GAME_SPEED } from "./config.js";
import { restartScore } from "./score.js";

let prevTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    return showGameOver();
  }

  requestAnimationFrame(main);

  const diffInSeconds = (currentTime - prevTime) / 1000;
  const timeSpeed = 1 / GAME_SPEED;

  if (prevTime !== 0 && diffInSeconds < timeSpeed) {
    return;
  }

  prevTime = currentTime;

  update();
  render();
}

requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function render() {
  GAME_BOARD.innerHTML = "";
  renderSnake(GAME_BOARD);
  renderFood(GAME_BOARD);
}

function checkDeath() {
  gameOver = isSnakeOutsideGrid() || isSnakeHit();
}

function showGameOver() {
  GAME_OVER.classList.remove("game-over--hide");
}

GAME_OVER_CTA.addEventListener("click", () => {
  gameOver = false;
  restartSnake();
  GAME_OVER.classList.add("game-over--hide");
  requestAnimationFrame(main);
  restartScore();
});
