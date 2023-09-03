import { growSnake, isSnakeAtPosition } from "./snake.js";
import { createRange, getRandomPosition, randomItemInRange } from "./utils.js";
import { EXPANSION_RATE, FOOD_RESPAWN } from "./config.js";
import { setScore } from "./score.js";

let currentTimeout = 0;
let food = getRandomFoodPosition();

export function update() {
  if (isSnakeAtPosition(food)) {
    growSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
    clearTimeout(currentTimeout);
    randomFoodAtTimeRange(...FOOD_RESPAWN);
    setScore();
  }
}

export function render(gameBoard) {
  const segmentElement = document.createElement("div");
  segmentElement.style.gridRowStart = food.y;
  segmentElement.style.gridColumnStart = food.x;
  segmentElement.classList.add("food");
  gameBoard.appendChild(segmentElement);
}

function getRandomFoodPosition() {
  let foodPosition = null;

  while (foodPosition === null || isSnakeAtPosition(foodPosition)) {
    foodPosition = getRandomPosition();
  }

  return foodPosition;
}

function randomFoodAtTimeRange(fromSeconds, toSeconds) {
  const range = createRange(fromSeconds, toSeconds);
  const seconds = range[randomItemInRange(0, range.length - 1)];
  const milliseconds = seconds * 1000;

  currentTimeout = setTimeout(() => {
    food = getRandomFoodPosition();
    randomFoodAtTimeRange(fromSeconds, toSeconds);
  }, milliseconds);

  console.log("Food will move at %d seconds.", seconds);
}

randomFoodAtTimeRange(...FOOD_RESPAWN);
