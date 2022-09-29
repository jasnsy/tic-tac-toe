import React, { useState } from "react";
import "./styles/TicTacToe.css";

interface CombosType {
  [key: string]: number[][]
}

interface CellProps {
  num: number
}

const TicTacToe = () => {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState('')
  const [tie, setTie] = useState(false)

  const combos: CombosType = {
    accross: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ],
    down: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ],
    diagonal: [
      [0, 4, 8],
      [2, 4, 6]
    ]
  };

  const checkWinner = (squares: Array<string>) => {
    
    for (let combo in combos) {
      combos[combo].forEach((pattern: Array<number>) => {
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
         ) {
          return;
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]])
        } else if (!squares.includes('')) {
          setTie(true);
        }
      })
    }
  }

  const handleClick = (num: number) => {
    if (cells[num] !== '' || winner) return;
    let squares = [ ...cells ]

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o')
    } else {
      squares[num] = 'o';
      setTurn('x')
    }

    setCells(squares);
    checkWinner(squares);
  }

  const handleRestart = () => {
    setWinner('')
    setTie(false)
    setCells(Array(9).fill(''))
  }

	const Cell: React.FC<CellProps> = ({num}) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
    <>
      <div className="board">
        <table>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </div>
      {winner && (
        <div className="winner">
          <p>{winner} is the winner!</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </div>
      )}
      {tie && (
        <div className="winner">
          <p>Game Tied!</p>
          <button onClick={() => handleRestart()}>Play Again</button>
        </div>
      )}
    </>
	);
};

export default TicTacToe;
