import React from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import "../styles/Board.css";

const Board = props => {
  function renderBoard() {
    let cell = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (props.board.hit.includes([i, j])) {
          cell.push(<Cell style="hit" />);
        } else if (props.board.miss.includes([i, j])) {
          cell.push(<Cell style="miss" />);
        } else {
          cell.push(<Cell style="empty" />);
        }
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
