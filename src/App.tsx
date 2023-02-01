import { Keyboard } from "./components/Keyboard/Keyboard";

import Display from "./components/Display/Display";

import Actions from "./components/Actions/Actions";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <Keyboard />
        <div className="actions">
          <Display />
          <Actions />
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
