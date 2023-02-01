import { Key } from "../Key/Key";
import { numbers } from "../../data/numbers";
import "./Keyboard.css";

export const Keyboard = (): JSX.Element => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {numbers.map((number) => (
          <Key keyNumber={number} />
        ))}
      </ol>
    </div>
  );
};
