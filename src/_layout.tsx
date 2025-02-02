import React from "react";
import { View, Text } from "react-native";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the App</Text>
      {children}
    </View>
  );
}
