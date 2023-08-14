import { useEffect, useState } from "react";

export default function BlankDependency() {
  const [date, setDate] = useState(new Date());

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
      <h1 className="my-5">Time: {date.toLocaleTimeString()}</h1>
    </div>
  );
}
