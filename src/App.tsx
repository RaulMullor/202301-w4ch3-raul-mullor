import { Keyboard } from "./Keyboard/Keyboard";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <span className="number">667359961</span>
          <a href="call" className="call">
            Call
          </a>
          <a href="hang-up" className="hang active">
            Hang up
          </a>
        </div>
      </main>
    </div>
  );
};

export default App;
