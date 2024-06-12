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


export function Board({xIsNext, squares, onPlay, sideSize}) {

  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) { // checks to make sure that the square tile does not already have a mark or if a winner has been decided
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = checkWinner(squares);
  let status = (winner) ? ("Winner: " + winner) : ("Next Player: " + (xIsNext ? "X" : "O"));

  function generateSquareBoard(sideSize) {
    const row = []
    for (let i = 0; i < sideSize; i++) {
      // console.log("ROW START\ni = " + i)
      const col = []
      for (let j = sideSize * i; j < (sideSize * (i + 1)); j++) {
        // console.log("j = " + j);
        col.push(<Square key={j} value={squares[j]} onSquareClick={() => handleClick(j)} />);
      }
      row.push(<div key={i} className="board-row">{col}</div>);
    }
    // console.log(board);
    return row;
  }

  return (
    <>
      <div className='status'>{status}</div>
      {
      generateSquareBoard(sideSize)
      }
    </>
  );
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description = (move > 0) ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} sideSize={3}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
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