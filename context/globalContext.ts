import { createContext, useContext } from "react";

export type GlobalContext = {
  mobile: boolean | undefined;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
  showMobileSideNav: boolean;
  setShowMobileSideNav: (showMobileSideNav: boolean) => void;
};

export const globalContext = createContext<GlobalContext>({
  mobile: false,
  darkMode: false,
  setDarkMode: () => {},
  toggleDarkMode: () => {},
  showMobileSideNav: false,
  setShowMobileSideNav: () => {},
});

export const useGlobalContext = () => useContext(globalContext);

export default globalContext;
