import { createContext, useCallback, useEffect, useState } from "react";
import {
  getUserDetails,
  updateUserDetails,
  verifyMailApi,
  resetPassword,
} from "../utils/profile";

const ProfileContext = createContext({
  displayName: null,
  photoURL: null,
  isComplete: false,
  isEmailVerified: false,
  email: null,
  updateDetails: (name, photoURL) => {},
  verifyMail: () => {},
  resetPassword: (email) => {},
  fetchDetails: () => {},
});

export const ProfileProvider = (props) => {
  const [userData, setUserData] = useState({
    displayName: null,
    photoURL: null,
    isEmailVerified: false,
  });

  const fetchUserData = useCallback(async () => {
    const initialUserData = await getUserDetails();
    setUserData(initialUserData);
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const updateUser = async (name, photoURL) => {
    const updatedData = await updateUserDetails(name, photoURL);
    setUserData(updatedData);
  };

  //   const setUserDetails = () => {
  //     setUserData(ProfileService.getUserDetails());
  //   }

  const verifyMailHandler = async () => {
    await verifyMailApi();
  };

  const resetPasswordHandler = async (email) => {
    await resetPassword(email);
  };

  const profileCtx = {
    displayName: userData.displayName,
    photoURL: userData.photoURL,
    email: userData.email,
    isComplete: !!userData.displayName && !!userData.photoURL,
    isEmailVerified: userData.isEmailVerified,
    updateDetails: updateUser,
    verifyMail: verifyMailHandler,
    resetPassword: resetPasswordHandler,
    fetchDetails: fetchUserData,
  };

  return (
    <ProfileContext.Provider value={profileCtx}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
