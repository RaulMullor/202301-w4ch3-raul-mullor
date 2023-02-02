import "./Key.css";

export interface KeyProps {
  keyLabel: string;
  className: string;
}

export const Key = ({ className, keyLabel }: KeyProps): JSX.Element => {
  return <button className={className}>{keyLabel}</button>;
};
