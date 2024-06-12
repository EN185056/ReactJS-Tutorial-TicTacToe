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

  const winner = checkWinner(squares, sideSize);

  function handleClick(i) {
    if (squares[i] || winner) { // checks to make sure that the square tile does not already have a mark or if a winner has been decided
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = (xIsNext) ? "X" : "O";
    onPlay(nextSquares);
  }

  let status;
  if (winner) {
    status = "The winner is " + winner + "!";
  } else if (squares.every(val => val != null)) {
    status = "You have achieved a TIE!"
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O")
  }

  function generateSquareBoard(sideSize) {
    const row = []
    for (let i = 0; i < sideSize; i++) {
      const col = []
      for (let j = sideSize * i; j < (sideSize * (i + 1)); j++) {
        col.push(<Square key={j} value={squares[j]} onSquareClick={() => handleClick(j)} />);
      }
      row.push(<div key={i} className="board-row">{col}</div>);
    }
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
  const sideSize = 5;
  const [history, setHistory] = useState([Array(sideSize ** 2).fill(null)]);
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} sideSize={sideSize}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


//===[ NOT COMPONENTS ]===

function checkWinner(squares, sideSize) {
  /*
  Iteratively checks all valid ways to win in Tic-Tac-Toe
  */
  let arr;

  // Check each row
  const allEqual = arr => arr.every(val => val != null && val === arr[0]);

  for (let i = 0; i < squares.length; i += sideSize) {
    arr = squares.slice(i, i + sideSize);
    if (allEqual(arr)) {
      return arr[0];
    }
  }

  // Check each column
  for (let i = 0; i < sideSize; i++) {
    arr = [];
    for (let j = i; j < squares.length; j += sideSize) {
      arr.push(squares[j]);
    }
    if (allEqual(arr)) {
      return arr[0];
    }
  }

  // Check topleft-botright diagonal
  for (let i = 0; i < sideSize; i ++) {
    arr[i] = squares[i * (sideSize + 1)]
  }
  if (allEqual(arr)) {
    return arr[0];
  }

  // Check topright-botleft diagonal
  for (let i = 0; i < sideSize; i ++) {
    arr[i] = squares[(i + 1) * (sideSize - 1)]
  }
  if (allEqual(arr)) {
    return arr[0];
  }

  // Neither player has won
  return null;
}