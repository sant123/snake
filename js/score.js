import { SCORE_ELEMENT, SCORE_RATE, SCORE_VALUE } from "./config.js";

export let score = 0;
export let bestScore = 0;

export function setScore() {
  score += SCORE_RATE;
  SCORE_VALUE.textContent = score;

  if (score > bestScore) {
    SCORE_ELEMENT.classList.add("score--better");
  }
}

export function restartScore() {
  if (score > bestScore) {
    bestScore = score;
  }

  score = 0;
  SCORE_VALUE.textContent = score;
  SCORE_ELEMENT.classList.remove("score--better");
}
