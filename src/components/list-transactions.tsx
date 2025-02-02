import { FlatList, StyleSheet, View, Text } from "react-native";
import { Transaction } from "./transactions";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
export function ListTransactions() {
  const transactions = [
    {
      id: "1",
      title: "Salary",
      description: "Monthly salary",
      type: "income",
      value: 3400,
      date: "01/02/2025 06:05",
    },
    {
      id: "2",
      title: "Rent",
      description: "Monthly rent",
      type: "outcome",
      value: 1200,
      date: "01/02/2025 06:05",
    },
    {
      id: "3",
      title: "Freelance",
      description: "Monthly freelance",
      type: "income",
      value: 800,
      date: "01/02/2025 06:05",
    },
    {
      id: "4",
      title: "Food",
      description: "Monthly food",
      type: "outcome",
      value: 400,
      date: "01/02/2025 06:05",
    },
    {
      id: "5",
      title: "Salary",
      description: "Monthly salary",
      type: "income",
      value: 3400,
      date: "01/02/2025 06:05",
    },
    {
      id: "6",
      title: "Rent",
      description: "Monthly rent",
      type: "outcome",
      value: 1200,
      date: "01/02/2025 06:05",
    },
    {
      id: "7",
      title: "Freelance",
      description: "Monthly freelance",
      type: "income",
      value: 800,
      date: "01/02/2025 06:05",
    },
    {
      id: "8",
      title: "Food",
      description: "Monthly food",
      type: "outcome",
      value: 400,
      date: "01/02/2025 06:05",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 20 }}>
        Transaction History
        </Text>
        <Link href={"../(tabs)/history"}>
          <Ionicons name="arrow-forward-outline" size={20} color="#fff" />
        </Link>
      </View>
      <FlatList
        data={transactions.slice(0, 3)}
        renderItem={({ item }) => (
          <Transaction
            title={item.title}
            description={item.description}
            type={item.type}
            value={item.value}
            date={item.date}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c0a0f",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
