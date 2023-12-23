export const addNewExpense = async (expense, userId) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${userId}.json`;

  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(expense),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchExpenses = async (userId) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${userId}.json`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      const expenses = [];
      for (let expenseId in data) {
        const expense = {
          id: expenseId,
          amount: data[expenseId].amount,
          desc: data[expenseId].desc,
          category: data[expenseId].category,
        };
        expenses.push(expense);
      }
      // console.log(expenses);
      return expenses;
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateExpense = async (expense, id, userId) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${userId}/${id}.json`;
  try {
    const response = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify(expense),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteExpenseApi = async (id, userId) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${userId}/${id}.json`;
  try {
    const response = await fetch(URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};
