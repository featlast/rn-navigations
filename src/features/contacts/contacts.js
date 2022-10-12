import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Sara Lee" },
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jack Lee" }
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state = state.payload;
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload);
      state.splice(index, 1);
    },
    changeContact: (state, action) => {
      state = state.map((c) =>
        c.id === action.payload.contact.id ? action.payload.contact : c
      );
    }
  }
});

export const { setContacts, addContact, deleteContact, changeContact } =
  contactSlice.actions;
export default contactSlice.reducer;
