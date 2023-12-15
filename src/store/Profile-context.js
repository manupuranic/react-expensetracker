import { createContext, useCallback, useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../utils/profile";

const ProfileContext = createContext({
  displayName: null,
  photoURL: null,
  isComplete: false,
  updateDetails: (name, photoURL) => {},
});

export const ProfileProvider = (props) => {
  const [userData, setUserData] = useState({
    displayName: null,
    photoURL: null,
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

  const profileCtx = {
    displayName: userData.displayName,
    photoURL: userData.photoURL,
    isComplete: !!userData.displayName && !!userData.photoURL,
    updateDetails: updateUser,
  };

  return (
    <ProfileContext.Provider value={profileCtx}>
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
