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
import { fetchPremiumStatus } from "./utils/premium";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const fetchUserDetails = useCallback(async () => {
    const profile = await getUserDetails();
    const isPremium = await fetchPremiumStatus();
    dispatch(profileActions.updateProfile(profile));
    dispatch(profileActions.updatePremium(isPremium));
  }, [dispatch]);

  useEffect(() => {
    fetchUserDetails();
  }, [fetchUserDetails]);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#343a40" : "#fff";
  }, [darkMode]);

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
