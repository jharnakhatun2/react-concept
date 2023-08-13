import { useState } from "react";

export default function Object() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todo;
  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        className="border my-5"
      />
      <br />
      <h1>{description}</h1>
      <textarea
        name="description"
        value={description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        className="border"
      />
    </div>
  );
}
