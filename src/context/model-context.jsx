import React from "react";
import { useState } from "react";

const initialState = {
  isOpen: false,
  showModel: () => {},
  closeModel: () => {},
};

const ModelContext = React.createContext(initialState);

export const ModelContextProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModel = () => {
    setIsOpen(true);
    console.log(isOpen);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  return (
    <ModelContext.Provider
      value={{
        isOpen,
        showModel,
        closeModel,
      }}
    >
      {props.children}
    </ModelContext.Provider>
  );
};

export default ModelContext;
