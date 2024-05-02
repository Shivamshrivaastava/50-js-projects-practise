import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(remove(id));
  };

  const card = cartProducts.map((product) => {
    return (
      <div
        key={product.id}
        className="col-md-12"
        style={{ marginBottom: "10px" }}
      >
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
              variant="danger"
              onClick={() => {
                removeItem(product.id);
              }}
            >
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1>Cart</h1>
      {card}
    </>
  );
};

export default Cart;
