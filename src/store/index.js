import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth";
import profileReducer from "./profile";
import expenseReducer from "./expense";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    expense: expenseReducer,
  },
});

export default store;
