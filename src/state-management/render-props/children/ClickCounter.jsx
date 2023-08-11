import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function ClickCounter() {
  return (
    <div className="border my-5 p-5 inline-block">
      <h1>I am Children base ClickCounter</h1>
      <Counter>
        {(count, increment, decrement) => (
          <HoverCounter
            count={count}
            increment={increment}
            decrement={decrement}
          />
        )}
      </Counter>
    </div>
  );
}
