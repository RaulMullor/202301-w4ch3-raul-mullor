import "./Key.css";

export interface KeyProps {
  keyLabel: string;
}

export const Key = ({ keyLabel }: KeyProps): JSX.Element => {
  return <button>{keyLabel}</button>;
};
