import { Ship } from "./Ship";
import { randomizeBoard } from "./helper";

function Gameboard() {
  let miss = [];
  let hit = [];
  let ships = randomizeBoard();
  let sunk = 0;
  const receiveAttack = pos => {
    let ship = containShip(pos, ships);
    if (ship !== null) {
      ship.hit(pos);
      hit.push(pos);
      if (ship.isSunk()) {
        sunk++;
      }
    } else {
      miss.push(pos);
    }
  };
  const allShipsSunk = () => ships.length === sunk;
  return { receiveAttack, miss, hit, allShipsSunk, ships };
}

function containShip(pos, ships) {
  for (let i of ships) {
    if (i.containPos(pos)) {
      return i;
    }
  }
  return null;
}

export { Gameboard, containShip };
