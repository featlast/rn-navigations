import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import MyInput from "../Components/MyInput";
import { Colors } from "../Constants/Colors";

export default AddContacts = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <MyInput />
      </View>
      <Button title={"Add"} color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: "5%",
  },
});
