import {
  Navbar,
  FormControl,
  Container,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 100 }}>
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          ></FormControl>
        </Navbar.Text>

        <Nav>
          <Dropdown align={"end"}>
            <Dropdown.Toggle
              variant="success"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="transparent" color="white" style={{ fontSize: 20 }}>
                {10}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {/* <span style={{ padding: 10 }}>Cart is Empty</span> */}
              <Dropdown.Item as={Link} to={"/cart"}>
                Cart is Empty
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
