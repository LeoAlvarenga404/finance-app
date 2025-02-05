import { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";

interface loginParams {
  email: string;
  password: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated?: boolean;
  login?: (params: loginParams) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout?: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  async function login({ email, password }: loginParams) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error) {
      console.error(error);
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: name });

      setUser({ ...user, displayName: name });
    } catch (error: any) {
      console.error("Erro ao registrar:", error);
      throw error;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}
