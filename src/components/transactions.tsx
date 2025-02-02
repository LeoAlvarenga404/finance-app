import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface TransactionProps {
  type: "income" | "outcome" | string;
  value: number;
  date: string;
  title: string;
  description?: string;
}

export function Transaction({
  title,
  description,
  type,
  value,
  date,
}: TransactionProps) {
    const formattedValue = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);

  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Ionicons
          name={
            type === "income"
              ? "arrow-up-circle-outline"
              : "arrow-down-circle-outline"
          }
          size={30}
          color={type === "income" ? "#a6dd4c" : "#df6868"}
        />
        <View>
          <Text style={{ color: "white", fontSize: 15 }}>{title}</Text>
          <Text style={{ color: "#ffffff90" }}>{description}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={[
            styles.value,
            { color: type === "income" ? "#a6dd4c" : "#df6868" },
          ]}
        >
          {type === "income" ? `+${formattedValue}` : `-${formattedValue}`}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    marginBottom: 8,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  date: {
    color: "#c4c4cc",
    fontSize: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
