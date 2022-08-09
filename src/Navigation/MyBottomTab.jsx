import { View, Text, Pressable } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../Constants/Colors";
import { useNavigation } from "@react-navigation/native";
import MyTopTab from "./MyTopTab";

const Tab = createBottomTabNavigator();

const MyBottomTab = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="TopTab"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen
        name="TopTab"
        component={MyTopTab}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="bars"
                size={24}
                color={Colors.secondary}
                style={{ marginLeft: 10 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <FontAwesome
                name="cog"
                size={24}
                color={Colors.secondary}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="bars"
                size={24}
                color={Colors.secondary}
                style={{ marginLeft: 10 }}
              />
            </Pressable>
          ),

          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: "red",
            color: Colors.ligth,
          },
          tabBarShowLabel: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomTab;
