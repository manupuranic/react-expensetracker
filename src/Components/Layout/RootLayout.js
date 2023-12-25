import React from "react";
import Header from "./Header";
import Notification from "../Notification/Notification";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPremiumStatus, updatePremiumProfile } from "../../utils/premium";
import { profileActions } from "../../store/profile";

const RootLayout = (props) => {
  const isEligible = useSelector((state) => state.expense.isEligible);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isPremium = useSelector((state) => state.profile.isPremium);
  const dispatch = useDispatch();

  console.log("ispremium = ", isPremium);

  const activatePremiumHandler = async () => {
    await updatePremiumProfile();
    const isPremium = await fetchPremiumStatus();
    dispatch(profileActions.updatePremium(isPremium));
    alert("Premium Account Activated");
  };

  return (
    <>
      <Header />
      {isEligible && isLoggedIn && !isPremium && (
        <Notification>
          <p className="d-inline m-1 fst-italic">
            You are eligible for premium Account!
          </p>
          <Button
            onClick={activatePremiumHandler}
            className="d-inline shadow m-1">
            Activate Now
          </Button>
        </Notification>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default RootLayout;
