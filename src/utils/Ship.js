///orientation true = vertical, false = horizontal
function Ship(length, x, y, orientation, id) {
  let coord = [x, y];
  let damage = 0;
  let ori = orientation;
  const containPos = pos => {
    let [x, y] = getCoord();
    if (getOrientation()) {
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

  const changePosition = (x, y, orientation) => {
    coord = [x, y];
    ori = orientation;
  };

  const getCoord = () => coord;

  const getAllCoordsAtNewPos = (x, y) => {
    let allCords = [];
    if (orientation) {
      for (let i = 0; i < length; i++) {
        allCords.push([x, y + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        allCords.push([x + i, y]);
      }
    }
    return allCords;
  };

  const getOrientation = () => ori;
  return {
    length,
    hit,
    isSunk,
    containPos,
    getOrientation,
    id,
    changePosition,
    getCoord,
    getAllCoordsAtNewPos
  };
}

export { Ship };
