import { View, FlatList, StyleSheet, Text } from "react-native";
import { Applets } from "@/components/applets";
import { useTheme } from "@/hooks/useTheme";
export function ListApplets() {
  const { theme } = useTheme();
  const applets = [
    {
      color: theme.primary,
      icon: "wallet" as "wallet",
      url: "/pages/wallet",
      title: "Wallet",
    },
    {
      color: theme.primary,
      icon: "logo-bitcoin" as "logo-bitcoin",
      url: "/currency-converter",
      title: "Converter",
    },
    {
      color: theme.primary,
      icon: "cash" as "cash",
      url: "/pages/loans",
      title: "Loans",
    },
    {
      color: theme.primary,
      icon: "card" as "card",
      url: "/pages/cards",
      title: "Cards",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={{ color: theme.text, fontWeight: "500", fontSize: 20 }}>
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
