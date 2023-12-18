import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContext from "./store/Auth-context";
import { ProfileProvider } from "./store/Profile-context";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import RootLayout from "./Components/Layout/RootLayout";
import { useContext } from "react";
import { ExpenseProvider } from "./store/Expense-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <ProfileProvider>
      <ExpenseProvider>
        <RootLayout>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/profile"
              element={
                authCtx.isLoggedIn ? <Profile /> : <Navigate to="/auth" />
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </RootLayout>
      </ExpenseProvider>
    </ProfileProvider>
  );
}

export default App;
