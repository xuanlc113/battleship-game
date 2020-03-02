import React from "react";
import "./App.css";
import Board from "./Board";
import { randomizeBoard } from "../utils/helper";

function App() {
  const [board, setBoard] = useState(Gameboard());
  return (
    <div>
      <Board ships={ships} />
    </div>
  );
}

export default App;

//App
//instantiate gameboard and ships

//Gameboard take gameboard obj and array of ship obj
//10x10 grid
//Array of Ships
//

//Ship
//coordinates
//sink
