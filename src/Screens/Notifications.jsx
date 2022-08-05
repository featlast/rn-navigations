import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../Style/Global";

const Notifications = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
    </View>
  );
};

export default Notifications;
