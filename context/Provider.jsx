import { createContext } from "react";
import Store from "./Store";
export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const { store, setStore } = Store();

  return (
    <DataContext.Provider value={{ store, setStore }}>
      {children}
    </DataContext.Provider>
  );
};
