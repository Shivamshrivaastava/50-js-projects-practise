/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function handleData() {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    handleData();
  }, []);

  let dataPro = products;

  const [state, dispatch] = useReducer(cartReducer, {
    products: dataPro,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
