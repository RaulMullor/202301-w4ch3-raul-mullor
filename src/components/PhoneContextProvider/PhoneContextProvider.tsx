import { useState } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");
  let [callState, setCallState] = useState(false);

  const addNumbers = (number: string): void => {
    setPhoneNumber(phoneNumber + number);
  };

  const isCalling = (): void => {
    setCallState((callState = true));
  };

  return (
    <PhoneContext.Provider
      value={{ addNumbers, phoneNumber, isCalling, callState }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
