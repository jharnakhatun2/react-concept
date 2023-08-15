import { useCallback, useState } from "react";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

export default function Displaycall() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const addCount1 = useCallback(() => {
    console.log("Increase One");
    setCount1((preCount) => preCount + 1);
  }, []);
  const addCount2 = useCallback(() => {
    console.log("Increase Five");
    setCount2((preCount) => preCount + 5);
  }, []);

  return (
    <div>
      <Title />
      <div className="flex gap-10">
        <div>
          <ShowCount count={count1} title="Count1" />
          <Button type="button" increase={addCount1}>
            Increase One
          </Button>
        </div>
        <div>
          <ShowCount count={count2} title="Count2" />
          <Button type="button" increase={addCount2}>
            Increase Five
          </Button>
        </div>
      </div>
    </div>
  );
}
