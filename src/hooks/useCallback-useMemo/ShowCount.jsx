import React from "react";

function ShowCount({ count, title }) {
  console.log(`ShowCount ${title}`);
  return (
    <div>
      <h1>
        {title} : {count}
      </h1>
    </div>
  );
}
export default React.memo(ShowCount);
