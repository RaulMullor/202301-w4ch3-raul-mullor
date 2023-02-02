import { useContext } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";

import "./Key.css";

export interface KeyProps {
  keyLabel: string;
  className: string;
}

export const Key = ({ keyLabel }: KeyProps): JSX.Element => {
  const { addNumbers } = useContext(PhoneContext);

  return (
    <button
      key={keyLabel}
      className={"key"}
      onClick={() => addNumbers(keyLabel)}
    >
      {keyLabel}
    </button>
  );
};
