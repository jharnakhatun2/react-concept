import { useState } from "react";

export default function PreData() {
  const [count, setCount] = useState(0);
  let i = 0;
  const addFive = () => {
    while (i < 5) {
      setCount((preCount) => preCount + 1);
      i += 1;
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={() => setCount((preCount) => preCount + 1)}
        className="bg-gray-400 text-white px-5 mr-2"
      >
        Add One
      </button>
      <button
        type="button"
        onClick={addFive}
        className="bg-gray-400 text-white px-5"
      >
        Add Five
      </button>
    </div>
  );
}
