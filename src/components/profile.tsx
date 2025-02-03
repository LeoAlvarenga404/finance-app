import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, View, Image, Text } from "react-native";

interface ProfileProps {
  uri: string;
}

export function Profile({ uri }: ProfileProps) {
  const name = "Leonardo";
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
      <View>
        <Text style={{ color: theme.label, fontSize: 14, fontWeight: "300" }}>
          Hello {name},
        </Text>
        <Text style={{ color: theme.text, fontSize: 24, fontWeight: "500" }}>
          Welcome back
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
});
