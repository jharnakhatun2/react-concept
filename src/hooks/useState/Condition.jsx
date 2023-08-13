import { useState } from "react";

export default function Condition() {
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState("");

  const handleTodo = (e) => {
    const updateTodo = e.target.value;
    const updateWarning = updateTodo.includes(".js")
      ? "any formate not supported in this field"
      : null;
    setTodo(updateTodo);
    setWarning(updateWarning);
  };
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea
          name="details"
          value={todo}
          onChange={handleTodo}
          className="border"
        />
      </p>
      <h1>{warning || "Good Choice!"}</h1>
    </div>
  );
}
