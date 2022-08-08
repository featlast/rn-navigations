import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//Importacion de componentes propios
import { globalStyles } from "../Style/Global";
import Card from "../Components/Card";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      <Card />
    </View>
  );
};

export default Home;
