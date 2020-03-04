import { Ship } from "./Ship";

function randomizeBoard() {
  let ships = [];
  ships = [
    Ship(4, 0, 0, true),
    // Ship(4, 2, 3, false),
    // Ship(3, 5, 6, true),
    // Ship(3, 1, 6, false),
    // Ship(2, 7, 7, false),
    Ship(1, 8, 1, true)
    // Ship(1, 9, 9, true)
  ];
  return ships;
}

function randomShip() {}

function includePos(arr, pos) {
  for (let i of arr) {
    if (i[0] === pos[0] && i[1] === pos[1]) {
      return true;
    }
  }
  return false;
}

export { randomizeBoard, includePos };
