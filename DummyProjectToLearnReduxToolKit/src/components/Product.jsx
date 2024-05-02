import { useEffect } from "react";
import Card from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import Alert from "react-bootstrap/Alert";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // api
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));
    //
    // dispatch an action for fetchProducts
    dispatch(getProducts());
  }, [dispatch]);

  if (status === StatusCode.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === StatusCode.ERROR) {
    return (
      <Alert variant="danger" key={"danger"}>
        Something went wrong! Try again later
      </Alert>
    );
  }

  return (
    <div>
      <h1 className="text-center">Product DashBoard</h1>
      <div className="row">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Product;
