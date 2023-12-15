export const getUserDetails = async () => {
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=API_KEY";
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        idToken: localStorage.getItem("token"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      const user = data.users[0];
      return {
        displayName: user.displayName,
        photoURL: user.photoUrl,
      };
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
    return {
      displayName: "",
      photoURL: "",
    };
  }
};

export const updateUserDetails = async (name, photoURL) => {
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:update?key=API_KEY";
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        idToken: localStorage.getItem("token"),
        displayName: name,
        photoUrl: photoURL,
        returnSecureToken: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      return {
        displayName: data.displayName,
        photoURL: data.photoUrl,
      };
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};
