import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0a0f",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
})
