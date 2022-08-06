import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import MyBottomTab from "./MyBottomTab";
import MyDrawer from "./MyDrawer";
import CustomDrawer from "./CustomDrawer";
import SignUp from "../Screens/authScreens/SignUp";
import AuthStack from "./AuthStack";
import { useSelector, useDispatch } from "react-redux";
import { restoreToken } from "../features/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../Screens/Splash";

const RootNavigator = () => {
  const { userToken, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getValue();
  }, []);

  /**Guardar Valor de una variable */
  async function getValue() {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        console.log("Data Restore", value);
        dispatch(restoreToken(value));
      } else {
        console.log("No Data");
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (isLoading) return <Splash />;
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      {/* <MyBottomTab /> */}
      {userToken ? <MyDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
