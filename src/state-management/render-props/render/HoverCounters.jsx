export default function HoverCounters({ counter, increment }) {
  return (
    <div className="border my-5 p-7">
      <button onMouseOver={increment}>
        Hover & Add <span className="text-3xl">{counter}</span> each time
      </button>
    </div>
  );
}
