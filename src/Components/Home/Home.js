import React, { useContext } from "react";
import AuthContext from "../../store/Auth-context";
import Expense from "../Expenses/Expense";
import { Link } from "react-router-dom";

const Home = () => {
  const authCtx = useContext(AuthContext);

  const preLoginContent = (
    <div>
      <h3 className="text-center fw-bold fs-2 mt-2 text-primary">
        Welcome to Expense Tracker
      </h3>
      <span className="d-block mt-4 fs-4 fw-semibold text-center">
        <Link
          className="text-white bg-primary p-2 rounded"
          style={{ textDecoration: "none" }}>
          Login
        </Link>{" "}
        to track your Expenses
      </span>
    </div>
  );

  return (
    <div>
      {/* <h1 className="fw-bold text-center mt-3 text-primary">
        Hi, {profileCtx.displayName}
      </h1>
       */}
      {authCtx.isLoggedIn && <Expense />}
      {!authCtx.isLoggedIn && preLoginContent}
    </div>
  );
};

export default Home;
