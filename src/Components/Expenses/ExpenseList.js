import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/expense";
import { deleteExpenseApi, fetchExpenses } from "../../utils/expense";

const ExpenseList = (props) => {
  const dispatch = useDispatch();

  const deleteExpenseHandler = async () => {
    const userId = localStorage.getItem("user");
    await deleteExpenseApi(props.id, userId);
    const expenses = await fetchExpenses(userId);
    dispatch(expenseActions.updateExpense(expenses));
  };

  const editExpenseHandler = () => {
    props.onEdit({
      amount: props.amount,
      id: props.id,
      desc: props.desc,
      category: props.category,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div
        className="shadow p-3 bg-primary text-white fw-semibold rounded-4 text-center"
        style={{ width: "90px" }}>
        <span>₹{props.amount}</span>
      </div>
      <div>
        <span className="fs-3 d-block fw-semibold text-primary text-capitalize">
          {props.desc}
        </span>
        <span className="fst-italic d-block mb-2 text-center text-secondary">
          {props.category}
        </span>
      </div>
      <div>
        <Button onClick={editExpenseHandler} type="button">
          Edit
        </Button>
        <Button
          onClick={deleteExpenseHandler}
          variant="outline-primary"
          className="ms-2"
          type="button">
          Delete
        </Button>
      </div>
    </li>
  );
};

export default ExpenseList;
