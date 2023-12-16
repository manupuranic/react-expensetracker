import React, { useContext } from "react";
import ProfileComponent from "../Components/Profile/Profile";
import Notification from "../Components/Notification/Notification";
import { Button } from "react-bootstrap";
import ProfileContext from "../store/Profile-context";

const Profile = () => {
  const profileCtx = useContext(ProfileContext);
  const verifyMailHandler = () => {
    profileCtx.verifyMail();
    alert("Mail has been sent, Please check your inbox.");
  };
  return (
    <>
      {!profileCtx.isEmailVerified && (
        <Notification>
          <p className="mt-3">Your mail is not verified</p>
          <Button onClick={verifyMailHandler} className="m-2">
            Verify Now
          </Button>
        </Notification>
      )}
      <ProfileComponent />
    </>
  );
};

export default Profile;
