import React from "react";
import "../styles/Cell.css";

const Cell = props => {
  return (
    <div
      className={`cell ${props.style}`}
      onClick={props.clickCell ? () => props.clickCell(props.pos) : null}
    ></div>
  );
};

export default Cell;
