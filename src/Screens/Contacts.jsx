import { View, Text } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../Style/Global";
import { Button } from "react-native";
import AddContacts from "../Components/AddContacts";
import ContactList from "../Components/ContactList";

export default Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <View style={globalStyles.simpleContainer}>
      <Text style={globalStyles.simpleTitle}>Contacts</Text>
      <AddContacts />
      <ContactList contacts={contacts} />
    </View>
  );
};

const initialContacts = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Lee" },
];
