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

  const canMoveShip = (id, x, y) => {
    let ship = ships.find(ship => ship.id === id);
    let otherShips = ships.filter(ship => ship.id != id);
    let length = ship.length;
    let orientation = ship.getOrientation();
    let allShipCoords = ship.getAllCoordsAtNewPos(x, y);
    if (orientation) {
      if (y + length - 1 > 9 || y < 0) {
        return false;
      }
    } else {
      if (x + length - 1 > 9 || x < 0) {
        return false;
      }
    }
    for (let ship of otherShips) {
      for (let coord of allShipCoords) {
        if (ship.containPos(coord)) {
          return false;
        }
      }
    }
    return true;
  };

  const moveShip = (id, x, y, orientation) => {
    let ship = ships.find(ship => ship.id === id);
    ship.changePosition(x, y, orientation);
    ships.splice(id, 1, ship);
  };

  const containShip = pos => {
    for (let i of ships) {
      if (i.containPos(pos)) {
        return i;
      }
    }
    return null;
  };

  const getShips = () => ships;

  return {
    receiveAttack,
    miss,
    hit,
    allShipsSunk,
    getShips,
    canMoveShip,
    moveShip,
    containShip
  };
}

export { Gameboard };
