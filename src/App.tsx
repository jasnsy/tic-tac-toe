import React from "react";
import TicTacToe from "./components/TicTacToe"
import './index.css'

const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Tic Tac Toe</h1>
      </div>
      <TicTacToe />
    </div>
  )
}

export default App;
