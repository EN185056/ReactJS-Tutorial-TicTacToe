import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); // each time a player moves, this boolean will flip to determine which player goes next and saves the game's state
  const [squares, setSquares] = useState(Array(9).fill(null)); // creates an array with 9 elements and sets each to null

  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) { // checks to make sure that the square tile does not already have a mark or if a winner has been decided
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />;
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />;
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />;
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />;
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />;
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />;
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />;
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />;
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />;
      </div>
    </>
  );
}


//===[ NOT COMPONENTS ]===

function checkWinner(squares) {
  /*
  Iteratively checks all 9 valid ways to win in Tic-Tac-Toe
  */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }
  return null;
}