import { StyleSheet, Text, View } from "react-native";

export default function Teste() {
  return (
    <View style={styles.container}>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0aa",
  },
});
