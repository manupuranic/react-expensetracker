export const initializePremium = async () => {
  const userId = localStorage.getItem("user");
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/premium/${userId}.json`;

  try {
    const response = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify({
        isPremium: false,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const updatePremiumProfile = async () => {
  const userId = localStorage.getItem("user");
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/premium/${userId}.json`;

  try {
    const response = await fetch(URL, {
      method: "PUT",
      body: JSON.stringify({
        isPremium: true,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchPremiumStatus = async () => {
  const userId = localStorage.getItem("user");
  const URL = `https://expense-tracker-7e7f9-default-rtdb.firebaseio.com/premium/${userId}.json`;

  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.ok) {
      let { isPremium } = data;
      return isPremium;
    }
  } catch (error) {
    console.log(error);
  }
};
