import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";

export default function History() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: "#fff" }}>History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
