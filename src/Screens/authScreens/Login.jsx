import { View, Text } from "react-native";
import { useState } from "react";
import React from "react";
import { globalStyles } from "../../Style/Global";
import MyInput from "../../Components/MyInput";
import MyButton from "../../Components/MyButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/auth/auth";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  async function save(value) {
    try {
      await AsyncStorage.setItem("@token", value);
      dispatch(signIn(value));
      console.log("data Saved");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput label={"Email"} value={token} onChangeText={setToken} />
      <MyInput label={"Password"} secureTextEntry />
      <MyButton title={"Sign In"} onPress={() => save(token)} />
      <MyButton
        title={"Sign Up"}
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default Login;
