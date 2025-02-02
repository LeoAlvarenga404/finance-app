import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import Constants from "expo-constants";

import { Profile } from "../../components/profile";
import { Notification } from "../../components/notification";
import { CreditCard } from "../../components/credit-card";
import { ListTransactions } from "../../components/list-transactions";
import { ListApplets } from "../../components/list-applets";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Profile uri="https://github.com/LeoAlvarenga404.png" />
        <Notification />
      </View>
      <CreditCard color={"#4e54c8"} type="visa" validad="19/27" />
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

      <StatusBar style='light' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c0a0f",
    paddingTop: statusBarHeight + 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 50
  },
});
