import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";

export function Balance() {
  const [viewBalance, setViewBalance] = useState<boolean>(true);
  const { theme } = useTheme();

  let value = 4500.5;

  const balance = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={{ fontSize: 12, color: theme.text }}>Balance</Text>
        <Text style={{ fontSize: 15, color: theme.text }}>
          {viewBalance ? balance : "******"}
        </Text>
      </View>
      <Ionicons
        name={viewBalance ? "eye" : "eye-off"}
        size={24}
        color={theme.text}
        onPress={() => setViewBalance(!viewBalance)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
});
