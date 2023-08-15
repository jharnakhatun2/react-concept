import React from "react";

function Button({ increase, children }) {
  console.log(`Button ${children}`);
  return (
    <div>
      <button onClick={increase} className="bg-gray-600 px-5 py-2 text-white">
        {children}
      </button>
    </div>
  );
}
export default React.memo(Button);
