import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import * as Font from "expo-font";
import { useFonts, Margarine_400Regular } from "@expo-google-fonts/margarine";

import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const CustomDrawer = (props) => {
  let [fontsLoaded] = useFonts({
    Margarine_400Regular,
  });

  if (!fontsLoaded) {
    return <View />;
  }
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   if (!fontsLoaded) {
  //     loadFonts();
  //   }
  // }, []);

  // const loadFonts = async () => {
  //   await Font.loadAsync({
  //     "Roboto-Medium": require("../fonts/Roboto-Medium.ttf"),
  //   });
  //   setFontsLoaded(true);
  // };
  // if (!fontsLoaded) {
  //   return <View />;
  // }

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: "#F55C51" }}
    >
      <ImageBackground
        source={require("../assets/img/2.jpg")}
        style={{ padding: 20 }}
      >
        <Image
          source={require("../assets/img/user-profile1.jpg")}
          style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text
          style={{
            color: "#8200d6",
            fontSize: 25,
            fontFamily: "Margarine_400Regular",
            //fontFamily: "../assets/fonts/Roboto-Medium.ttf",
            marginBottom: 5,
          }}
        >
          Curso RN Expo
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: "#8200d6",
              fontFamily: "Margarine_400Regular",
              marginRight: 5,
            }}
          >
            15 USD / Year
          </Text>
          <FontAwesome5 name="coins" size={14} color="#fff" />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
        <DrawerItemList {...props} />
      </View>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Margarine_400Regular",
                marginLeft: 5,
              }}
            >
              Shared
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Margarine_400Regular",
                marginLeft: 5,
              }}
            >
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
