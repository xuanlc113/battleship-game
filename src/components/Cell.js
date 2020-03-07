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

function canMoveShip(x, y, length, orientation) {
  if (orientation) {
    if (y + length - 1 > 9 || y < 0) {
      return false;
    }
  } else {
    if (x + length - 1 > 9 || x < 0) {
      return false;
    }
  }
  return true;
}

const Cell = props => {
  const [, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      const { x, y } = getNewCoords(offset, item);
      props.board.moveShip(item.id, x, y, true);
      return undefined;
    },
    canDrop: (item, monitor) => {
      console.log(props.board);
      const delta = monitor.getDifferenceFromInitialOffset();
      const { x, y } = getNewCoords(delta, item);
      return canMoveShip(x, y, item.length, item.orientation);
      // return true;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
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
