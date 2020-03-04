import { Ship } from "../utils/Ship";
import { Gameboard, containShip } from "../utils/Gameboard";

test("contain ship", () => {
  let ship = Ship(3, 1, 2, true);
  expect(typeof containShip([1, 2], [ship])).toBe("object");
  expect(containShip([4, 0], [ship])).toBeNull();
});

test("miss", () => {
  let board = Gameboard();
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
});
