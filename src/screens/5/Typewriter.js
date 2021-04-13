import { useEffect, useState } from 'react';
import './Typewriter.css';

function Typewriter() {
  const paragraphText = "We could also use intervals to create something of a typewriter effect - though I do need to point out that this requires an understanding of hooks within React. Good thing for us - we already know how to use the useEffect hook! You saw it in action earlier with the colorful squares demo. The useEffect hook tells the component what it needs to do after render, so if we have any \"effects\" that the component needs to do post-render, this is a good place to put that code. We can use that hook to start a timer, or even check on our text length after every re-render to see if we need to tell our interval to clear.";

  const [renderedLetters, setRenderedLetters] = useState('');
  const lettersBank = paragraphText.split('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalID, setIntervalID] = useState();
  const [isInitialRender, setIsInitialRender] = useState(true);

  function startTypewriter() {
    setIsInitialRender(false);
    const jsIntervalID = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex + 1);
    }, 20);
    setIntervalID(jsIntervalID);
  }

  useEffect(() => {
    if (currentIndex < lettersBank.length) {
      setRenderedLetters(prevState => prevState + lettersBank[currentIndex]);
    }
    else if (currentIndex === lettersBank.length) {
      clearInterval(intervalID);
    }
    if (isInitialRender) window.scrollTo(0, 0);
  }, [currentIndex]);

  return (
    <div className="typewriter">
      <h1>Typewriter Animations</h1>
      <p>A typewriter animation in React using <code>setInterval()</code>? Sure, why not?</p>
      <p>Click the start button below to see some text type itself!</p>
      <div className="divider" />
      <button className="start-typewriter" onClick={() => startTypewriter()}>Start Typewriter</button>
      <div className="canvas">
      {!isInitialRender && (
        <p>{renderedLetters}</p>
      )}
      </div>
    </div>
  );
}

export default Typewriter;
