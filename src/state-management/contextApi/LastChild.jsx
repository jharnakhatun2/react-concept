import { useContext } from "react";
import { TestData } from "./Context";

export default function LastChild() {
  const { name } = useContext(TestData);
  console.log(name);
  return (
    <div>
      <h1>This is Context Api example</h1>
      <h2>My name is {name}</h2>
    </div>
  );
}
