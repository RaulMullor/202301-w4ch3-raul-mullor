import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumber: string;
  addNumbers: (number: string) => void;
  callState: boolean;
  isCalling: () => void;
}

export const PhoneContext = createContext({} as PhoneContextStructure);
