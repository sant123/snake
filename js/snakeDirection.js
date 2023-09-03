export const upDirection = () => ({ x: 0, y: -1 });
export const downDirection = () => ({ x: 0, y: 1 });
export const leftDirection = () => ({ x: -1, y: 0 });
export const rightDirection = () => ({ x: 1, y: 0 });

export let snakeDirection = rightDirection();
export let lastSnakeDirection = snakeDirection;

export function setSnakeDirection(direction) {
  snakeDirection = direction;
  lastSnakeDirection = direction;
}
