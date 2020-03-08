import React from "react";
import "../styles/Cell.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

function getNewCoords(offset, item) {
  let x = 40 * item.x;
  let y = 40 * item.y;

  x = Math.round((x + offset.x) / 40);
  y = Math.round((y + offset.y) / 40);
  return { x, y };
}

const Cell = props => {
  const [, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      const { x, y } = getNewCoords(offset, item);
      props.board.moveShip(item.id, x, y, item.orientation);
      return undefined;
    },
    canDrop: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      const { x, y } = getNewCoords(offset, item);
      return props.board.canMoveShip(item.id, x, y);
    }
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
