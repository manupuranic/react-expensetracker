import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  photoURL: "",
  isComplete: false,
  isEmailVerified: false,
  email: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile(state, action) {
      const { displayName, email, photoURL, isEmailVerified } = action.payload;
      state.displayName = displayName;
      state.email = email;
      state.photoURL = photoURL;
      state.isEmailVerified = isEmailVerified;
      if (
        displayName &&
        displayName.trim().length !== 0 &&
        photoURL &&
        photoURL.trim().length !== 0
      ) {
        state.isComplete = true;
      }
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
