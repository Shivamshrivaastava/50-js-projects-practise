import { useContext } from "react";
import { UseContextExample } from "../examples/UseContextExample";

const Cat = () => {
  const { message, state } = useContext(UseContextExample);
  return (
    <div>
      Cat: {message} || {state.count}
    </div>
  );
};

export default Cat;
