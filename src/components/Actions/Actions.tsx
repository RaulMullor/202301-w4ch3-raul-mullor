import Display from "../Display/Display";
import "./Actions.css";

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <Display />
      <a href="call" className="call">
        Call
      </a>
      <a href="hang-up" className="hang active">
        Hang up
      </a>
    </div>
  );
};

export default Actions;
