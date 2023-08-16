import { createContext, useReducer } from "react";
import ContextProps from "./ContextProps";

export const ContextData = createContext();
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
export default function DisplayReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>Count - {count}</h1>
      <ContextData.Provider value={{ dispatch }}>
        <ContextProps />
      </ContextData.Provider>
    </div>
  );
}
