import React, { useState } from "react";
import Board from "./Board";
import { Gameboard } from "../utils/Gameboard";
import "../styles/Game.css";

const Game = () => {
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  return (
    <div className="play-area">
      <Board board={computerBoard} />
      <Board board={playerBoard} />
    </div>
  );
};

export default Game;
