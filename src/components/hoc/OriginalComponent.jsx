import withCounter from "./withCounter";
function OriginalComponent(props) {
  const { count, increment } = props;
  return (
    <div>
      <button
        className="bg-violet-500 text-white px-5 py-1 rounded"
        type="button"
        onClick={increment}
      >
        Click {count} times
      </button>
    </div>
  );
}
export default withCounter(OriginalComponent);
