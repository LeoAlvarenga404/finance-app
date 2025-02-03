import { Button } from "@/components/button";
import { useTheme } from "@/hooks/useTheme";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;
export default function Transactions() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <Button icon="add">Create a Transaction</Button>
        {/* 
          git add .
          git commit -m "."
          git push
        */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingTop: statusBarHeight + 20,
  },
});
