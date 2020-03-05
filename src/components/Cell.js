import React from "react";
import "../styles/Cell.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

const Cell = props => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: item => {
      console.log("drp");
      props.board.moveShip(item.id, props.pos[0], props.pos[1], true);
      console.log(props.board.getShips());
    },
    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  });
  return (
    <div
      ref={drop}
      className={`cell ${props.style}`}
      onClick={props.clickCell ? () => props.clickCell(props.pos) : null}
    ></div>
  );
};

export default Cell;
