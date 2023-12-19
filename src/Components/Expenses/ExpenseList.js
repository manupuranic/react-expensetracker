import React from "react";
import { Button } from "react-bootstrap";

const ExpenseList = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div
        className="shadow p-3 bg-primary text-white fw-semibold rounded-4 text-center"
        style={{ width: "90px" }}>
        <span>₹{props.amount}</span>
      </div>
      <div>
        <span className="fs-3 fw-semibold text-primary text-capitalize">
          {props.desc}
        </span>
        <span className="fst-italic d-block text-center text-secondary">
          {props.category}
        </span>
      </div>
      <div>
        <Button type="button">Edit</Button>
        <Button variant="outline-primary" className="ms-2" type="button">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default ExpenseList;
