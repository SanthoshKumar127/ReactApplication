import React, { createContext, useContext, useState } from "react";

interface IPersonal {
  firstName: string;
  lastName: string;
  email: string;
}

interface IProfessional {
  company: string;
  designation: string;
  yearOfJoining: number;
}

interface IAddress {
  address: string;
  city: string;
  state: string;
  zip: number;
}

type MultiStepFormContextProps = {
  personal: IPersonal;
  setPersonal: React.Dispatch<React.SetStateAction<IPersonal>>;
  professional: IProfessional;
  setProfessional: React.Dispatch<React.SetStateAction<IProfessional>>;
  address: IAddress;
  setAddress: React.Dispatch<React.SetStateAction<IAddress>>;
};

export const MultiStepFormContext = createContext<MultiStepFormContextProps>({
  personal: { firstName: "", lastName: "", email: "" },
  professional: { company: "", designation: "", yearOfJoining: 0 },
  address: { address: "", city: "", state: "", zip: 0 },
  setPersonal: () => {},
  setProfessional: () => {},
  setAddress: () => {},
});

export const useMultiStepForm = () => useContext(MultiStepFormContext);

export const MultiStepFormProvider: React.FC = ({ children }) => {
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [professional, setProfessional] = useState({
    company: "",
    designation: "",
    yearOfJoining: 0,
  });
  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    zip: 0,
  });

  return (
    <MultiStepFormContext.Provider
      value={{
        personal,
        professional,
        address,
        setPersonal,
        setProfessional,
        setAddress,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepFormProvider;
