import React, { useReducer } from "react";

const Board = props => {
  function renderBoard() {
    let cell = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        cell.push(<Cell />);
      }
    }
    return cell;
  }
  return <div>{renderBoard()}</div>;
};

export default Board;
