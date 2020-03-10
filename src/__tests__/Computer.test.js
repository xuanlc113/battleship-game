import Computer from "../utils/Computer";
import { Gameboard } from "../utils/Gameboard";
import { Ship } from "../utils/Ship";

test("attack history", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  let computer = Computer();
  computer.attackCoord(board, [0, 0]);
  expect(computer.getHistory()).toEqual([[0, 0]]);
  computer.attackCoord(board, [1, 0]);
  expect(computer.getHistory()).toEqual([
    [0, 0],
    [1, 0]
  ]);
});

test("vertical search", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, true, 0));
  let computer = Computer();
  let [coord1, present1] = computer.verticalSearch(board, [0, 2]);
  expect(coord1).toEqual([
    [0, 1],
    [0, 0],
    [0, 3],
    [0, 4]
  ]);
  //another block in ship position attacked already
  board.addShip(Ship(4, 9, 4, true, 0));
  computer.attackCoord(board, [9, 6]);
  let [coord2, present2] = computer.verticalSearch(board, [9, 5]);
  expect(coord2).toEqual([
    [9, 4],
    [9, 3],
    [9, 7],
    [9, 8]
  ]);
});

test("horizontal search", () => {
  let board = Gameboard();
  board.addShip(Ship(4, 0, 0, false, 0));
  let computer = Computer();
  let [coord1, present1] = computer.horizontalSearch(board, [2, 0]);
  expect(coord1).toEqual([
    [1, 0],
    [0, 0],
    [3, 0],
    [4, 0]
  ]);
  board.addShip(Ship(4, 5, 0, false, 0));
  let [coord2, present2] = computer.horizontalSearch(board, [7, 0]);
  expect(coord2).toEqual([
    [6, 0],
    [5, 0],
    [4, 0],
    [8, 0],
    [9, 0]
  ]);
});
