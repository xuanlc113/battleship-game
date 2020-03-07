import React from "react";
import "../styles/Cell.css";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

function getNewCoords(offset, item) {
  const y = 40 * item.y;
  const x = 40 * item.x;

  const row = Math.round((y + offset.y) / 40);
  const col = Math.round((x + offset.x) / 40);
  return { row, col };
}

const Cell = props => {
  const [, drop] = useDrop({
    accept: ItemTypes.SHIP,
    drop: (item, monitor) => {
      const offset = monitor.getDifferenceFromInitialOffset();
      const { row, col } = getNewCoords(offset, item);
      props.board.moveShip(item.id, col, row, true);
      return undefined;
    },
    canDrop: (item, monitor) => {
      // const delta = monitor.getDifferenceFromInitialOffset();

      // const { row, col } = getNewCoords(delta, item);
      return true;
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
