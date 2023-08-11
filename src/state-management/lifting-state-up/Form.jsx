import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(name);
  };
  return (
    <div>
      <h1>Lifting state up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border block"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
