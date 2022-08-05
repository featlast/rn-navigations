import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import MyBottomTab from "./MyBottomTab";
import MyDrawer from "./MyDrawer";
import CustomDrawer from "./CustomDrawer";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      {/* <MyBottomTab /> */}
      <MyDrawer />
    </NavigationContainer>
  );
};

export default RootNavigator;
