import { ThemeProvider } from "../contexts/theme-context";
import { AuthProvider } from "@/contexts/auth-context";
import AuthRoutes from "./routes/auth-routes";

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AuthRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}
