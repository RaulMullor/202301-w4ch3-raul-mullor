import { Keyboard } from "./components/Keyboard/Keyboard";

import Actions from "./components/Actions/Actions";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
};

export default App;
