import { createContext, useState } from "react";

export interface AuthContextType {
  isAuthenticated?: boolean;
  login?: () => void;
  logout?: () => void;
}

export const AuthContext = createContext<AuthContextType>({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
