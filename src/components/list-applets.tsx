import { View, FlatList, StyleSheet, Text } from "react-native";
import { Applets } from "./applets";

export function ListApplets() {
  const applets = [
    {
      color: "#4e54c8",
      icon: "wallet" as "wallet",
      url: "/pages/wallet",
      title: "Wallet",
    },
    {
      color: "#4e54c0",
      icon: "bar-chart" as "bar-chart",
      url: "/investments",
      title: "Investments",
    },
    {
      color: "#4e54c0",
      icon: "cash" as "cash",
      url: "/pages/bills",
      title: "Bills",
    },
    {
      color: "#4e54c0",
      icon: "card" as "card",
      url: "/pages/cards",
      title: "Cards",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}>
        Quick Access
      </Text>
      <FlatList
        data={applets}
        horizontal
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={{ marginRight: 20 }}>
            <Applets {...item} />
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
