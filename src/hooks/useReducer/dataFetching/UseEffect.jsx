import { useEffect, useState } from "react";

export default function UseEffect() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.title);
        setLoading(false);
        setPost(data);
        setError("");
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError("There was a problem");
      });
  }, []);
  return (
    <div>
      <h1>{loading ? "Loading ...." : post.title}</h1>
      <p>{error || null}</p>
    </div>
  );
}
