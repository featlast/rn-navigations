import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth";
import contacReducer from '../features/contacts/contacts'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contacReducer,
  },
});
