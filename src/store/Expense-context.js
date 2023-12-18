import { createContext, useState } from "react";

const ExpenseContext = createContext({
  expenses: [
    {
      id: "",
      amount: "",
      desc: "",
      category: "",
    },
  ],
  totalExpense: 0,
  addExpense: (expense) => {},
});

export const ExpenseProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpenseHandler = (expense) => {
    const newExpense = {
      id: Math.random(),
      amount: expense.amount,
      desc: expense.desc,
      category: expense.category,
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setTotal((prevTotal) => prevTotal + parseFloat(newExpense.amount));
  };

  const expenseCtx = {
    expenses: expenses,
    totalExpense: total,
    addExpense: addExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseCtx}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
