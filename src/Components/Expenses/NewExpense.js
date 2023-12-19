import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ExpenseContext from "../../store/Expense-context";

const NewExpense = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  const [formState, setFormState] = useState({
    amount: "",
    desc: "",
    category: 0,
  });
  const edit = props.edit;
  const { amount, desc, category } = props.values;

  useEffect(() => {
    if (edit) {
      setFormState({
        amount: amount,
        desc: desc,
        category: category,
      });
    }
  }, [edit, amount, desc, category]);

  const inputHandler = (e) => {
    const updatedState = {
      ...formState,
    };
    updatedState[e.target.name] = e.target.value;
    setFormState(updatedState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = {
      amount: formState.amount,
      desc: formState.desc,
      category: formState.category,
    };
    if (!props.edit) {
      expenseCtx.addExpense(expense);
    } else {
      expenseCtx.editExpenses(expense, props.values.id);
    }
    setFormState({
      amount: "",
      desc: "",
      category: 0,
    });
    props.onHideForm();
  };

  return (
    <Container>
      <Form
        onSubmit={submitHandler}
        className="d-lg-flex d-block justify-content-around align-items-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Expense Amount:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Expense Amount"
            name="amount"
            min={0}
            step={0.01}
            value={formState.amount}
            onChange={inputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="desc"
            value={formState.desc}
            onChange={inputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category:</Form.Label>
          <Form.Select
            className="custom-select"
            value={formState.category}
            onChange={inputHandler}
            name="category">
            <option value="0">Select Category</option>
            <option value="Food">Food</option>
            <option value="Petrol">Petrol</option>
            <option value="Movies">Movies</option>
            <option value="Shopping">Shopping</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Others">Others</option>
          </Form.Select>
        </Form.Group>
        <div>
          <Button type="submit">
            {props.edit ? "update Expense" : "Add Expense"}
          </Button>
          <Button
            onClick={props.onHideForm}
            type="button"
            className="ms-3"
            variant="outline-primary">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default NewExpense;
