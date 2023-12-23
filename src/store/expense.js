import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "",
      amount: "",
      desc: "",
      category: "",
    },
  ],
  totalExpense: 0,
  isEligible: false,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialState,
  reducers: {
    updateExpense(state, action) {
      const expenses = action.payload;
      let initialTotal = 0;
      for (let expense of expenses) {
        initialTotal += parseFloat(expense.amount);
      }
      state.expenses = expenses;
      state.totalExpense = initialTotal;
      if (initialTotal >= 10000) {
        state.isEligible = true;
      }
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
