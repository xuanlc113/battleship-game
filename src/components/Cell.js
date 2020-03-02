import React from "react";
import "../styles/Cell.css";

const Cell = props => {
  return <div className={`cell ${props.style}`}></div>;
};

export default Cell;
