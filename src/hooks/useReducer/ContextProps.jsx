import { useContext } from "react";
import { ContextData } from "./DisplayReducer";

export default function ContextProps() {
  const { dispatch } = useContext(ContextData);
  return (
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
  );
}
