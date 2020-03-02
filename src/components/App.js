import React from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState(Gameboard());
  return (
    <div>
      <Board ships={board.ships} />
    </div>
  );
}

export default App;
