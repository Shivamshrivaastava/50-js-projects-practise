import { useContext } from "react";
import { UseContextExample } from "../examples/UseContextExample";
import Ball from "./Ball";

const Apple = () => {
  const { state, dispatch } = useContext(UseContextExample);
  return (
    <>
      Apple: {state.name}
      <button
        onClick={() => {
          dispatch({ type: "changeName", payload: "varun" });
        }}
      >
        apple button
      </button>
      <Ball />
    </>
  );
};

export default Apple;
