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
  border: 1px black solid;
  background: lightblue;
  z-index: ${props => (props.start ? -1 : 2)};
`;
const HorizontalShip = styled.div`
  position: absolute;
  left: ${props => props.coord[0] * 40}px;
  top: ${props => props.coord[1] * 40}px;
  width: ${props => props.length * 40}px;
  height: 40px;
  border: 1px black solid;
  background: lightblue;
  z-index: ${props => (props.start ? -1 : 2)};
`;

// opacity: ${props => (props.drag ? 0.5 : 1)};

const Ship = props => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.SHIP, id: props.ship.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  if (props.ship.getOrientation()) {
    return (
      <VerticalShip
        ref={drag}
        // drag={isDragging}
        length={props.ship.length}
        coord={props.ship.getCoord()}
        start={props.start}
      ></VerticalShip>
    );
  }
  return (
    <HorizontalShip
      ref={drag}
      // drag={isDragging}
      length={props.ship.length}
      coord={props.ship.getCoord()}
      start={props.start}
    ></HorizontalShip>
  );
};

export default Ship;
