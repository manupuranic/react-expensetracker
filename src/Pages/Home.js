import React, { useContext } from "react";
import HomeComponent from "../Components/Home/Home";
import Notification from "../Components/Notification/Notification";
import ProfileContext from "../store/Profile-context";
import AuthContext from "../store/Auth-context";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const profileCtx = useContext(ProfileContext);
  const authCtx = useContext(AuthContext);
  return (
    <>
      {!profileCtx.isComplete && authCtx.isLoggedIn && (
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
