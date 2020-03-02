///orientation true = vertical, false = horizontal
function Ship(length, x, y, orientation) {
  let coord = [x, y];
  const containPos = pos => {
    if (orientation) {
      if (pos[0] === x && pos[1] >= y && pos[1] <= y + length) {
        return true;
      }
      return false;
    }
    if (pos[1] === y && pos[0] >= x && pos[0] <= x + length) {
      return true;
    }
    return false;
  };
  const hit = pos => {
    if (coord.includes(pos)) {
      coord = coord.filter(i => i !== pos);
    }
  };
  const isSunk = () => coord.length === 0;
  return { length, hit, isSunk, containPos };
}

export { Ship };
