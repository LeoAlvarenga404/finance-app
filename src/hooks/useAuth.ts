import { useContext } from "react";
import { AuthContext, AuthContextType } from "@/contexts/auth-context";

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("É necessário usar o useAuth dentro de um Provider");
  }
  return context;
};
