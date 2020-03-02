import React from "react";
import "./App.css";
import Board from "./Board";

function App() {
  const [board, setBoard] = useState(Gameboard());
  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
