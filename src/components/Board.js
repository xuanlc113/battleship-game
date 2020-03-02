import React from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import "../styles/Board.css";

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

  function renderShips() {
    props.board.ships.map(ship => <Ship />);
  }

  return (
    <div className="board">
      {renderBoard()}
      {/* {renderShips()} */}
    </div>
  );
};

export default Board;
