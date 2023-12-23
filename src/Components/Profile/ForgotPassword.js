import React, { useState } from "react";

import { Row, Col, Container, Form, Button } from "react-bootstrap";

import { resetPassword } from "../../utils/profile";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const inputHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await resetPassword();
  };

  return (
    <Row>
      <Col md={6} xs={12} className="mx-auto">
        <Container className="shadow mt-5 p-4 rounded">
          <h1 className="text-center text-primary fs-4 fw-bold">
            Reset Password
          </h1>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={inputHandler}
              />
            </Form.Group>
            <Button type="submit">Send Link</Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
