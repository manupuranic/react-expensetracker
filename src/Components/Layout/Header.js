import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";

import { authActions } from "../../store/Auth";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const photoURL = useSelector((state) => state.profile.photoURL);

  let userImg;
  if (photoURL === "") {
    userImg =
      "https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png";
  } else {
    userImg = photoURL;
  }
  return (
    <header className="shadow-sm">
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3 text-primary">
            Expense Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.activeClass : classes.defaultClass
                }>
                Home
              </NavLink>
              {!isLoggedIn && (
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? classes.activeClass : classes.defaultClass
                  }>
                  Login
                </NavLink>
              )}
              {isLoggedIn && (
                <NavDropdown
                  title={
                    <Image
                      roundedCircle
                      className="me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        objectFit: "cover",
                      }}
                      src={userImg}
                    />
                  }>
                  <Link style={{ textDecoration: "none" }} to="/profile">
                    <p className="ms-3">Account</p>
                  </Link>
                  <p
                    onClick={logoutHandler}
                    style={{ cursor: "pointer" }}
                    className="text-primary ms-3">
                    Logout
                  </p>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
