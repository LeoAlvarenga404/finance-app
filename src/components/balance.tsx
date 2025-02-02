import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export function Balance() {
  const [viewBalance, setViewBalance] = useState<boolean>(true);

  let value = 4500.5;

  const balance = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={[styles.text, { fontSize: 12 }]}>Balance</Text>
        <Text style={[styles.text, { fontSize: 15 }]}>
          {viewBalance ? balance : "$ ******"}
        </Text>
      </View>
      <Ionicons
        name={viewBalance ? "eye" : "eye-off"}
        size={24}
        color="#fff"
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
  text: {
    color: "#fff",
  },
});
