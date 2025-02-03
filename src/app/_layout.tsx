import { Slot } from "expo-router";
import { ThemeProvider } from "../contexts/theme-context";
import {} from "../hooks/useTheme";

export default function Layout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
