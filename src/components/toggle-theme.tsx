import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

export function ToggleTheme() {
  const { toggleTheme, theme, type } = useTheme();

  return (
    <Ionicons
      name={type === "dark" ? "sunny" : "moon"}
      size={20}
      color={theme.text}
      onPress={() => toggleTheme()}
    />
  );
}
