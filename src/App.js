import React from "react";
import "./App.css";
import Game from "./components/Game";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

function App() {
  return (
    <DndProvider backend={Backend}>
      <Game />
    </DndProvider>
  );
}

export default App;
