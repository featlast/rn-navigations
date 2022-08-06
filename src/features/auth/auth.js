import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: null,
  isLoading: true,
  isSignOut: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    restoreToken: (state, action) => {
      state.userToken = action.payload;
      state.isLoading = false;
    },
    signIn: (state, action) => {
      state.isSignOut = false;
      state.userToken = action.payload;
    },
    signOut: (state) => {
      state.isSignOut = true;
      state.userToken = null;
    },
  },
});

export const { restoreToken, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
