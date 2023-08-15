import React from "react";

function Title() {
  console.log("I am title");
  return (
    <div>
      <h1>useCallback and useMemo</h1>
    </div>
  );
}
export default React.memo(Title);
