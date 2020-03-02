import React, { useState, useEffect } from "react";
import Ship from "./Ship";
import Cell from "./Cell";
import "../styles/Board.css";

const Board = props => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    console.log("touvh");
  }, [props.board.hit, props.board.miss]);

  function clickCell(pos) {
    props.board.receiveAttack(pos);
    setRender(prevState => !prevState);
  }

  function renderBoard() {
    let cell = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (props.board.hit.includes([i, j])) {
          cell.push(<Cell style="hit" pos={[i, j]} clickCell={clickCell} />);
        } else if (props.board.miss.includes([i, j])) {
          cell.push(<Cell style="miss" pos={[i, j]} clickCell={clickCell} />);
        } else {
          cell.push(<Cell style="empty" pos={[i, j]} clickCell={clickCell} />);
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
