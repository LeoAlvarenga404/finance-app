import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface CreditCardProps {
  type: "visa" | "mastercard" | string;
  color: string;
  validad: string;
}

export function CreditCard({ type, color, validad }: CreditCardProps) {
  return (
    <View style={styles.cardWrapper}>
      <LinearGradient colors={[color, "#b2b6ff"]} style={styles.container}>
        <View style={[styles.ball, styles.ball1]} />
        <View style={[styles.ball, styles.ball2]} />
        <View style={[styles.ball, styles.ball3]} />
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              source={require("../../assets/chip.png")}
              style={[styles.logo, { width: 40, height: 50 }]}
            />
            <Image
              source={require("../../assets/contact-indicator.png")}
              style={[styles.logo, { width: 20, height: 20 }]}
            />
          </View>
          <Text style={styles.number}>**** **** **** 5432</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              marginLeft: 80,
            }}
          >
            <Text style={{ fontSize: 8, color: "#fff" }}>VALID{"\n"}THRU</Text>
            <Text style={{ color: "#fff" }}>{validad}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.holder}>LEONARDO PRADO</Text>
            <Image
              source={
                type === "visa"
                  ? require("../../assets/visa-logo.png")
                  : require("../../assets/mastercard-logo.png")
              }
              style={[styles.logo, { width: 70, height: 70 }]}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
    width: "100%",
    height: 200,
  },

  container: {
    width: "100%",
    height: 230,
    padding: 20,
    paddingTop: 40,
    paddingInline: 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  logo: {
    objectFit: "contain",
    position: "relative",
    zIndex: 99,
  },

  number: {
    fontSize: 23,
    fontWeight: "300",
    color: "#ffffff",
    textShadowColor: "#1d1d1d",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 1,
    fontFamily: "monospace",
  },

  holder: {
    fontSize: 14,
    fontWeight: "300",
    color: "#ffffff",
    textShadowColor: "#1d1d1d",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontFamily: "monospace",
  },

  ball: {
    position: "absolute",
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#ffffff20",
    pointerEvents: "none",
  },

  ball1: {
    backgroundColor: "#173fad20",
    width: 700,
    height: 600,
    top: -420,
    left: -120,
  },
  ball2: {
    backgroundColor: "#3b5bb330",
    width: 900,
    height: 900,
    top: -700,
    right: -400,
  },
  ball3: {
    backgroundColor: "#173fad40",
    width: 700,
    height: 700,
    bottom: -550,
    left: -260,
  },
});
