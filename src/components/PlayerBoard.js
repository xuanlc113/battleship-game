import React, { useState } from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import { includePos } from "../utils/helper";
import "../styles/Board.css";

const PlayerBoard = props => {
  const [, setRender] = useState(true);

  function clickCell(pos) {
    console.log(pos);
    props.board.receiveAttack(pos);
    setRender(prevState => !prevState);
    props.next();
  }

  function renderBoard() {
    let cell = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (includePos(props.board.hit, [j, i])) {
          cell.push(<Cell style="hit" />);
        } else if (includePos(props.board.miss, [j, i])) {
          cell.push(<Cell style="miss" />);
        } else {
          cell.push(
            <Cell
              style="empty"
              clickCell={clickCell}
              pos={[j, i]}
              board={props.board}
            />
          );
        }
      }
    }
    return cell;
  }

  //remove to hide ships
  function renderShips() {
    return props.board.getShips().map(ship => <Ship ship={ship} />);
  }

  return (
    <div className="board">
      {renderBoard()}
      {renderShips()}
      {!props.turn && props.children}
    </div>
  );
};

export default PlayerBoard;
