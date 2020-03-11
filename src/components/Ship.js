import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/ItemTypes";

const VerticalShip = styled.div`
  position: absolute;
  left: ${props => props.coord[0] * 40}px;
  top: ${props => props.coord[1] * 40}px;
  width: 40px;
  height: ${props => props.length * 40}px;
  border: 2px royalblue solid;
  background: rgba(245, 245, 245, 0.6);
  z-index: ${props => (props.isDragging ? -1 : 2)};
  cursor: move;
`;

const HorizontalShip = styled.div`
  position: absolute;
  left: ${props => props.coord[0] * 40}px;
  top: ${props => props.coord[1] * 40}px;
  width: ${props => props.length * 40}px;
  height: 40px;
  border: 2px royalblue solid;
  background: rgba(245, 245, 245, 0.6);
  z-index: ${props => (props.isDragging ? -1 : 2)};
  cursor: move;
`;

const Ship = props => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.SHIP,
      id: props.ship.id,
      length: props.ship.length,
      x: props.ship.getCoord()[0],
      y: props.ship.getCoord()[1],
      orientation: props.ship.getOrientation()
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  if (props.ship.getOrientation()) {
    return (
      <VerticalShip
        ref={drag}
        length={props.ship.length}
        coord={props.ship.getCoord()}
        start={props.start}
        isDragging={isDragging}
      ></VerticalShip>
    );
  }
  return (
    <HorizontalShip
      ref={drag}
      length={props.ship.length}
      coord={props.ship.getCoord()}
      start={props.start}
      isDragging={isDragging}
    ></HorizontalShip>
  );
};

export default Ship;
