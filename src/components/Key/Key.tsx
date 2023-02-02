import "./Key.css";

export interface KeyProps {
  keyLabel: string;
  className: string;
}

export const Key = ({ keyLabel }: KeyProps): JSX.Element => {
  return <button className={"key"}>{keyLabel}</button>;
};
