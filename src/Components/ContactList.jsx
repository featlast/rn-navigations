import { View, Text, ScrollView } from "react-native";
import React from "react";

export default ContactList = ({ contacts }) => {
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact.name} />
      ))}
    </ScrollView>
  );
};

function Contact({ contact }) {
  return (
    <View>
      <Text>{contact}</Text>
    </View>
  );
}
