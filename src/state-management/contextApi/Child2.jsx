import { useContext } from "react";
import { TestData } from "./Context";
import LastChild from "./LastChild";

export default function Child2() {
  const { obj } = useContext(TestData);
  console.log(obj);
  return (
    <>
      <div>
        <h1>Your love is {obj.love}</h1>
        <p>I think you play game {obj.game}</p>
      </div>
      <LastChild />
    </>
  );
}
