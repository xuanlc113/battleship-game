import { Ship } from "./Ship";

function Gameboard() {
  let board = [];
  let missed = [];
  let hit = [];
  let ships = [];
  let sunk = 0;
  const addShip = (...arr) => {
    ships.push(Ship(arr.length, ...arr));
  };
  const receiveAttack = pos => {
    let ship = containShip(pos, ships);
    if (ship !== null) {
      ship.hit(pos);
      hit.push(pos);
      if (ship.isSunk()) {
        sunk++;
      }
    } else {
      missed.push(pos);
    }
  };
  const allShipsSunk = () => ships.length === sunk;
  return { addShip, receiveAttack, missed, hit, allShipsSunk, ships, board };
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
