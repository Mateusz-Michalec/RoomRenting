import React, { createContext } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <div>appContext</div>;
}
