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

  function SignUp() {
    console.log("sign up");
    router.back();
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={{ color: theme.text }}>Sign Up</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Name"
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
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
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={[
            styles.input,
            { borderColor: theme.label, color: theme.text },
          ]}
          placeholderTextColor={theme.label}
        />
        <TouchableOpacity onPress={SignUp}>
          <View style={[styles.button, { backgroundColor: theme.primary }]}>
            <Text style={{ color: theme.text }}>Sign Up</Text>
          </View>
        </TouchableOpacity>
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
