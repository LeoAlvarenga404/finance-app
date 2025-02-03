import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/theme-context";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("É necessário usar o useTheme dentro de um Provider");
  }
  return context;
};
