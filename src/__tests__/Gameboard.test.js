import { Ship } from "../Ship";
import { Gameboard, containShip } from "../Gameboard";

test("add ship", () => {
  let board = Gameboard();
  board.addShip(2, 3, 4);
  expect(board.ships.length).toEqual(1);
  board.addShip(2, 3, 4);
  expect(board.ships.length).toEqual(2);
});

test("attack", () => {
  let board = Gameboard();
  board.addShip(1, 2, 3);
  board.receiveAttack(1);
  let ship = containShip(2, board.ships);
  board.receiveAttack(2);
  expect(ship.isSunk()).toBeFalsy();
  board.receiveAttack(3);
  expect(ship.isSunk()).toBeTruthy();
});

test("contain ship", () => {
  let ship = Ship(3, 1, 2, 3);
  expect(typeof containShip(2, [ship])).toBe("object");
  expect(containShip(4, [ship])).toBeNull();
});

test("missed", () => {
  let board = Gameboard();
  board.addShip(1, 2, 3);
  board.receiveAttack(1);
  board.receiveAttack(4);
  expect(board.missed).toEqual([4]);
  board.receiveAttack(7);
  expect(board.missed).toEqual([4, 7]);
  expect(board.hit).toEqual([1]);
});

test("all ships sunk", () => {
  let board = Gameboard();
  board.addShip(1, 2);
  board.addShip(4, 5);
  board.receiveAttack(1);
  board.receiveAttack(2);
  expect(board.allShipsSunk()).toBeFalsy();

  board.receiveAttack(5);
  board.receiveAttack(4);
  expect(board.allShipsSunk()).toBeTruthy();
});
