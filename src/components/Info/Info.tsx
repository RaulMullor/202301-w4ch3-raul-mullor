import { useContext } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";
import "./Info.css";

const Info = () => {
  let message;

  const { callState } = useContext(PhoneContext);

  if (callState) {
    message = "...Calling";
  }

  return <span className="message">{message}</span>;
};

export default Info;
