import { View, Text } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../Style/Global";
import { Button } from "react-native";
import AddContacts from "../Components/AddContacts";
import ContactList from "../Components/ContactList";

export default Contacts = () => {
  const [contacts, setContacts] = useState(initialContacts);

  /**Metodo para agregar un contacto */
  const handleAddContact = (name) => {
    setContacts([...contacts, { id: nextIde++, name }]);
  };

  /**Metodo para eliminar un contacto */
  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  /**Metodo para editar nuestro usuario */
  const handleChangeContact = (contact) => {
    setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
  };

  return (
    <View style={globalStyles.simpleContainer}>
      <Text style={globalStyles.simpleTitle}>Contacts</Text>
      <AddContacts onAddContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onChangeContact={handleChangeContact}
        onDeleteContact={handleDeleteContact}
      />
    </View>
  );
};

let nextIde = 3;
const initialContacts = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Lee" }
];
