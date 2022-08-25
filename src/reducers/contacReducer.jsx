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

