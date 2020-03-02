import { Ship } from "../utils/Ship";
import { Gameboard, containShip } from "../utils/Gameboard";

test("contain ship", () => {
  let ship = Ship(3, 1, 2, true);
  expect(typeof containShip([1, 2], [ship])).toBe("object");
  expect(containShip([4, 0], [ship])).toBeNull();
});

test("attack", () => {
  let board = Gameboard();
  board.receiveAttack([0, 9]);
  expect(board.missed).toEqual([[0, 9]]);
  board.receiveAttack([0, 0]);
  expect(board.missed).toEqual([[0, 9]]);
  board.receiveAttack([0, 8]);
  expect(board.missed).toEqual([
    [0, 9],
    [0, 8]
  ]);
});

test("missed", () => {
  let board = Gameboard();
  board.receiveAttack([0, 0]);
  expect(board.hit).toEqual([[0, 0]]);
  board.receiveAttack([0, 1]);
  expect(board.missed).toEqual([
    [0, 9],
    [0, 1]
  ]);
  board.receiveAttack([0, 9]);
  expect(board.missed).toEqual([
    [0, 9],
    [0, 1]
  ]);
});
