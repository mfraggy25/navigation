import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Chat from "./components/Chat";
import MaterialBottomTabs from "./components/MaterialBottomTabs";
import MaterialTopTabs from "./components/MaterialTopTabs";
import StackNavigator from "./components/StackNavigator";
import MyDrawer from "./components/MyDrawer";
import MainTabScreen from "./components/MainTabScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MaterialTopTabs /> */}
      {/* <MaterialBottomTabs /> */}
      {/* <MyDrawer /> */}
      {/* <MainTabScreen /> */}
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
