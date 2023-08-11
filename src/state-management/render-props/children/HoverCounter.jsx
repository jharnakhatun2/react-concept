export default function HoverCounter({ count, increment, decrement }) {
  return (
    <div>
      <h1 className="text-center py-10">
        Count <span className="text-2xl text-red-700">{count}</span> times
      </h1>
      <button onClick={increment} className="bg-gray-500 text-white px-5 py-1">
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-zinc-500 text-white px-5 py-1 ml-10"
      >
        Decrement
      </button>
    </div>
  );
}
