import React, { useState } from "react";
import { Gameboard } from "./Gameboard";

const Board = () => {
  const [board, setBoard] = useState(Gameboard().board);
  return <div>{board.map()}</div>;
};

export default Board;
