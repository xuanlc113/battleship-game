import React from "react";
import "../styles/Cell.css";

const Cell = props => {
  return (
    <div
      className={`cell ${props.style}`}
      onClick={() => props.clickCell(props.pos)}
    ></div>
  );
};

export default Cell;
