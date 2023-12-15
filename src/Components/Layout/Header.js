import React, { useContext } from "react";
import { Container, Nav, Navbar, Image, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../../store/Auth-context";
import ProfileContext from "../../store/Profile-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const profileCtx = useContext(ProfileContext);
  let userImg;
  if (profileCtx.photoURL === "") {
    userImg =
      "https://www.pngkey.com/png/detail/52-522921_kathrine-vangen-profile-pic-empty-png.png";
  } else {
    userImg = profileCtx.photoURL;
  }
  return (
    <header className="shadow-sm">
      <Navbar expand="lg" className="bg-body-light">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-primary">
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
              {!authCtx.isLoggedIn && (
                <NavLink
                  to="/auth"
                  className={({ isActive }) =>
                    isActive ? classes.activeClass : classes.defaultClass
                  }>
                  Login
                </NavLink>
              )}
              {authCtx.isLoggedIn && (
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
                  <NavDropdown.Item>
                    <Link style={{ textDecoration: "none" }} to="/profile">
                      <p>Account</p>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <p onClick={authCtx.logout} className="text-primary">
                      Logout
                    </p>
                  </NavDropdown.Item>
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
