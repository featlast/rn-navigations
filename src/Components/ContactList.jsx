import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Pressable
} from "react-native";
import React, { useState, useMemo } from "react";
import MyInput from "./MyInput";
import { getRandomPhoto } from "../utils/randomPhoto";
import { Colors } from "../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default ContactList = ({
  contacts,
  onChangeContact,
  onDeleteContact
}) => {
  return (
    <ScrollView>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onChange={onChangeContact}
          onDelete={onDeleteContact}
        />
      ))}
    </ScrollView>
  );
};

function Contact({ contact, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const memoPhoto = useMemo(() => getRandomPhoto(), []);
  let contactContainer;
  if (isEditing) {
    contactContainer = (
      <View>
        <MyInput
          value={contact.name}
          onChangeText={(text) => onChange({ ...contact, name: text })}
        />
      </View>
    );
  } else {
    contactContainer = (
      <View>
        <Text style={styles.name}>{contact.name}</Text>
      </View>
    );
  }
  return (
    <View style={styles.contactContainer}>
      <View style={styles.row}>
        <Image source={memoPhoto} style={styles.image} />
        {contactContainer}
      </View>
      <View style={styles.row}>
        {isEditing ? (
          <Button title="Save" onPress={() => setIsEditing(false)} />
        ) : (
          <Pressable onPress={() => setIsEditing(true)}>
            <FontAwesome
              name="edit"
              size={24}
              color={Colors.secondary}
              style={{ marginRight: 15, marginTop: 5 }}
            />
          </Pressable>
        )}
        <Pressable onPress={() => onDelete(contact.id)}>
          <FontAwesome
            name="trash"
            size={24}
            color={Colors.secondary}
            style={{ marginRight: 15, marginTop: 5 }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-between"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.dark
  }
});
