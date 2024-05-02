import Cat from "./Cat";
import { UseContextExample } from "../examples/UseContextExample";
import { useContext } from "react";

const Ball = () => {
  const { dispatch } = useContext(UseContextExample);

  return (
    <div>
      Ball:{" "}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        ball button
      </button>
      <Cat />
    </div>
  );
};

export default Ball;
