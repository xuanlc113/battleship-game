import React, { useState, useEffect } from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import { includePos } from "../utils/helper";
import "../styles/Board.css";

const ComputerBoard = props => {
  const [, setRender] = useState(true);

  useEffect(() => {
    if (!props.turn) {
      console.log("ye");
      props.next();
    }
  }, [props.turn]);

  //useeffect
  function clickCell(pos) {
    props.board.receiveAttack(pos);
    setRender(prevState => !prevState);
    checkWin();
  }

  function checkWin() {
    if (props.board.allShipsSunk()) {
      console.log("win");
    } else {
      props.next();
    }
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
          cell.push(<Cell style="empty" />);
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
      {props.children}
    </div>
  );
};

export default ComputerBoard;
