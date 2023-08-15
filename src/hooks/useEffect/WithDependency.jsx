import { useEffect, useState } from "react";

export default function WithDependency() {
  const [count, setCount] = useState(0);

  // use useEffect with count dependency. as a result when change count value only that time useEffect call
  useEffect(() => {
    document.title = count;
  }, [count]);

  const addCount = () => {
    setCount((preCount) => preCount + 1);
  };

  return (
    <div>
      <button
        type="button"
        onClick={addCount}
        className="bg-red-500 my-2 px-5 py-2"
      >
        AddCount Title
      </button>
    </div>
  );
}
