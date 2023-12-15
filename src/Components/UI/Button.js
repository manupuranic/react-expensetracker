import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  let customClass;
  if (props.variant === "primary") {
    customClass = classes.primary;
  } else {
    customClass = classes.secondary;
  }
  //   customClass += props.className;
  return (
    <button
      {...props.btn}
      className={customClass}
      style={{ cursor: props.btn.disabled ? "not-allowed" : "pointer" }}>
      {props.children}
    </button>
  );
};

export default Button;
