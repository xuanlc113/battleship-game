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

  const moveShip = (id, x, y, orientation) => {
    let ship = ships.find(ship => ship.id === id);
    ship.changePosition(x, y, orientation);
    ships.splice(id, 1, ship);
    for (let i of ships) {
      console.log(i.getCoord());
    }
  };

  function containShip(pos) {
    for (let i of ships) {
      if (i.containPos(pos)) {
        return i;
      }
    }
    return null;
  }

  return {
    receiveAttack,
    miss,
    hit,
    allShipsSunk,
    ships,
    moveShip,
    containShip
  };
}

export { Gameboard };
