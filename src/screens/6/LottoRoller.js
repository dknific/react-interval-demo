import { useState } from 'react';
import './LottoRoller.css';

function LottoRoller() {
  const [lottoNums, setLottoNums] = useState([1,2,3,4]);
  const [myInterval, setMyInterval] = useState();
  const [isRolling, setIsRolling] = useState(false);
  const [isInitialRoll, setIsInitialRoll] = useState(true);

  function makeRandoms() {
    let output = [];
    for (let i = 0; i < 4; i++) {
      const randNum = Math.floor(Math.random() * 10);
      output.push(randNum);
    }
    setLottoNums(output);
  }

  function startLottery() {
    const myJsInterval = setInterval(() => {
      makeRandoms();
    }, 100);
    setMyInterval(myJsInterval);
    setIsRolling(true);
  }

  function stopLottery() {
    clearInterval(myInterval);
    setIsRolling(false);
    setIsInitialRoll(false);
  }

  return (
    <div className="lotto-roller">
      <h1>A Lottery Roller</h1>
      <p>Click 'go' and 'stop' to spin the wheel!</p>
      <p>'Go' is linked directly to the <code>setInterval()</code> function, and clicking 'stop' fires off <code>clearInterval()</code>.</p>
      <p>3412 is the magic number. Can you land on it?!</p>
      <div className="divider" />
      <div className="roller">
        <p>{lottoNums[0]}</p>
        <p>{lottoNums[1]}</p>
        <p>{lottoNums[2]}</p>
        <p>{lottoNums[3]}</p>
      </div>
      <div className="roller-buttons">
        <button className={isRolling ? "stop-button" : "disabled"} onClick={() => stopLottery()} disabled={!isRolling}>stop</button>
        <button className={isRolling ? "disabled" : "start-button"} onClick={() => startLottery()} disabled={isRolling}>go</button>
      </div>
      {!isInitialRoll && (
      <p className="game-hint"><i>HINT: You probably can't land on 3412 lol.</i></p>
      )}
    </div>
  );
}

export default LottoRoller;
