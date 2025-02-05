import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { Link, router } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const width = Dimensions.get("window").width;

export default function SignIn() {
  const { theme } = useTheme();
  const { login } = useAuth();
  const auth = getAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (login) {
        login({ email, password });
        router.replace("/");
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Sign In</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
        <TouchableOpacity onPress={handleLogin}>
          <View style={[styles.button, { backgroundColor: theme.primary }]}>
            <Text style={{ color: theme.text }}>Sign In</Text>
          </View>
        </TouchableOpacity>
        <Link href="/pages/auth/sign-up" style={{ color: theme.outcome }}>
          Create an account
        </Link>
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
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: width - 150,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
