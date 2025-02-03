import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";

export function Logout() {
  const { theme } = useTheme();
  const { logout } = useAuth();

  function handleLogout() {
    if (logout) {
      console.log("logout");
      logout();
    }
  }

  return (
    <Ionicons
      onPress={handleLogout}
      name="log-out"
      size={20}
      color={theme.text}
    />
  );
}
