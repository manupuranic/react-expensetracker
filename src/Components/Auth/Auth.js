import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import classes from "./Auth.module.css";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../store/Auth-context";
const FIREBASE_API_KEY = "API_KEY";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isValidForm: false,
    isPasswordValid: true,
  });

  const toggleState = () => {
    setIsLogin((prev) => !prev);
    setFormState({
      email: "",
      password: "",
      confirmPassword: "",
      isPasswordValid: true,
      isValidForm: false,
    });
  };

  const inputHandler = (e) => {
    const updatedState = {
      ...formState,
    };
    updatedState[e.target.name] = e.target.value;
    const emailValidity = updatedState.email.includes("@");
    const passwordValidity = updatedState.password.length > 5;
    let confirmPasswordValid = true;
    if (!isLogin) {
      confirmPasswordValid =
        updatedState.password === updatedState.confirmPassword;
    }
    updatedState.isPasswordValid = confirmPasswordValid;
    updatedState.isValidForm =
      emailValidity && passwordValidity && confirmPasswordValid;
    setFormState(updatedState);
  };

  const footer = isLogin ? "New User? Signup" : "Existing User? Login";

  const submitHandler = async (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: formState.email,
          password: formState.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        authCtx.login(data.idToken);
        setFormState({
          email: "",
          password: "",
          confirmPassword: "",
          isPasswordValid: true,
          isValidForm: false,
        });
        navigate("/", { replace: true });
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container fluid className="w-50 shadow p-4 rounded mt-5">
      <h1 className="text-center">{isLogin ? "Login" : "Signup"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formState.email}
            onChange={inputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={inputHandler}
          />
          {!isLogin && (
            <Form.Text className="text-muted">
              Length must be greater than 6.
            </Form.Text>
          )}
        </Form.Group>

        {!isLogin && (
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={inputHandler}
            />
            {!formState.isPasswordValid && (
              <p className={classes.passwordStatus}>Passwords don't match!!</p>
            )}
          </Form.Group>
        )}

        <Button
          variant="success"
          disabled={!formState.isValidForm}
          className="w-100"
          type="submit">
          {isLogin ? "Login" : "Sign Up"}
        </Button>

        <Button
          variant="outline-dark"
          className="d-block w-100 mt-1"
          type="button"
          onClick={toggleState}>
          {footer}
        </Button>
      </Form>
    </Container>
  );
};

export default Auth;
