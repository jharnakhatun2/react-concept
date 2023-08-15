import { useEffect } from "react";
import { useState } from "react";

export default function WithoutDependency() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  // use useEffect without any dependency. as a result it call  every render
  useEffect(() => {
    document.title = count;
  });

  const addCount = () => {
    setCount((preCount) => preCount + 1);
  };

  const tick = () => {
    setDate(new Date());
  };
  // use useEffect with blank dependency. as a result it call one time when page render in first time
  useEffect(() => {
    console.log("update without component time ");
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>Time : {date.toLocaleTimeString()}</h1>
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
