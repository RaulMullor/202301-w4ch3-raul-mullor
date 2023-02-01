import { Key } from "../Key/Key";
import "./Keyboard.css";

export const Keyboard = (): JSX.Element => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
        <Key />
      </ol>
    </div>
  );
};
