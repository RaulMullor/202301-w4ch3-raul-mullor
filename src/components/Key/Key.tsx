import { useContext } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";

import "./Key.css";

export interface KeyProps {
  keyLabel: string;
}

export const Key = ({ keyLabel }: KeyProps): JSX.Element => {
  const { addNumbers } = useContext(PhoneContext);
  return <button onClick={() => addNumbers(keyLabel)}>{keyLabel}</button>;
};
