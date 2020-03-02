import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { Gameboard } from "./utils/Gameboard";

function App() {
  const [board, setBoard] = useState(Gameboard());
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
