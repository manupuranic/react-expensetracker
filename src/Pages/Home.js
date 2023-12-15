import React, { useContext } from "react";
import HomeComponent from "../Components/Home/Home";
import Notification from "../Components/Notification/Notification";
import ProfileContext from "../store/Profile-context";
import AuthContext from "../store/Auth-context";

const Home = () => {
  const profileCtx = useContext(ProfileContext);
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!profileCtx.isComplete && authCtx.isLoggedIn && <Notification />}
      <HomeComponent />
    </>
  );
};

export default Home;
