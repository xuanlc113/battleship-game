import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { Gameboard } from "./utils/Gameboard";

function App() {
  const [computerBoard, setComputerBoard] = useState(Gameboard());
  const [playerBoard, setPlayerBoard] = useState(Gameboard());
  return (
    <div className="play-area">
      <Board board={computerBoard} />
      <Board board={playerBoard} />
    </div>
  );
}

export default App;
