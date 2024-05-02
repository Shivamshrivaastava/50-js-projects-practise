import Cart from "./Cart";
import { CartState } from "../context/Context";

const Home = () => {
  const { state } = CartState(Cart);
  return <div>I am Home</div>;
};

export default Home;
