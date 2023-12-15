import React from "react";
import classes from "./Notification.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Notification = () => {
  return (
    <div className={classes.notification}>
      <p className="d-inline me-2 fst-italic">Your profile is incomplete</p>
      <Link to="/profile">
        <Button className="d-inline shadow me-2">Complete Now</Button>
      </Link>
    </div>
  );
};

export default Notification;
