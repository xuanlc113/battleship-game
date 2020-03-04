import React, { useState } from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import { includePos } from "../utils/helper";
import "../styles/Board.css";

const Board = props => {
  const [, setRender] = useState(true);

  function clickCell(pos) {
    props.board.receiveAttack(pos);
    setRender(prevState => !prevState);
  }

  function renderBoard() {
    let cell = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (includePos(props.board.hit, [i, j])) {
          cell.push(<Cell style="hit" pos={[i, j]} />);
        } else if (includePos(props.board.miss, [i, j])) {
          cell.push(<Cell style="miss" pos={[i, j]} />);
        } else {
          cell.push(<Cell style="empty" pos={[i, j]} clickCell={clickCell} />);
        }
      }
    }
    return cell;
  }

  function renderShips() {
    return props.board.ships.map(ship => <Ship ship={ship} />);
  }

  return (
    <div className="board">
      {renderBoard()}
      {renderShips()}
    </div>
  );
};

export default Board;
