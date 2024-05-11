import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NotFound = () => (
  <Container className="p-4 text-center">
    <h1>404 - Not Found</h1>
    <p></p>
    <Link to="/" className="btn btn-success btn-lg" role="button">
      Go Home
    </Link>
  </Container>
);

export default NotFound;
