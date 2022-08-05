import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../Style/Global";

const Settings = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Settings</Text>
    </View>
  );
};

export default Settings;
