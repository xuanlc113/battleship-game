import React, { useState, useEffect, useRef } from "react";
import { Gameboard } from "../utils/Gameboard";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import "../styles/Game.css";

const Game = () => {
  const [start, setStart] = useState(false);
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  const [turn, setTurn] = useState(false);
  const newGameRef = useRef(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (newGameRef.current) {
      if (winner === "") {
        if (!turn) {
          computerBoard.receiveAttack([
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10)
          ]);
          setTurn(true);
        }
      }
    } else {
      newGameRef.current = true;
    }
    checkWin();
  }, [turn]);

  function checkWin() {
    if (computerBoard.allShipsSunk()) {
      console.log("player win");
      setWinner("player");
      setTurn(false);
    }
    if (playerBoard.allShipsSunk()) {
      console.log("computer win");
      setWinner("computer");
      setTurn(false);
    }
  }

  function gameStatus() {
    if (start) {
      setComputerBoard(Gameboard());
      setPlayerBoard(Gameboard());
      setTurn(false);
      setWinner("");
      newGameRef.current = false;
    } else {
      setTurn(true);
    }
    setStart(prevState => !prevState);
  }

  return (
    <div className="game">
      <button onClick={() => gameStatus()}>
        {start ? "New Game" : "Start"}
      </button>
      <div className="play-area">
        {start ? (
          <ComputerBoard
            board={computerBoard}
            next={() => setTurn(prevState => !prevState)}
            turn={turn}
          >
            <div className="click-guard"></div>
          </ComputerBoard>
        ) : (
          <ComputerBoard
            board={computerBoard}
            next={() => setTurn(prevState => !prevState)}
          />
        )}
        <PlayerBoard
          board={playerBoard}
          next={() => setTurn(prevState => !prevState)}
          turn={turn}
        >
          <div className="click-guard"></div>
        </PlayerBoard>
      </div>
    </div>
  );
};

export default Game;
