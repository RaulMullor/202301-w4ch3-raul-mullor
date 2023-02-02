import Action from "../Action/Action";
import Display from "../Display/Display";
import "./Actions.css";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Display />
      <Action />
    </div>
  );
};

export default Actions;
