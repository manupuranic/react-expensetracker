import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import RootLayout from "./Components/Layout/RootLayout";

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
