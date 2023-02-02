import { useContext } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";

const Action = (): JSX.Element => {
  const { isCalling } = useContext(PhoneContext);
  const handleOnclick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    isCalling();
  };

  return (
    <>
      <a href="call" className="call" onClick={handleOnclick}>
        Call
      </a>
      <a href="hang-up" className="hang active">
        Hang up
      </a>
    </>
  );
};

export default Action;
