import { useReducer } from "react";

const initialState = {
  CounterOne: 0,
  CounterTwo: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "incrementOne":
      return { ...state, CounterOne: state.CounterOne + action.value };
    case "decrementOne":
      return { ...state, CounterOne: state.CounterOne - action.value };
    case "incrementTwo":
      return { ...state, CounterTwo: state.CounterTwo + action.value };
    case "decrementTwo":
      return { ...state, CounterTwo: state.CounterTwo - action.value };
    default:
      return state;
  }
};
export default function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>Counter One : {count.CounterOne}</h1>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "incrementOne",
                value: 2,
              })
            }
            className="button"
          >
            Increment One
          </button>
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "decrementOne",
                value: 2,
              })
            }
            className="button"
          >
            Decrement One
          </button>
        </div>
      </div>
      <div>
        <h1>Counter Two : {count.CounterTwo}</h1>
        <div className="flex gap-5">
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "incrementTwo",
                value: 5,
              })
            }
            className="button"
          >
            Increment Five
          </button>
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "decrementTwo",
                value: 2,
              })
            }
            className="button"
          >
            Decrement Two
          </button>
        </div>
      </div>
    </div>
  );
}
