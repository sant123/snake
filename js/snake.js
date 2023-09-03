import "./snakeKeyboard.js";
import { snakeDirection } from "./snakeDirection.js";
import { GRID_SIZE } from "./config.js";

let snakeBody = [{ x: 8, y: 8 }];
let newSegments = 0;

export function update() {
  addSegment();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += snakeDirection.x;
  snakeBody[0].y += snakeDirection.y;
}

export function render(gameBoard) {
  for (const segment of snakeBody) {
    const segmentElement = document.createElement("div");
    segmentElement.style.gridRowStart = segment.y;
    segmentElement.style.gridColumnStart = segment.x;
    segmentElement.classList.add("snake");
    gameBoard.appendChild(segmentElement);
  }
}

export function growSnake(amount) {
  newSegments = amount;
}

export function isSnakeAtPosition(position) {
  const snakeHead = snakeBody[0];
  return snakeHead.x === position.x && snakeHead.y === position.y;
}

export function isSnakeOutsideGrid() {
  const snakeHead = snakeBody[0];
  return snakeHead.x < 1 || snakeHead.x > GRID_SIZE || snakeHead.y < 1 ||
    snakeHead.y > GRID_SIZE;
}

export function isSnakeHit() {
  const snakeHead = snakeBody[0];

  return snakeBody.slice(1).some((segment) => {
    return snakeHead.x === segment.x && snakeHead.y === segment.y;
  });
}

export function restartSnake() {
  snakeBody = [{ x: 8, y: 8 }];
}

function addSegment() {
  for (let index = 0; index < newSegments; index++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }

  newSegments = 0;
}
