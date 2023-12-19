export const addNewExpense = async (expense) => {
  const URL =
    "https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses.json";

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

export const fetchExpenses = async () => {
  const URL =
    "https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses.json";

  try {
    const response = await fetch(URL, {
      method: "GET",
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

export const updateExpense = async (expense, id) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${id}.json`;
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

export const deleteExpenseApi = async (id) => {
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/expenses/${id}.json`;
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
