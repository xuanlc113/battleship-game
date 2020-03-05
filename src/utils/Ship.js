///orientation true = vertical, false = horizontal
function Ship(length, x, y, orientation, id) {
  let coord = [x, y];
  let damage = 0;
  const containPos = pos => {
    if (orientation) {
      if (pos[0] === x && pos[1] >= y && pos[1] < y + length) {
        return true;
      }
      return false;
    }
    if (pos[1] === y && pos[0] >= x && pos[0] < x + length) {
      return true;
    }
    return false;
  };
  const hit = pos => {
    if (containPos(pos)) {
      damage++;
    }
  };
  const isSunk = () => length === damage;
  return { length, hit, isSunk, containPos, orientation, coord, id };
}

export { Ship };
