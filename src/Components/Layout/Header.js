import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className="shadow-sm">
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand
            href="#home"
            className="fw-bold fst-italic text-primary">
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
              <NavLink
                to="/auth"
                className={({ isActive }) =>
                  isActive ? classes.activeClass : classes.defaultClass
                }>
                Auth
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? classes.activeClass : classes.defaultClass
                }>
                Account
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
