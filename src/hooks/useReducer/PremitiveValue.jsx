import { useReducer } from "react";

const initialValue = 5;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
export default function PremitiveValue() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Count - {count}</h1>
      <div className="flex gap-5">
        <button
          type="button"
          onClick={() => dispatch("increment")}
          className="button"
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch("decrement")}
          className="button"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
