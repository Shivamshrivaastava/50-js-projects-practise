import { Github } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function Footer() {
    return (
        <footer>
          <Container className="p-4">
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item className="">
                <Nav.Link className="link-dark" href="https://weyrath.com/">
                  (c) 2022 Thomas Weyrath
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-auto">
                <Nav.Link className="link-dark" href="https://github.com/shivamshrivaastava">
                  Source at github.com <Github />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </footer>
      );
    }
    
    export default Footer;