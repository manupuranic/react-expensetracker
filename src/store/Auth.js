import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  isLoggedIn: !!localStorage.getItem("token"),
  userId: localStorage.getItem("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.userId = action.payload.userId;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", action.payload.userId);
    },
    logout(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.userId = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
