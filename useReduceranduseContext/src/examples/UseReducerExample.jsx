import { useReducer } from "react";

import Apple from "../components/Apple";

import { UseContextExample } from "../examples/UseContextExample";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "changeName":
      return {
        ...state,
        name: action.payload,
      };
    case "reset":
      return initialState;
  }
};

let initialState = {
  count: 0,
  name: "pani",
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UseContextExample.Provider value={{ message: "hello", state, dispatch }}>
      <h1>Use Reducer Counter by {state.name}</h1>
      <p>
        Count: <span>{state.count}</span>
      </p>

      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "changeName", payload: "pinaka pani" });
        }}
      >
        Change Name
      </button>
      <hr />
      <Apple />
    </UseContextExample.Provider>
  );
};

export default UseReducerExample;
