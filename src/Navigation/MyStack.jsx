import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../Screens/Settings";
import { Text, View } from "react-native";
import { Colors } from "../Constants/Colors";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import MyBottomTab from "./MyBottomTab";

const Stack = createNativeStackNavigator();

function CustomHeader({ title }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        height: 80,
        width: "100%",
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: Colors.ligth }}>
        {title}
      </Text>

      <Icon
        reverseColor="black"
        name="heartbeat"
        type="font-awesome"
        color="#f50"
        onPress={() => navigation.navigate("Home")}
        iconStyle={{
          color: Colors.dark,
        }}
      />
    </View>
  );
}

const myConfig = {
  headerShown: false,
  title: "something",
  headerTitleAlign: "center",
  presentation: "modal",
  gestureEnabled: true,
  keyboardHandlingEnable: true,

  // header: ({ navigation, route, options, back }) => (
  //   <CustomHeader title={route.name} />
  // ),
};

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <Stack.Screen name="Root" component={MyBottomTab} />
      <Stack.Group
        screenOptions={{ headerShown: true, headerBackTitle: "casa" }}
      >
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            presentation: "modal",
            headerBackTitle: "home",
            headerBackTitleStyle: { color: "red" },
            headerBackTitleVisible: true,
            title: "CS",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MyStack;
