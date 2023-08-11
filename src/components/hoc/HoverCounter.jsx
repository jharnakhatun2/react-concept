import withCounter from "./withCounter";

function HoverCounter(props) {
  const { count, increment } = props;
  return (
    <div>
      <h1 className="text-2xl font-semibold mt-5" onMouseOver={increment}>
        Hovered {count} times
      </h1>
    </div>
  );
}
export default withCounter(HoverCounter);
