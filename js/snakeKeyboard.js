import {
  downDirection,
  lastSnakeDirection,
  leftDirection,
  rightDirection,
  setSnakeDirection,
  upDirection,
} from "./snakeDirection.js";

addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp": {
      if (lastSnakeDirection.y !== 0) {
        break;
      }

      setSnakeDirection(upDirection());
      break;
    }

    case "ArrowDown": {
      if (lastSnakeDirection.y !== 0) {
        break;
      }

      setSnakeDirection(downDirection());
      break;
    }

    case "ArrowLeft": {
      if (lastSnakeDirection.x !== 0) {
        break;
      }

      setSnakeDirection(leftDirection());
      break;
    }

    case "ArrowRight": {
      if (lastSnakeDirection.x !== 0) {
        break;
      }

      setSnakeDirection(rightDirection());
      break;
    }
  }
});
