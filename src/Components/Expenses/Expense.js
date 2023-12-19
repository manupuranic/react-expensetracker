import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import NewExpense from "./NewExpense";
import ExpenseList from "./ExpenseList";
import ExpenseContext from "../../store/Expense-context";
import classes from "./Expense.module.css";

const Expense = () => {
  const expenseCtx = useContext(ExpenseContext);
  const [hideForm, setHideForm] = useState(true);
  const [edit, setEdit] = useState(false);
  const [editValues, setEditValues] = useState({
    id: "",
    amount: "",
    desc: "",
    category: 0,
  });

  // const toggleEdit = () => {
  //   setEdit((prevState) => !prevState);
  // };

  const toggleForm = () => {
    setEdit(false);
    setHideForm((prevState) => !prevState);
  };

  const editExpenses = (expense) => {
    toggleForm();
    setEdit(true);
    setEditValues({
      id: expense.id,
      amount: expense.amount,
      desc: expense.desc,
      category: expense.category,
    });
  };

  let content;
  if (expenseCtx.expenses.length) {
    content = expenseCtx.expenses.map((expense) => (
      <ExpenseList
        key={expense.id}
        id={expense.id}
        amount={expense.amount}
        desc={expense.desc}
        category={expense.category}
        onEdit={editExpenses}
      />
    ));
  } else {
    content = (
      <p className="text-primary text-center fw-bold">
        No Expenses Found, Add your expenses
      </p>
    );
  }

  const addExpenseButton = (
    <Button
      className="p-4 shadow-lg fs-5 fw-bold rounded-4"
      onClick={toggleForm}>
      Add New Expense
    </Button>
  );

  return (
    <>
      <div className={classes.totalCard}>
        <h1 className="fs-5">Total Expense:</h1>
        <p className="fs-1 fw-bold">₹{expenseCtx.totalExpense.toFixed(2)}</p>
      </div>
      <Container className="shadow p-4 mt-4 rounded-4 d-flex justify-content-center">
        {!hideForm ? (
          <NewExpense edit={edit} values={editValues} onHideForm={toggleForm} />
        ) : (
          addExpenseButton
        )}
      </Container>
      <Container className="shadow p-4 mt-4 mb-4 rounded-4">
        <ul className="list-group">{content}</ul>
      </Container>
    </>
  );
};

export default Expense;
