import { StyleSheet, Text, View } from "react-native";

export default function Transactions() {

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Transactions</Text>
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
