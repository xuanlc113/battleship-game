import React, { useState } from "react";
import { Gameboard } from "../utils/Gameboard";
import "../styles/Game.css";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";

const Game = () => {
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [turn, setTurn] = useState(true);

  return (
    <div className="play-area">
      <ComputerBoard
        board={computerBoard}
        next={() => setTurn(prevState => !prevState)}
      />
      <PlayerBoard
        board={playerBoard}
        next={() => setTurn(prevState => !prevState)}
      />
    </div>
  );
};

export default Game;
