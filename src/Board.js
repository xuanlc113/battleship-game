import React, { useReducer } from "react";
import { Gameboard } from "./Gameboard";

const Board = () => {
  const [board, dispatch] = useReducer(reducer, initialState);
  return <div>{board.map()}</div>;
};

export default Board;
