import { useState } from "react";

export default function Basic() {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <p>{todo}</p>
      <p>
        <textarea
          name="details"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="border"
        />
      </p>
    </div>
  );
}
