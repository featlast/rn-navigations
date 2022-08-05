import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//Importacion de componentes propios
import { globalStyles } from "../Style/Global";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Button
        title="go to settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default Home;
