import hoc from "./Hoc-parent";

function HocChild1({ money, increaseMoney }) {
  return (
    <div>
      <h1>I have {money}</h1>
      <button
        onClick={increaseMoney}
        className="bg-red-700 px-5 py-1 text-white"
      >
        Add Money
      </button>
    </div>
  );
}
export default hoc(HocChild1);
