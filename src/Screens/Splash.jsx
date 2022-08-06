import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { globalStyles } from "../Style/Global";

export default Splash = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Welcome</Text>
      <ActivityIndicator size={"large"} />
    </View>
  );
};
