export default function ClickCounters({ counter, increment }) {
  return (
    <div className="border my-5 p-7">
      <h1>Money adding {counter}</h1>
      <button
        className="bg-blue-500 text-white px-5 py-1 mt-5"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
