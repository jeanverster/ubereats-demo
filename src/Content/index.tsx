/* eslint-disable max-len */
import { AntDesign as Icon } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { MIN_HEADER_HEIGHT } from "../Header";
import { HEADER_IMAGE_HEIGHT } from "../HeaderImage";

const { Extrapolate, interpolate } = Animated;

const { height } = Dimensions.get("window");

const sarmies = [
  {
    title: "Grilled Haloumi Sarmie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 116"
  },
  {
    title: "Prosciutto, Tomato, Rocket & Padano Shavings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar.",
    price: "R 145"
  },
  {
    title: "Pastrami, Hummus & Gherkin Sarmie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 129"
  },
  {
    title: "Bacon, Avo & Mayo Sarmie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar.",
    price: "R 124"
  },
  {
    title: "Mozerella & Oven Dried Tomato Sarmie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar.",
    price: "R 92"
  }
];

const pickedForYou = [
  {
    title: "Coffee Freezo",
    description: "Lorem ipsum dolor sit amet.",
    price: "R 42"
  },
  {
    title: "Burger & Chips",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 141"
  },
  {
    title: "Prawn & Chorizo Pasta",
    description: "Portion, vegan",
    price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const breakfast = [
  {
    title: "Haloumi Breakfast",
    description: "Lorem ipsum dolor sit amet.",
    price: "R 126"
  },
  {
    title: "French Toast",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 94"
  },
  {
    title: "Big Breakfast",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 129"
  },
  {
    title: "Small Breakfast",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: "R 70"
  },
  {
    title: "Breakfast Bowl",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 86"
  }
];

const salads = [
  {
    title: "Harissa Roasted Butternut Salad",
    description: "Lorem ipsum dolor sit amet.",
    price: "R 126"
  },
  {
    title: "Smoked Salmon Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 166"
  },
  {
    title: "Truck Drivers Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 141"
  }
];

const pizza = [
  {
    title: "Pizza Chicken, Mozzarella, Coriander & Chilli",
    description: "Lorem ipsum dolor sit amet.",
    price: "R 126"
  },
  {
    title: "Pesto Rubbed Haloumi, Chorizo & Caramelized Onions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 166"
  },
  {
    title: "Buffalo Milk Mozarella & Prosciutto Pizza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, felis eget ultrices pulvinar, odio ante semper justo, at pulvinar lorem sem non enim.",
    price: "R 141"
  }
];

const menu = [
  { name: "Picked For You", items: pickedForYou },
  { name: "Breakfast", items: breakfast },
  { name: "Sarmies", items: sarmies },
  { name: "Salads", items: salads },
  { name: "Pizzas", items: pizza }
];

export const defaultTabs = menu.map(({ name }) => ({ name, anchor: 0 }));

const styles = StyleSheet.create({
  section: {
    padding: 16
  },
  placeholder: {
    height: HEADER_IMAGE_HEIGHT,
    marginBottom: MIN_HEADER_HEIGHT
  },
  text: {
    fontFamily: "UberMoveRegular",
    fontSize: 14
  },
  title1: {
    fontFamily: "UberMoveMedium",
    fontSize: 24
  },
  title2: {
    fontFamily: "UberMoveMedium",
    fontSize: 16
  },
  divider: {
    height: 2,
    backgroundColor: "#e2e3e4"
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8
  },
  ratings: {
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginRight: 8
  },
  link: {
    color: "#247A00"
  },
  item: {
    borderBottomColor: "#e2e3e4",
    borderBottomWidth: 1,
    marginTop: 16
  },
  title: {
    fontFamily: "UberMoveMedium",
    fontSize: 16,
    marginBottom: 8
  },
  description: {
    marginBottom: 8
  },
  price: {
    fontFamily: "UberMoveMedium",
    marginBottom: 16
  }
});

export interface TabModel {
  name: string;
  anchor: number;
}

interface ContentProps {
  y: Animated.Node<number>;
  onMeasurement: (index: number, tab: TabModel) => void;
}

export default ({ y, onMeasurement }: ContentProps) => {
  const opacity = interpolate(y, {
    inputRange: [
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT - 100,
      HEADER_IMAGE_HEIGHT - MIN_HEADER_HEIGHT
    ],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP
  });
  return (
    <>
      <View style={styles.placeholder} />
      <Animated.View style={[styles.section, { opacity }]}>
        <Text style={styles.text}>Cafe • Seafood • South African • RR</Text>
        <View style={styles.info}>
          <Text style={styles.text}>Open • R10 Delivery Fee</Text>
          <View style={styles.ratings}>
            <Icon name="star" color="#f4c945" size={24} style={styles.icon} />
            <Text style={styles.text}>(186)</Text>
          </View>
        </View>
      </Animated.View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.title2}>Restaurant info</Text>
        <View style={styles.info}>
          <Text style={styles.text}>56 Buckingham Avenue, Randburg, 2196</Text>
          <Text style={styles.link}>More info</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {menu.map(({ name, items: menuItems }, index) => (
        <View
          style={styles.section}
          key={index}
          onLayout={({
            nativeEvent: {
              layout: { y: anchor }
            }
          }) => onMeasurement(index, { name, anchor: anchor - 142 })}
        >
          <Text style={styles.title1}>{name}</Text>
          {menuItems.map(({ title, description, price }, j) => (
            <View style={styles.item} key={j}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
              <Text style={styles.price}>{price}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={{ height }} />
    </>
  );
};
