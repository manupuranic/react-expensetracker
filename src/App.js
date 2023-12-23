import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import RootLayout from "./Components/Layout/RootLayout";

import { getUserDetails } from "./utils/profile";
import { profileActions } from "./store/profile";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const fetchUserDetails = useCallback(async () => {
    const profile = await getUserDetails();
    dispatch(profileActions.updateProfile(profile));
  }, [dispatch]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  return (
    <RootLayout>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/auth" />}
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
