import React, { useContext } from "react";
import HomeComponent from "../Components/Home/Home";
import Notification from "../Components/Notification/Notification";
import ProfileContext from "../store/Profile-context";

const Home = () => {
  const profileCtx = useContext(ProfileContext);
  return (
    <>
      {!profileCtx.isComplete && <Notification />}
      <HomeComponent />
    </>
  );
};

export default Home;
