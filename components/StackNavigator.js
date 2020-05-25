import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Chat from "./Chat";

const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export default MyTabs();
