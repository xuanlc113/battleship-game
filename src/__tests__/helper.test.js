import { includePos } from "../utils/helper";

test("include position", () => {
  let arr = [
    [1, 0],
    [2, 0],
    [0, 3]
  ];
  expect(includePos(arr, [2, 0])).toBeTruthy();
  expect(includePos(arr, [0, 3])).toBeTruthy();
  expect(includePos(arr, [9, 0])).toBeFalsy();
});
