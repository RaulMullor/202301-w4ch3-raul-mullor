import { Keyboard } from "./components/Keyboard/Keyboard";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Info />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
};

export default App;
