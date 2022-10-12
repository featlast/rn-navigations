import { View, Text, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "../Style/Global";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../features/contacts/contacts";

export default ContactsRedux= () => {
  const dispatch = useDispatch();
  const contacts = useSelector (state => state.contacts)

  function handleLongPress (id){
    dispatch(deleteContact(id))
  }
return (
  <View style={globalStyles.simpleContainer}>
    <Text style={globalStyles.simpleTitle}>Contacts REDUX</Text>
    {contacts.map ((i, index) => (
    <Pressable key={index} onLongPress={()=> handleLongPress(i.id)}>
      <Text style={globalStyles.simpleTitle}>{i.name}
      </Text>
    </Pressable>))}
  </View>
);
}
