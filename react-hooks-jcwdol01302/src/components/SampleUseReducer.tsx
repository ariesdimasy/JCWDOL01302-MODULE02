import { useReducer } from "react";

import counterReducer from "./../reducer/counterReducer";

export default function SampleUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  return (
    <div>
      <div>
        <button onClick={decrement}> - </button>
        <div>Count : {state.count}</div>
        <button onClick={increment}> + </button>
      </div>
    </div>
  );
}
