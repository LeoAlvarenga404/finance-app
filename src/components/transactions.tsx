import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

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

  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.secondary }]}>
      <View style={styles.leftContent}>
        <Ionicons
          name={
            type === "income"
              ? "arrow-up-circle-outline"
              : "arrow-down-circle-outline"
          }
          size={30}
          color={type === "income" ? theme.income : theme.outcome}
        />
        <View>
          <Text style={{ color: theme.text, fontSize: 15 }}>{title}</Text>
          <Text style={{ color: theme.label }}>{description}</Text>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={[
            styles.value,
            { color: type === "income" ? theme.income : theme.outcome },
          ]}
        >
          {type === "income" ? `+${formattedValue}` : `-${formattedValue}`}
        </Text>
        <Text style={[styles.date, { color: theme.label }]}>{date}</Text>
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
    borderRadius: 12,
    marginBottom: 8,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  date: {
    fontSize: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
