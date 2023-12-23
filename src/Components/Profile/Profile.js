import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Container, Form } from "react-bootstrap";

import { updateUserDetails, getUserDetails } from "../../utils/profile";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  const { displayName, photoURL, email } = useSelector(
    (state) => state.profile
  );

  const [userData, setUserData] = useState({
    displayName: displayName,
    photoURL: photoURL,
    email: email,
  });

  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  const inputChangeHandler = (e) => {
    const updatedUser = { ...userData };
    updatedUser[e.target.name] = e.target.value;
    setUserData(updatedUser);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await updateUserDetails(userData.displayName, userData.photoURL);
    toggleEdit();
    await getUserDetails();
  };

  const cancelHandler = () => {
    setUserData({
      displayName: displayName,
      photoURL: photoURL,
      email: email,
    });
    toggleEdit();
  };

  return (
    <>
      <Container className="shadow rounded p-4 mt-4">
        <h3 className="text-primary text-center fw-bold">My Account</h3>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="text" disabled={true} value={userData.email} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Display Name: </Form.Label>
            <Form.Control
              type="text"
              disabled={!edit}
              value={userData.displayName}
              name="displayName"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profile Photo URL: </Form.Label>
            <Form.Control
              type="text"
              disabled={!edit}
              value={userData.photoURL}
              name="photoURL"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          {edit && <Button type="submit">Update</Button>}
          {!edit && (
            <Button type="click" onClick={toggleEdit}>
              Edit
            </Button>
          )}
          {edit && (
            <Button
              className="ms-2"
              variant="outline-primary"
              type="click"
              onClick={cancelHandler}>
              Cancel
            </Button>
          )}
        </Form>
      </Container>
    </>
  );
};

export default Profile;
