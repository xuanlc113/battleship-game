import React, { useState, useEffect, useRef } from "react";
import PlayerBoard from "./PlayerBoard";
import ComputerBoard from "./ComputerBoard";
import "../styles/Game.css";
import { randomizeBoard } from "../utils/helper";
import Computer from "../utils/Computer";

const Game = () => {
  const [start, setStart] = useState(false);
  const [computerBoard, setComputerBoard] = useState(randomizeBoard());
  const [playerBoard, setPlayerBoard] = useState(randomizeBoard());
  const [computer, setComputer] = useState(Computer());
  const [turn, setTurn] = useState(false);
  const newGameRef = useRef(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    if (newGameRef.current) {
      if (winner === "") {
        if (!turn) {
          setTimeout(() => {
            computer.attack(computerBoard, computer.randomCoords());
            setTurn(true);
          }, 200);
        }
      }
    } else {
      newGameRef.current = true;
    }
    checkWin();
  }, [turn]);

  function checkWin() {
    if (computerBoard.allShipsSunk()) {
      setWinner("computer");
      setTurn(false);
    }
    if (playerBoard.allShipsSunk()) {
      setWinner("player");
      setTurn(false);
    }
  }

  function gameStatus() {
    if (start) {
      setComputerBoard(randomizeBoard());
      setPlayerBoard(randomizeBoard());
      setTurn(false);
      setWinner("");
      setComputer(Computer());
      newGameRef.current = false;
    } else {
      setTurn(true);
    }
    setStart(prevState => !prevState);
  }

  function random() {
    setComputerBoard(randomizeBoard());
    setPlayerBoard(randomizeBoard());
  }

  return (
    <div className="game">
      <h1>Battleship</h1>
      <div className="game-status">
        <button onClick={() => gameStatus()}>
          {start ? "New Game" : "Start"}
        </button>
        <p>
          {winner !== ""
            ? `${winner} wins`
            : start
            ? turn
              ? "your turn"
              : " computer turn"
            : "setup"}
        </p>
        <button onClick={() => random()} disabled={start}>
          random
        </button>
      </div>
      <div className="play-area">
        {start ? (
          <ComputerBoard
            board={computerBoard}
            next={() => setTurn(prevState => !prevState)}
            turn={turn}
            start={start}
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
