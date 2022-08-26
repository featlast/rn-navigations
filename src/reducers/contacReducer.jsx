/**agregando Context */
import * as React from 'react';

let nextIde = 3;
const initialContacts = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Lee" }
];

const contactsStore = React.createContext(initialContacts)
const { Provider } = contactsStore

function ContactsProvider ({ children }){
  const [contacts, dispatch] = React.useReducer(contactReducer,initialContacts)
  /**USE REDUCER */
  /**Metodo para agregar un contacto */
  const handleAddContact = (name) => {
    dispatch({type:'ADD', id: nextIde++, name})
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
    case 'ADD': {
      return [...contacts, { id: action.id, name:action.name }] 
    }
    case 'DELETE':{ 
      return contacts.filter((contact) => contact.id !== action.id) 
    }
    case 'CHANGE':{ 
      return contacts.map((c) => (c.id === action.contact.id ? action.contact : c)) 
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

