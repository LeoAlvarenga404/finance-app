import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";

interface AppletsProps {
  url: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
  title: string;
}

export function Applets({ url, icon, color, title }: AppletsProps) {
  const router = useRouter();
  const { theme, type } = useTheme();

  return (
    <View style={{ alignItems: "center", display: "flex", gap: 5 }}>
      <View style={[styles.container, { backgroundColor: type === 'dark' ? theme.secondary : 'transparent' }, { borderColor: type === 'dark' ? 'transparent' : color  }]}>
        <Ionicons
          name={icon}
          size={40}
          color={color}
          onPress={() => router.push(url)}
        />
      </View>
      <Text style={{ color: theme.text }}>{title}</Text>
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
    borderWidth: 2,
  },
});
