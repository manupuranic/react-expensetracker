import React from "react";
import Header from "./Header";

const RootLayout = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default RootLayout;
