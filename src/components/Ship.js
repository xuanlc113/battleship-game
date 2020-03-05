import React from "react";
import styled from "styled-components";

const VerticalShip = styled.div`
  position: absolute;
  left: ${props => props.coord[0] * 40}px;
  top: ${props => props.coord[1] * 40}px;
  width: 40px;
  height: ${props => props.length * 40}px;
  border: 1px black solid;
  background: lightblue;
  z-index: -1;
`;
const HorizontalShip = styled.div`
  position: absolute;
  left: ${props => props.coord[0] * 40}px;
  top: ${props => props.coord[1] * 40}px;
  width: ${props => props.length * 40}px;
  height: 40px;
  border: 1px black solid;
  background: lightblue;
  z-index: -1;
`;

const Ship = props => {
  if (props.ship.getOrientation()) {
    return (
      <VerticalShip
        length={props.ship.length}
        coord={props.ship.getCoord()}
      ></VerticalShip>
    );
  }
  return (
    <HorizontalShip
      length={props.ship.length}
      coord={props.ship.getCoord()}
    ></HorizontalShip>
  );
};

export default Ship;
