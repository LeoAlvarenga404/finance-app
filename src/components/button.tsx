import { useTheme } from "@/hooks/useTheme";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { PressableProps } from "react-native";

interface ButtonProps extends PressableProps {
  children: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
}

export function Button({ children, icon }: ButtonProps) {
  const { theme } = useTheme();
  return (
    <Pressable style={[styles.container, { borderColor: theme.primary }]}>
      <Text style={{ color: theme.text }}>{children}</Text>
      {icon && <Ionicons name={icon} size={24} color={theme.text} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 12,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    alignSelf: "flex-start",
  },
});
