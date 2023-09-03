import { GRID_SIZE } from "./config.js";

export function getRandomPosition() {
  return {
    x: randomItemInRange(1, GRID_SIZE),
    y: randomItemInRange(1, GRID_SIZE),
  };
}

export function createRange(from, to) {
  const range = [];

  for (let i = from; i <= to; i++) {
    range.push(i);
  }

  return range;
}

export function randomItemInRange(from, to) {
  return Math.floor(Math.random() * to) + from;
}
