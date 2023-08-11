export default function Hover({ countHo, increment }) {
  return (
    <div>
      <h1
        onMouseOver={increment}
        className="text-2xl pt-10 uppercase font-semibold"
      >
        Hover Count <span className="text-red-600">{countHo}</span> times
      </h1>
    </div>
  );
}
