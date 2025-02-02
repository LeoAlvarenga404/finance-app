import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface AppletsProps {
  url: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  title: string;
}

export function Applets({ url, icon, color, title }: AppletsProps) {
  const router = useRouter();

  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.container}>
        <Ionicons
          name={icon}
          size={40}
          color={color}
          onPress={() => router.push(url)}
        />
      </View> 
      <Text style={{ color: "#ececec" }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "#1f1e25",
  },
});
