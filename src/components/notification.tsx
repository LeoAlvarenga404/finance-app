import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

export function Notification() {
  const { theme } = useTheme();
  return (
    <View>
      <Ionicons name="notifications" size={20} color={theme.text} />
      <View style={[styles.ball, { backgroundColor: theme.outcome, borderColor: theme.background }]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 11,
    height: 11,
    borderRadius: 99,
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 1,
    borderStyle: "solid",
  },
});
