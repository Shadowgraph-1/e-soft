import { createContext, useContext } from "react";

export const AppStateContext = createContext(null);

export function useAppState() {
  const value = useContext(AppStateContext);
  if (value == null) {
    throw new Error("useAppState must be used within AppStateContext.Provider");
  }
  return value;
}
