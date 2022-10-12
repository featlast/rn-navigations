/**agregando Context */
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

// let nextIde = 3;
const initialContacts = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Lee" }
];

const contactsStore = React.createContext([])
const { Provider } = contactsStore

function ContactsProvider ({ children }){
  const [contacts, dispatch] = React.useReducer(contactReducer,[])
  /**USE REDUCER */

React.useEffect(()=>{
  getContacts()
},[])

async function getContacts (){
  const contacts = await AsyncStorage.getItem('@contacts')
  if(contacts === null){
    await AsyncStorage.setItem('@contacts', JSON.stringify(initialContacts))
    dispatch({type:'SET_CONTACTS', contacts: initialContacts})
  }else{
    dispatch({type: 'SET_CONTACTS', contacts: JSON.parse(contacts)})
  }
}
  /**Metodo para agregar un contacto */
  const handleAddContact = (name) => {
    dispatch({type:'ADD', id: Math.random(), name})
    //setContacts([...contacts, { id: nextIde++, name }]);
  };

  /**Metodo para eliminar un contacto */
  const handleDeleteContact = (id) => {
    dispatch({type: 'DELETE', id})
    //setContacts(contacts.filter((contact) => contact.id !== id));
  };

  /**Metodo para editar nuestro usuario */
  const handleChangeContact = (contact) => {
    dispatch({type:'CHANGE', contact})
    //setContacts(contacts.map((c) => (c.id === contact.id ? contact : c)));
  };
  return(
      //<contactsStore.Provider>
      <Provider value={{
        contacts,
        handleAddContact,
        handleChangeContact,
        handleDeleteContact
      }}>
        {children}
      </Provider>
      //</contactsStore.Provider>
  )
}

export { ContactsProvider, contactsStore }

export function contactReducer (contacts, action) {

  /**Uso de Switch Case */
  switch (action.type) {
    case 'SET_CONTACTS': {
      return action.contacts;
    }
    case 'ADD': {
      const newContacts = [...contacts, { id: action.id, name:action.name }]
      const jsonValue = JSON.stringify(newContacts)
      AsyncStorage.setItem('@contacts', jsonValue)
      return  newContacts;
    }
    case 'DELETE':{ 
      const newContacts = contacts.filter((contact) => contact.id !== action.id)
      const jsonValue= JSON.stringify(newContacts)
      AsyncStorage.setItem('@contacts', jsonValue)
      return  newContacts
    }
    case 'CHANGE':{ 
      const newContacts = contacts.map((c) => (c.id === action.contact.id ? action.contact : c))
      const jsonValue = JSON.stringify(newContacts)
      AsyncStorage.setItem('@contacts',jsonValue)
      return  newContacts
    }
    default:{
      throw new Error ('Unknow action type: ' + action.type)
    }
  }
}
  /**Practica no recomendada con If para State Reducer */
  // if(action.type === 'ADD'){
  //   return [...contacts, { id: action.id, name:action.name }]
  // } else if (action.type === 'DELETE'){
  //   return (contacts.filter((contact) => contact.id !== action.id))
  // } else if ( action.type === 'CHANGE'){
  //   return (contacts.map((c) => (c.id === action.contact.id ? action.contact : c)))
  // }else {
  //   throw new Error ('Unknow action type: ' + action.type)
  // }

