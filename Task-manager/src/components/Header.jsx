import { useContext } from "react";
import { Link } from "react-router-dom";

import { Flower2 } from "react-bootstrap-icons";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import AuthContext from "../AuthContext";

/*
 * The header component with brand (left) and user info/commands (right).
 */
function Header({ title }) {
  const { loggedInUser, logoutUser } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="ps-4">
        <Navbar.Brand as={Link} to="/">
          <Flower2 className="me-2" />
          {title}
        </Navbar.Brand>
        {!loggedInUser ? (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-4">
                <Nav.Link as={Link} to="/login">
                  Sign in
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          <>
            <Nav className="ms-auto me-4">
              <Nav.Link as={Link} to="/" onClick={logoutUser}>
                Logout
              </Nav.Link>
            </Nav>
            <Navbar.Text>User: {loggedInUser.username}</Navbar.Text>
          </>
        )}
      </Container>
    </Navbar>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
