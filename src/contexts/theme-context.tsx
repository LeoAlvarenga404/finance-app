import React, { createContext, useEffect, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme";
import { useColorScheme } from "react-native";

export interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  type: "light" | "dark";
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const [type, setType] = useState<"light" | "dark">(
    colorScheme === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    setType((prev) => (prev === "light" ? "dark" : "light"));
  }, [colorScheme]);

  function toggleTheme() {
    setType((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: type === "light" ? lightTheme : darkTheme,
        toggleTheme,
        type,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
