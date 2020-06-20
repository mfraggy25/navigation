import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Chat from "./Chat";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import MyDrawer from "./MyDrawer";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ContactStack = createStackNavigator();
const ChatStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// const Drawer = createDrawerNavigator();
// const MyDrawerScreen = () => (
//   <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />}>
//     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
//     <Drawer.Screen name="BookmarkScreen" component={Bookmark} />
//     <Drawer.Screen name="SettingScreen" component={Settings} />
//     <Drawer.Screen name="SupportScreen" component={Support} />
//   </Drawer.Navigator>
// );
// export default MyDrawerScreen;

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#f0edf6">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "red",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Contact"
      component={ContactStackScreen}
      options={{
        tabBarLabel: "Contact",
        tabBarColor: "blue",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="contact-mail" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStackScreen}
      options={{
        tabBarLabel: "Chat Room",
        tabBarColor: "brown",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chat-outline" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Home",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "Profile",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const ContactStackScreen = ({ navigation }) => (
  <ContactStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ContactStack.Screen
      name="Contact"
      component={Contact}
      options={{
        title: "Contact",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ContactStack.Navigator>
);

const ChatStackScreen = ({ navigation }) => (
  <ChatStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#009387",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ChatStack.Screen
      name="Chat"
      component={Chat}
      options={{
        title: "Chat",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </ChatStack.Navigator>
);
