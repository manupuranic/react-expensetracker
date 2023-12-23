import React from "react";
import Expense from "../Expenses/Expense";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const preLoginContent = (
    <div>
      <h3 className="text-center fw-bold fs-2 mt-2 text-primary">
        Welcome to Expense Tracker
      </h3>
      <span className="d-block mt-4 fs-4 fw-semibold text-center">
        <Link
          to="/auth"
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
      {isLoggedIn && <Expense />}
      {!isLoggedIn && preLoginContent}
    </div>
  );
};

export default Home;
