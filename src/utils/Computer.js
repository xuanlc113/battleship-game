function Computer() {
  let history = [];
  let surrounding = false;
  let toHit = [];
  const attack = (board, pos) => {
    if (surrounding) {
      surrounding = false;
    }
    if (toHit.length > 0) {
      let toHitPos = toHit.shift();
      board.receiveAttack(toHitPos);
      history.push(toHitPos);
    } else {
      attackCoord(board, pos);
    }
  };

  const attackCoord = (board, pos) => {
    board.receiveAttack(pos);
    history.push(pos);
    if (board.containShip(pos) !== null) {
      surrounding = true;
      toHit = searchSurrounding(board, pos);
      if (toHit.length === 0) {
        surrounding = false;
      }
    }
  };

  const searchSurrounding = (board, pos) => {
    let [coords, present] = verticalSearch(board, pos);
    if (present) {
      return coords;
    }
    [coords, present] = horizontalSearch(board, pos);
    if (present) {
      return coords;
    }
    return [];
  };

  const verticalSearch = (board, pos) => {
    let coords = [];
    let [x, y] = pos;
    let upPos = [x, y - 1];
    let downPos = [x, y + 1];
    let present = false;
    while (board.containShip(upPos) !== null) {
      if (!inArr(history, upPos)) {
        coords.push(upPos);
        present = true;
      }
      upPos = [x, upPos[1] - 1];
    }
    if (upPos[1] > -1 && !inArr(history, upPos)) {
      coords.push(upPos);
    }
    while (board.containShip(downPos) !== null) {
      if (!inArr(history, downPos)) {
        coords.push(downPos);
        present = true;
      }
      downPos = [x, downPos[1] + 1];
    }
    if (downPos[1] < 10 && !inArr(history, downPos)) {
      coords.push(downPos);
    }
    return [coords, present];
  };

  const horizontalSearch = (board, pos) => {
    let coords = [];
    let [x, y] = pos;
    let leftPos = [x - 1, y];
    let rightPos = [x + 1, y];
    let present = false;
    while (board.containShip(leftPos) !== null) {
      if (!inArr(history, leftPos)) {
        coords.push(leftPos);
        present = true;
      }
      leftPos = [leftPos[0] - 1, y];
    }
    if (leftPos[0] > -1 && !inArr(history, leftPos)) {
      coords.push(leftPos);
    }
    while (board.containShip(rightPos) !== null) {
      if (!inArr(history, rightPos)) {
        coords.push(rightPos);
        present = true;
      }
      rightPos = [rightPos[0] + 1, y];
    }
    if (rightPos[0] < 10 && !inArr(history, rightPos)) {
      coords.push(rightPos);
    }
    return [coords, present];
  };

  const randomCoords = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (inArr(history, [x, y])) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    return [x, y];
  };

  const getHistory = () => history;
  return {
    getHistory,
    attack,
    attackCoord,
    randomCoords,
    verticalSearch,
    horizontalSearch
  };
}

function inArr(arr, pos) {
  for (let i of arr) {
    if (i[0] === pos[0] && i[1] === pos[1]) {
      return true;
    }
  }
  return false;
}

export default Computer;
