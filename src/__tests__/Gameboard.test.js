import { Gameboard } from "../utils/Gameboard";
import { Ship } from "../utils/Ship";

test("add ship", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  expect(board.getShips().length).toBe(1);
  board.addShip(Ship(4, 1, 0, true, 1));
  expect(board.getShips().length).toBe(2);
  board.addShip(Ship(4, 0, 0, false, 2));
  expect(board.getShips().length).toBe(2);
});

test("add ship boolean", () => {
  let board = Gameboard();
  expect(board.addShip(Ship(4, 0, 0, true, 0))).toBeTruthy();
  expect(board.addShip(Ship(4, 1, 0, true, 1))).toBeTruthy();
  expect(board.addShip(Ship(4, 0, 0, false, 2))).toBeFalsy();
});

test("contain ship", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  expect(typeof board.containShip([0, 0])).toBe("object");
  expect(board.containShip([9, 9])).toBeNull();
});

test("miss", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  board.receiveAttack([1, 0]);
  expect(board.miss).toEqual([[1, 0]]);
  board.receiveAttack([2, 0]);
  expect(board.miss).toEqual([
    [1, 0],
    [2, 0]
  ]);
  board.receiveAttack([0, 1]);
  expect(board.miss).toEqual([
    [1, 0],
    [2, 0]
  ]);
});

test("hit", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  board.addShip(Ship(1, 8, 1, true, 1));

  board.receiveAttack([0, 0]);
  expect(board.hit).toEqual([[0, 0]]);
  board.receiveAttack([0, 1]);
  expect(board.hit).toEqual([
    [0, 0],
    [0, 1]
  ]);
  board.receiveAttack([1, 0]);
  expect(board.hit).toEqual([
    [0, 0],
    [0, 1]
  ]);
  board.receiveAttack([8, 1]);
  expect(board.hit).toEqual([
    [0, 0],
    [0, 1],
    [8, 1]
  ]);
});

test("all ships sunk", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  board.addShip(Ship(1, 8, 1, true, 1));
  board.receiveAttack([0, 0]);
  board.receiveAttack([0, 1]);
  board.receiveAttack([0, 2]);
  board.receiveAttack([0, 3]);
  board.receiveAttack([8, 1]);
  expect(board.allShipsSunk()).toBeTruthy();
});

test("can move ship", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  board.addShip(Ship(1, 8, 1, true, 1));
  //cannot move out
  expect(board.canMoveShip(0, 9, 9)).toBeFalsy();
  expect(board.canMoveShip(0, 9, 7)).toBeFalsy();
  expect(board.canMoveShip(0, 9, 6)).toBeTruthy();
  //cannot move over another ship
  expect(board.canMoveShip(0, 8, 1)).toBeFalsy();
  expect(board.canMoveShip(0, 8, 0)).toBeFalsy();
});

test("move ship", () => {
  let board = Gameboard();
  board.addShip(Ship(1, 8, 1, true, 1));
  expect(board.containShip([9, 9])).toBeNull();
  board.moveShip(1, 9, 9, true);
  expect(board.containShip([9, 9])).not.toBeNull();
  board.addShip(Ship(3, 0, 0, false, 0));
  board.moveShip(0, 5, 5, false);
  expect(board.containShip([5, 5])).not.toBeNull();
  expect(board.containShip([6, 5])).not.toBeNull();
  expect(board.containShip([7, 5])).not.toBeNull();
});
