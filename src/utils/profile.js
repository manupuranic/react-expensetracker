export const getUserDetails = async () => {
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=API_KEY";
  const token = localStorage.getItem("token");
  if (token) {
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
          isEmailVerified: user.emailVerified,
          email: user.email,
        };
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.log(error);
      return {
        displayName: "",
        photoURL: "",
        isEmailVerified: false,
      };
    }
  } else {
    return {
      displayName: "",
      photoURL: "",
      isEmailVerified: false,
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
        isEmailVerified: data.emailVerified,
        email: data.email,
      };
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const verifyMailApi = async () => {
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=API_KEY";
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        idToken: localStorage.getItem("token"),
        requestType: "VERIFY_EMAIL",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      return "mail sent";
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
  }
};

export const resetPassword = async (email) => {
  const URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=API_KEY";
  try {
    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        requestType: "PASSWORD_RESET",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      console.log(data);
      alert("Mail has been sent, Please check!");
    } else {
      throw new Error(data.error.message);
    }
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
