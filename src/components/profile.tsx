import { StyleSheet, View, Image, Text } from "react-native";

interface ProfileProps {
  uri: string;
}

export function Profile({ uri }: ProfileProps) {
  const name = "Leonardo";

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
      <View>
        <Text style={{ color: "#ffffff90", fontSize: 14, fontWeight: "300" }}>
          Hello {name},
        </Text>
        <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "500" }}>
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
