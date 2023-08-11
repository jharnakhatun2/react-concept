import ChildrenApply from "./ChildrenApply";
import ChildrenCounter from "./ChildrenCounter";

export default function ChildrenAnother() {
  return (
    <div>
      <ChildrenCounter>
        {(count, increment) => (
          <ChildrenApply count={count} increment={increment} />
        )}
      </ChildrenCounter>
    </div>
  );
}
