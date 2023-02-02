import { Key } from "../Key/Key";
import "./Keyboard.css";

export const Keyboard = (): JSX.Element => {
  const keyLabels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "delete",
  ];

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyLabels.map((keyLabel, index) => (
          <li>
            <Key className={"key"} keyLabel={keyLabel} />
          </li>
        ))}
      </ol>
    </div>
  );
};
