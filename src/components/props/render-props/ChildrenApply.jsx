export default function ChildrenApply({ count, increment }) {
  return (
    <div>
      <button className="bg-blue-400 px-10 py-2 text-white" onClick={increment}>
        {count}
      </button>
    </div>
  );
}
