import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import MyInput from "../Components/MyInput";
import { Colors } from "../Constants/Colors";
import { contactsStore } from "../reducers/contacReducer";

export default AddContacts = () => {
  const { handleAddContact } = React.useContext(contactsStore)
  const [name, setName] = useState("");

  const handleAdd = () => {
    setName("");
    handleAddContact(name);
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "80%" }}>
        <MyInput label={"Add Contact"} value={name} onChangeText={setName} />
      </View>
      <Button title={"Add"} color={Colors.primary} onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: "5%"
  }
});
