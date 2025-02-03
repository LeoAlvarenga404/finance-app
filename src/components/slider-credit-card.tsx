import React, { useState } from "react";
import { CreditCard } from "@/components/credit-card";
import { ScrollView, Dimensions, StyleSheet, View } from "react-native";
import { useTheme } from "@/hooks/useTheme";

export function SliderCreditCard() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { color: "#4e54c8", type: "visa", validad: "19/27" },
    { color: "#4e54c0", type: "mastercard", validad: "12/25" },
    { color: "#4e54c0", type: "visa", validad: "10/23" },
  ];

  function renderItem(item: any, index: number) {
    return (
      <View key={index} style={styles.cardContainer}>
        <CreditCard {...item} />
      </View>
    );
  }

  function handleScroll(event: any) {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / Dimensions.get("window").width);
    setActiveIndex(index);
  }

  function renderDots() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        {data.map((_, index) => (
          <View
            key={index}
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: activeIndex === index ? theme.text : theme.label,
            }}
          />
        ))}
      </View>
    );
  }

  return (
    <View>
      <ScrollView
        style={{ marginLeft: -8 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        nestedScrollEnabled
      >
        {data.map((item, index) => renderItem(item, index))}
      </ScrollView>
      {renderDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
});
