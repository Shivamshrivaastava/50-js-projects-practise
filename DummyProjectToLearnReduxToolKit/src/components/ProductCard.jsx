/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer
          style={{ backgroundColor: "white" }}
          className="text-center"
        >
          <Button
            variant="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCard;
