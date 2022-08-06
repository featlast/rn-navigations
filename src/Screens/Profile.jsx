import { View, Text, Button } from "react-native";
import React from "react";
import { globalStyles } from "../Style/Global";
import { useDispatch } from "react-redux";
import { signOut } from "../features/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Profile</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await AsyncStorage.removeItem("@token");
          dispatch(signOut());
        }}
      />
    </View>
  );
};

export default Profile;
