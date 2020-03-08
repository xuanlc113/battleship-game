function Computer() {
  let hit = [];
  const attack = board => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    while (inArr(hit, x, y)) {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }
    board.receiveAttack([x, y]);
    hit.push([x, y]);
  };
  return { attack };
}

function inArr(arr, x, y) {
  for (let i of arr) {
    if (i[0] === x && i[1] === y) {
      return true;
    }
  }
  return false;
}

export default Computer;
