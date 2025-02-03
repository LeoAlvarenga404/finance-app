import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Profile } from "../../components/profile";
import { Notification } from "../../components/notification";
import { CreditCard } from "../../components/credit-card";
import { ListTransactions } from "../../components/list-transactions";
import { ListApplets } from "../../components/list-applets";
import { Balance } from "../../components/balance";
import { SliderCreditCard } from "../../components/slider-credit-card";
import { ToggleTheme } from "../../components/toggle-theme";
import { useTheme } from "../../hooks/useTheme";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const { theme } = useTheme();

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Profile uri="https://github.com/LeoAlvarenga404.png" />
        <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
          <ToggleTheme />
          <Notification />
        </View>
      </View>
      <Balance />
      <SliderCreditCard />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ListApplets />
      </View>
      <ListTransactions />

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 50,
  },
});
