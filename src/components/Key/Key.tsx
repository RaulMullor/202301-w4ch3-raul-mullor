import "./Key.css";

export interface KeyProps {
  keyNumber: number;
}

export const Key = ({ keyNumber }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className="key">{keyNumber}</button>
    </li>
  );
};
