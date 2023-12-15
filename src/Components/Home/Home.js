import React, { useContext } from "react";
import ProfileContext from "../../store/Profile-context";

const Home = () => {
  const profileCtx = useContext(ProfileContext);
  return (
    <div>
      <h1 className="fw-bold text-center mt-3 text-primary">
        Hi, {profileCtx.displayName}
      </h1>
      <h3 className="text-center text-primary">Welcome to Expense Tracker</h3>
    </div>
  );
};

export default Home;
