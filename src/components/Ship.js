import React from "react";
import styled from "styled-components";

const VerticalShip = styled.div`
  width: 40px;
  height: ${props => props.length * 40}px;
  border: 1px black solid;
`;
const HorizontalShip = styled.div`
  width: ${props => props.length * 40}px;
  height: 40px;
  border: 1px black solid;
`;

const Ship = props => {
  console.log(props.ship.length);
  if (props.ship.orientation) {
    return <VerticalShip length={props.ship.length}></VerticalShip>;
  }
  return <HorizontalShip length={props.ship.length}></HorizontalShip>;
};

export default Ship;
