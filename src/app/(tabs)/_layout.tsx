import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@/hooks/useTheme";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
      tabBarActiveTintColor: theme.primary,
      tabBarInactiveTintColor: theme.label,
      tabBarStyle: {
        position: "absolute",
        backgroundColor: theme.secondary,
        height: 60,
        bottom: 0,
        paddingTop: 10,
        shadowColor: theme.secondary,
        shadowOpacity: 0.3,
        shadowOffset: {
        width: 0,
        height: -5,
        },
        shadowRadius: 15,
   
      },
      }}
    >
      <Tabs.Screen
      name="transactions"
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => (
        <Ionicons name="swap-horizontal-outline" size={28} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="index"
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => (
        <Ionicons name="home" size={28} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="history"
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color }) => (
        <Ionicons name="time" size={28} color={color} />
        ),
      }}
      />
    </Tabs>
  );
}
