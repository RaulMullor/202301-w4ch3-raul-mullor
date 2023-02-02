import { createContext } from "react";

interface PhoneContextStructure {
  phoneNumber: string;
  addNumbers: (number: string) => void;
}

export const PhoneContext = createContext({} as PhoneContextStructure);
