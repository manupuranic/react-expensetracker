import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

import HomeComponent from "../Components/Home/Home";
import Notification from "../Components/Notification/Notification";

const Home = () => {
  // const profileCtx = useContext(ProfileContext);
  const isComplete = useSelector((state) => state.profile.isComplete);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      {!isComplete && isLoggedIn && (
        <Notification>
          <p className="d-inline me-2 fst-italic">Your profile is incomplete</p>
          <Link to="/profile">
            <Button className="d-inline shadow me-2">Complete Now</Button>
          </Link>
        </Notification>
      )}
      <HomeComponent />
    </>
  );
};

export default Home;
