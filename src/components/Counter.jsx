import { useSelector, useDispatch } from "react-redux";

import {
  resetCounter,
  decrementCounter,
  incrementCounter,
} from "../services/actions/counterAction";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrementCounter());
    }
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };

  return (
    <>
      <div>
        <h1>Counter App Using React-Redux</h1>
        <h1>Count: {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>RESET</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </>
  );
};
