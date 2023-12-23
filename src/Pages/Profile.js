import React from "react";
import { useSelector } from "react-redux";

import { Button } from "react-bootstrap";

import ProfileComponent from "../Components/Profile/Profile";
import Notification from "../Components/Notification/Notification";

import { verifyMailApi } from "../utils/profile";

const Profile = () => {
  // const profileCtx = useContext(ProfileContext);
  const isEmailVerified = useSelector((state) => state.profile.isEmailVerified);

  const verifyMailHandler = async () => {
    await verifyMailApi();
    alert("Mail has been sent, Please check your inbox.");
  };
  return (
    <>
      {!isEmailVerified && (
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
