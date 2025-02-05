import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context"; // Certifique-se de importar o AuthContext
import { useAuth } from "./useAuth";

export const useUser = () => {
  const { user, isAuthenticated } = useAuth()

  if (!user) {
    return { user: null, isAuthenticated: false };
  }

  return {
    user, 
    isAuthenticated,
  };
};
