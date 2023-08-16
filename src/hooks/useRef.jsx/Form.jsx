import { useRef } from "react";
import { useEffect } from "react";

export default function Form() {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <p>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter something"
          className="border outline-none px-2"
        />
      </p>
    </div>
  );
}
