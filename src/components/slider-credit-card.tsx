import React, { useRef, useState } from "react";
import { CreditCard } from "./credit-card";
import { FlatList, Dimensions, StyleSheet, View } from "react-native";

const { width: viewportWidth } = Dimensions.get("window");

export function SliderCreditCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { color: "#4e54c8", type: "visa", validad: "19/27" },
    { color: "#4e54c0", type: "mastercard", validad: "12/25" },
    { color: "#4e54c0", type: "visa", validad: "10/23" },
  ];

  function renderItem({ item }: { item: any }) {
    return (
      <View style={styles.cardContainer}>
        <CreditCard {...item} />
      </View>
    );
  }

  const onViewRef = useRef(({ viewableItems }: any) => {
    setActiveIndex(viewableItems[0].index);
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

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
              backgroundColor: activeIndex === index ? "#fff" : "#ccc",
            }}
          />
        ))}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        style={{ marginLeft: -8 }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      {renderDots()}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
  },
});
