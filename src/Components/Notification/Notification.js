import React from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  return <div className={classes.notification}>{props.children}</div>;
};

export default Notification;
