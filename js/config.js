export const GAME_SPEED = 15;
export const EXPANSION_RATE = 1;
export const FOOD_RESPAWN = [4, 10];
export const SCORE_RATE = 1;

export const GRID_SIZE = getGridSize();
export const GAME_BOARD = document.querySelector(".game-board");
export const SCORE_ELEMENT = document.querySelector(".score");
export const SCORE_VALUE = document.querySelector(".score__value");
export const GAME_OVER = document.querySelector(".game-over");
export const GAME_OVER_CTA = document.querySelector(".game-over__cta");

function getGridSize() {
  const CSS_VAR = "--game-board-size";
  const CSS_VALUE = getComputedStyle(document.documentElement).getPropertyValue(
    CSS_VAR,
  );
  const gridSize = parseInt(CSS_VALUE, 10);

  console.log("The grid size is %d segments.", gridSize);

  return gridSize;
}
