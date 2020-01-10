import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UberEats, { assets, fonts } from "./src";
import { LoadAssets } from "./src/utils/index";

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      UberEats: {
        screen: UberEats,
        navigationOptions: {
          title: "Uber Eats",
          header: () => null
        }
      }
    },
    {
      initialRouteName: "UberEats",
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "white",
          borderBottomWidth: 0
        },
        headerTintColor: "white"
      }
    }
  )
);

export default () => (
  <LoadAssets {...{ assets, fonts }}>
    <StatusBar barStyle="light-content" />
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  </LoadAssets>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
