export default function Clicked({ counter, increment }) {
  return (
    <div>
      <button
        onClick={increment}
        type="button"
        className="text-white bg-stone-500 px-10 py-2"
      >
        Clicked <span className="text-yellow-200 text-xl">{counter}</span> times
      </button>
    </div>
  );
}
