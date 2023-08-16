import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        post: action.result,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "There was a problem",
      };
    default:
      return state;
  }
};
export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        dispatch({
          type: "SUCCESS",
          result: data,
        });
      })
      .catch(() => {
        dispatch({
          type: "ERROR",
        });
      });
  }, []);
  console.log(state);
  return (
    <div>
      <h1>{state.loading ? "Loading ...." : state.post.body}</h1>
      <p>{state.error || null}</p>
    </div>
  );
}
