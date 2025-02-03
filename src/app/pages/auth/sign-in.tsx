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

export default function SignIn() {
  const { theme } = useTheme();
  const { login } = useAuth();

  function handleLogin() {
    console.log("sign in");

    if (login) {
      login();
      router.replace("/");
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Sign In</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Email"
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
        <TextInput
          placeholder="Password"
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
