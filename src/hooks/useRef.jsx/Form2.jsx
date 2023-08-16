import { useRef } from "react";
import { useEffect } from "react";
import OnlyInput from "./Input";

export default function Form2() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <OnlyInput
        type="text"
        ref={inputRef}
        placeholder="Enter something"
        className="border outline-none px-2"
      />
    </div>
  );
}
