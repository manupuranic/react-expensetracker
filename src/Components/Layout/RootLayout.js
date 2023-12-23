import React from "react";
import Header from "./Header";
import Notification from "../Notification/Notification";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const RootLayout = (props) => {
  const isEligible = useSelector((state) => state.expense.isEligible);

  return (
    <>
      <Header />
      {isEligible && (
        <Notification>
          <p className="d-inline m-1 fst-italic">
            You are eligible for premium Account!
          </p>
          <Button className="d-inline shadow m-1">Activate Now</Button>
        </Notification>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default RootLayout;
