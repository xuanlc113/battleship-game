import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

function randomizeBoard() {
  let gameboard = Gameboard();
  // let shipsToAdd = [6, 4, 4, 3, 3, 3, 2, 2, 2, 2];
  let shipsToAdd = [5, 4, 3, 2, 1];
  for (let i in shipsToAdd) {
    let ship = randomShip(i, shipsToAdd[i]);
    while (!gameboard.addShip(ship)) {
      ship = randomShip(i, shipsToAdd[i]);
    }
  }
  return gameboard;
}

function randomShip(id, length) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  let orientation = Math.random();
  return Ship(length, x, y, orientation < 0.5, id);
}

function includePos(arr, pos) {
  for (let i of arr) {
    if (i[0] === pos[0] && i[1] === pos[1]) {
      return true;
    }
  }
  return false;
}

export { randomizeBoard, includePos };
