import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Slot, useRouter } from "expo-router";

export default function AuthRoutes() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/pages/auth/sign-in");
    }
  }, [isAuthenticated]);

  return <Slot />;
}
