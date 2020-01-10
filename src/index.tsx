import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { onScroll, useValues } from "react-native-redash";
import Content, { defaultTabs } from "./Content";
import Header from "./Header";
import HeaderImage, { backgroundImage } from "./HeaderImage";

export const assets = [backgroundImage];

export const fonts = {
  UberMoveRegular: require("../assets/UberMoveRegular.ttf"),
  UberMoveMedium: require("../assets/UberMoveMedium.ttf")
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default () => {
  const scrollView = useRef<Animated.ScrollView>(null);
  const [tabs, setTabs] = useState(defaultTabs);
  const [y] = useValues([0], []);
  return (
    <View style={styles.container}>
      <HeaderImage y={y} />
      <Animated.ScrollView
        ref={scrollView}
        onScroll={onScroll({ y })}
        style={StyleSheet.absoluteFill}
        scrollEventThrottle={16}
      >
        <Content
          onMeasurement={(index, tab) => {
            tabs[index] = tab;
            setTabs([...tabs]);
          }}
          y={y}
        />
      </Animated.ScrollView>
      <Header {...{ y, tabs, scrollView }} />
    </View>
  );
};
