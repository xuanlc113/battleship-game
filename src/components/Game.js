import React, { useState } from "react";
import { Gameboard } from "../utils/Gameboard";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import "../styles/Game.css";

const Game = () => {
  const [start, setStart] = useState(false);
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [turn, setTurn] = useState(true);

  function gameStatus() {
    setStart(prevState => !prevState);
  }

  return (
    <div className="game">
      <button onClick={() => gameStatus()}>
        {start ? "New Game" : "Start"}
      </button>
      <div className="play-area">
        {start ? (
          <>
            <ComputerBoard
              board={computerBoard}
              next={() => setTurn(prevState => !prevState)}
              turn={turn}
            >
              <div className="click-guard"></div>
            </ComputerBoard>
            <PlayerBoard
              board={playerBoard}
              next={() => setTurn(prevState => !prevState)}
            />
          </>
        ) : (
          <>
            <ComputerBoard
              board={computerBoard}
              next={() => setTurn(prevState => !prevState)}
            />
            <PlayerBoard
              board={playerBoard}
              next={() => setTurn(prevState => !prevState)}
            >
              <div className="click-guard"></div>
            </PlayerBoard>
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
