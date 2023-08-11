import Clicked from "./Clicked";
import Counter from "./Counter";
import Hover from "./Hover";

export default function Main() {
  return (
    <div>
      <Counter
        render={(count, increment) => (
          <Clicked counter={count} increment={increment} />
        )}
      />
      <Counter
        render={(count, increment) => (
          <Hover countHo={count} increment={increment} />
        )}
      />
    </div>
  );
}
