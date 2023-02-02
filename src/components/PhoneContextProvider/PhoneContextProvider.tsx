import { useState } from "react";
import { PhoneContext } from "../../store/context/PhoneContext";

interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const addNumbers = (number: string): void => {
    if (number === "delete") {
      setPhoneNumber("");
      return;
    }
    if (phoneNumber.length === 9) {
      return;
    }
    setPhoneNumber(phoneNumber + number);
  };

  return (
    <PhoneContext.Provider value={{ addNumbers, phoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
