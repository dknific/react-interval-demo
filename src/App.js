import { useState } from 'react';
import IntroScreen from './screens/1/IntroScreen';
import ExplainScreen from './screens/2/ExplainScreen';
import SquareRandomizer from './screens/3/SquareRandomizer';
import ColorBlocks from './screens/4/ColorBlocks';
import Typewriter from './screens/5/Typewriter';
import LottoRoller from './screens/6/LottoRoller';
import OutroScreen from './screens/7/OutroScreen';

import './App.css';

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  function increasePage() {
    if (pageNumber < 7) {
      const nextPage = pageNumber + 1;
      setPageNumber(nextPage);
    }
  }

  function decreasePage() {
    if (pageNumber > 1) {
      const prevPage = pageNumber - 1;
      setPageNumber(prevPage);
    }
  }

  function restart() {
    setPageNumber(1);
  }

  function renderPage(pageNum) {
    switch(pageNum) {
      case 1:
        return <IntroScreen />;
      case 2:
        return <ExplainScreen />;
      case 3:
        return <SquareRandomizer />;
      case 4:
        return <ColorBlocks />;
      case 5:
        return <Typewriter />;
      case 6:
        return <LottoRoller />;
      case 7:
        return <OutroScreen />;
      default:
        return <IntroScreen />;
    }
  }

  return (
    <div className="App">
      <div className="App-viewport">
        {renderPage(pageNumber)}
      </div>

      <div className="App-buttons">
        <div className="page-buttons">
          {pageNumber > 1 && (
            <button onClick={() => decreasePage()}>prev page</button>
          )}
          {pageNumber < 7 && (
            <button onClick={() => increasePage()}>{pageNumber === 1 ? 'start' : 'next page'}</button>
          )}
        </div>
        {pageNumber === 7 && (
          <button onClick={() => restart()}>restart</button>
        )}
      </div>
    </div>
  );
}

export default App;
