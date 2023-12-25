import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import profileReducer from "./profile";
import expenseReducer from "./expense";
import themeReducer from "./Theme";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    expense: expenseReducer,
    theme: themeReducer,
  },
});

export default store;
