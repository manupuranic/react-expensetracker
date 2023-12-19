import { createContext, useCallback, useEffect, useState } from "react";
import { addNewExpense, fetchExpenses } from "../utils/expense";

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
  getExpenses: () => {},
});

export const ExpenseProvider = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const getExpenses = useCallback(async () => {
    const initialExpensesObj = await fetchExpenses();
    const initialExpenses = [];
    let initialTotal = 0;
    for (let expenseId in initialExpensesObj) {
      const { amount, desc, category } = initialExpensesObj[expenseId];
      const exp = {
        id: expenseId,
        amount: amount,
        desc: desc,
        category: category,
      };
      initialExpenses.push(exp);
      initialTotal += parseFloat(amount);
    }
    setExpenses(initialExpenses);
    setTotal(initialTotal);
  }, []);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const addExpenseHandler = async (expense) => {
    const newExpense = {
      amount: expense.amount,
      desc: expense.desc,
      category: expense.category,
    };
    const id = await addNewExpense(newExpense);
    newExpense.id = id;
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    setTotal((prevTotal) => prevTotal + parseFloat(newExpense.amount));
  };

  const expenseCtx = {
    expenses: expenses,
    totalExpense: total,
    addExpense: addExpenseHandler,
    getExpenses: getExpenses,
  };

  return (
    <ExpenseContext.Provider value={expenseCtx}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
