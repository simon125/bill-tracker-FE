import React, { useContext, createContext } from "react";

interface IFetchContext {}

const FetchContext = createContext<IFetchContext>({});

export const FetchProvider: React.FC = ({ children }) => {
  const value = {};

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
};
