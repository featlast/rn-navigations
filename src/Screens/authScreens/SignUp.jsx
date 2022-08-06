import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../Style/Global";
import MyInput from "../../Components/MyInput";
import MyButton from "../../Components/MyButton";

const SignUp = ({ navigation }) => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={"Email"} />
      <MyInput label={"Password"} secureTextEntry />
      <MyButton title={"Sign Up"} />
      <MyButton title={"Login"} onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SignUp;
