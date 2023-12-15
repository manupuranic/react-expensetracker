import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContext from "./store/Auth-context";
import { ProfileProvider } from "./store/Profile-context";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import RootLayout from "./Components/Layout/RootLayout";
import { useContext } from "react";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <ProfileProvider>
      <RootLayout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/profile"
            element={authCtx.isLoggedIn ? <Profile /> : <Navigate to="/auth" />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </RootLayout>
    </ProfileProvider>
  );
}

export default App;
