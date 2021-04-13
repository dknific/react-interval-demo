import { useEffect, useState } from 'react';
import './SquareRandomizer.css';

function SquareRandomizer() {
  const clearedGameBoard = [0,0,0,0];
  const [squareTotals, setSquareTotals] = useState(clearedGameBoard);
  const [gameBoard, setGameBoard] = useState(clearedGameBoard);
  const [jsInterval, setJsInterval] = useState();

  function createInterval() {
    setJsInterval(
      setInterval(() => { updateGameBoard(); }, 1000)
    )
  }

  function destroyInterval() {
    setJsInterval();
    clearInterval(jsInterval);
  }

  function generateRandoms() {
    const randomNumbers = [];
    for (let i = 0; i < 4; i++) randomNumbers.push(Math.random());
    return randomNumbers;
  }

  function updateGameBoard() {
    let newGameBoard = [0,0,0,0];
    const randomNumbers = generateRandoms();
    const largestNum = Math.max(...randomNumbers);
    const indexOfLargest = randomNumbers.indexOf(largestNum);

    let newSquareTotals = squareTotals;
    newSquareTotals[indexOfLargest] += 1;
    setSquareTotals(newSquareTotals);
    newGameBoard[indexOfLargest] = 1;
    setGameBoard(newGameBoard);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="timer-one">
      <h1>Random Item Selection</h1>
      <p>Click the start button to see how <code>setInterval()</code> can be used to pick a random square every second.</p>
      <div className="divider" />
      {!jsInterval && (
        <button onClick={() => createInterval()}>Start Random Selection</button>
      )}
      {jsInterval && (
        <button onClick={() => destroyInterval()}>Pause Selection</button>
      )}

      <div className="gameboard">
        <div className="top-row">
          <div className={`board-square square-1 ${gameBoard[0] === 1 ? 'active' : ''}`}>{squareTotals[0]}</div>
          <div className={`board-square square-2 ${gameBoard[1] === 1 ? 'active' : ''}`}>{squareTotals[1]}</div>
        </div>
        <div className="bottom-row">
          <div className={`board-square square-3 ${gameBoard[2] === 1 ? 'active' : ''}`}>{squareTotals[2]}</div>
          <div className={`board-square square-4 ${gameBoard[3] === 1 ? 'active' : ''}`}>{squareTotals[3]}</div>
        </div>
      </div>

      <p><i>The number in each square represents how many times the computer has picked that square.</i></p>
    </div>
  );
}

export default SquareRandomizer;
