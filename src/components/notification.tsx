import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Notification() {
  return (
    <View>
      <Ionicons name="notifications" size={20} color="white" />
      <View style={styles.ball}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  ball: {
    width: 11,
    height: 11,
    borderRadius: 99,
    backgroundColor: "#ff0000",
    position: "absolute",
    top: 0,
    right: 0,
    borderWidth: 2,
    borderColor: "#0c0a0f",
    borderStyle: "solid",
  },
});
