import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./store/Auth-context";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import RootLayout from "./Components/Layout/RootLayout";

function App() {
  return (
    <AuthProvider>
      <RootLayout>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </RootLayout>
    </AuthProvider>
  );
}

export default App;
