import './ExplainScreen.css';

function ExplainScreen() {
  return (
    <div className="explain-screen">
      <h1>But first - let's make sure we're on the same page.</h1>
      <div className="divider" />
      <p>It's time to talk shop about a clock.</p>
      <p><code>setInterval()</code> is a function that belongs to your browser's <code>Window</code>. It lets you run a given function over and over in an endless loop until you stop it using the <code>clearInterval()</code> function. Here's what it looks like:</p>

      <section className="code-box">
        <code>{`function printMessage() {`}</code>
        <br/>
        <code className="indented-code">{`console.log('hello world!')`}</code>
        <br/>
        <code>{`}`}</code>
        <br/>
        <br/>
        <code>const intervalID = <span>setInterval</span>(printMessage, 1000);</code>
      </section>

      <br/>
      <p>In the very last line of the above code, <code>setInterval()</code> takes the function <code>printMessage()</code> and runs it once every 1000ms. That is - every 1 second it will print 'hello world!' to the console. The function <code>setInterval()</code> returns a unique integer every time you set an interval that can be used to identify it when its time to clear it.</p>
      <p className="call-to-action">So that's kinda cool, but besides printing numbers and stuff every second, what can we actually do using React and JavaScript intervals...?</p>
    </div>
  );
}

export default ExplainScreen;
