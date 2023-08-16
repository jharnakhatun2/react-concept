import { useEffect, useRef, useState } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());
  const stopTime = useRef();
  const tick = () => {
    setDate(new Date());
  };
  useEffect(() => {
    stopTime.current = setInterval(tick, 1000);
    return () => {
      clearInterval(stopTime.current);
    };
  }, []);

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <button
        onClick={() => clearInterval(stopTime.current)}
        className="bg-blue-300 px-10 py-2"
      >
        Stop Time
      </button>
    </div>
  );
}
