import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarPage = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#">React Toolkit</Navbar.Brand>

        <Nav>
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>
        </Nav>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>
              My Bag: {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
