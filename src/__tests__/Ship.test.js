import { Ship } from "../utils/Ship";

test("length", () => {
  let ship = Ship(3, 1, 1, true);
  expect(ship.length).toBe(3);
});

test("contain pos", () => {
  let ship1 = Ship(3, 1, 2, true);
  let ship2 = Ship(4, 0, 1, false);
  expect(ship1.containPos([1, 1])).toBeFalsy();
  expect(ship1.containPos([1, 2])).toBeTruthy();
  expect(ship1.containPos([1, 4])).toBeTruthy();
  expect(ship1.containPos([1, 5])).toBeFalsy();
  expect(ship1.containPos([2, 4])).toBeFalsy();
  expect(ship2.containPos([0, 1])).toBeTruthy();
  expect(ship2.containPos([0, 2])).toBeFalsy();
  expect(ship2.containPos([3, 1])).toBeTruthy();
  expect(ship2.containPos([4, 1])).toBeFalsy();
});

test("sink", () => {
  let ship = Ship(3, 1, 2, true);
  ship.hit([1, 2]);
  ship.hit([1, 3]);
  expect(ship.isSunk()).toBeFalsy();
  ship.hit([1, 4]);
  expect(ship.isSunk()).toBeTruthy();
});

test("change ship position", () => {
  let ship = Ship(3, 1, 2, true);
  ship.changePosition(2, 3, false);
  expect(ship.getCoord()).toEqual([2, 3]);
  expect(ship.getOrientation()).toBeFalsy();
  ship.changePosition(5, 1, true);
  expect(ship.getCoord()).toEqual([5, 1]);
  expect(ship.getOrientation()).toBeTruthy();
});
