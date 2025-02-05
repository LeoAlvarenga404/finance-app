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

const width = Dimensions.get("window").width;

export default function SignUp() {
  const { theme } = useTheme();
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignUp() {
    if (!email || !password || !confirmPassword) {
      console.error("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      console.error("As senhas não são iguais!");
      return;
    }

    try {
      await register(name, email, password);
      router.replace("/");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Sign Up</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
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
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <View style={[styles.button, { backgroundColor: theme.primary }]}>
            <Text style={{ color: theme.text }}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <Link href="/pages/auth/sign-in" style={{ color: theme.outcome }}>
          Already have an account? Sign In
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
