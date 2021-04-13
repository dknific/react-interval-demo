import { useEffect, useState } from 'react';
import './ColorBlocks.css';

function ColorBlocks() {
  const [outterGroupMap, setOutterGroupMap] = useState([0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [innerGroupMap, setInnerGroupMap] = useState([0,0,0,0,0,1,0,0]);

  function changeOutterMap() {
    let newMap = new Array(16).fill(0);
    const oldIndex = outterGroupMap.indexOf(1);

    if (oldIndex === 15) {
      newMap[0] = 1;
    } else {
      newMap[oldIndex + 1] = 1;
    }
    setOutterGroupMap(newMap);
  }

  function changeInnerMap() {
    let newMap = new Array(8).fill(0);
    const oldIndex = innerGroupMap.indexOf(1);

    if (oldIndex === 0) {
      newMap[7] = 1;
    } else {
      newMap[oldIndex - 1] = 1;
    }
    setInnerGroupMap(newMap);
  }

  function updateMaps() {
    changeOutterMap();
    changeInnerMap();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateMaps();
    }, 500);
    return () => clearInterval(interval);
  });

  return (
    <div className="timer-two">
      <h1>CSS + React Animations</h1>
      <p>In this example, <code>setInterval()</code> fires off a function every 500ms that "moves" a CSS class around, making the squares turn white.</p>
      <div className="divider" />
      <div className="gameboard-two">
        <div className="row-0">
          <div className={`board-square-two square-1 group-outer ${outterGroupMap[0] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-2 group-outer ${outterGroupMap[1] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-3 group-outer ${outterGroupMap[2] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-4 group-outer ${outterGroupMap[3] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-5 group-outer ${outterGroupMap[4] === 1 ? 'tail' : ''}`}></div>
        </div>
        <div className="row-1">
          <div className={`board-square-two square-6 group-outer ${outterGroupMap[15] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-7 group-mid ${innerGroupMap[0] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-8 group-mid ${innerGroupMap[1] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-9 group-mid ${innerGroupMap[2] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-10 group-outer ${outterGroupMap[5] === 1 ? 'tail' : ''}`}></div>
        </div>
        <div className="row-2">
          <div className={`board-square-two square-11 group-outer ${outterGroupMap[14] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-12 group-mid ${innerGroupMap[7] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-13 group-center`}></div>
          <div className={`board-square-two square-14 group-mid ${innerGroupMap[3] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-15 group-outer ${outterGroupMap[6] === 1 ? 'tail' : ''}`}></div>
        </div>
        <div className="row-3">
          <div className={`board-square-two square-16 group-outer ${outterGroupMap[13] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-17 group-mid ${innerGroupMap[6] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-18 group-mid ${innerGroupMap[5] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-19 group-mid ${innerGroupMap[4] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-20 group-outer ${outterGroupMap[7] === 1 ? 'tail' : ''}`}></div>
        </div>
        <div className="row-4">
          <div className={`board-square-two square-21 group-outer ${outterGroupMap[12] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-22 group-outer ${outterGroupMap[11] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-23 group-outer ${outterGroupMap[10] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-24 group-outer ${outterGroupMap[9] === 1 ? 'tail' : ''}`}></div>
          <div className={`board-square-two square-25 group-outer ${outterGroupMap[8] === 1 ? 'tail' : ''}`}></div>
        </div>
      </div>
    </div>
  );
}

export default ColorBlocks;
