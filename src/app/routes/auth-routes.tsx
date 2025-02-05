import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Slot, useRouter, useSegments } from "expo-router";

export default function AuthRoutes() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  const publicRoutes = ["/pages/auth/sign-in", "/pages/auth/sign-up"];

  useEffect(() => {
    const currentPath = `/${segments.join("/")}`;

    if (!isAuthenticated && !publicRoutes.includes(currentPath)) {
      router.replace("/pages/auth/sign-in");
    }
  }, [isAuthenticated]);

  return <Slot />;
}
